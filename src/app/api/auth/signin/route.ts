import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, rememberMe } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Set cookie maxAge based on rememberMe preference
    // If rememberMe is true, set to 30 days (2592000 seconds)
    // If false, use default session cookie (expires when browser closes)
    const maxAge = rememberMe ? 30 * 24 * 60 * 60 : undefined;

    const supabase = await createClient(maxAge);

    // Sign in the user
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      );
    }

    if (!data.user) {
      return NextResponse.json(
        { error: "Failed to sign in" },
        { status: 500 }
      );
    }

    // Create response with user data
    const response = NextResponse.json({
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
        user_metadata: data.user.user_metadata,
      },
      session: data.session,
    });

    // Ensure cookies are set with correct expiration
    // The Supabase client sets cookies through the setAll callback,
    // but we need to ensure they're on the response with the right expiration
    if (rememberMe && data.session) {
      // Get all cookies that Supabase set
      const allCookies = request.cookies.getAll();
      allCookies.forEach((cookie) => {
        // Supabase auth cookies typically start with 'sb-' or contain 'auth-token'
        if (
          cookie.name.startsWith("sb-") ||
          cookie.name.includes("auth-token") ||
          cookie.name.includes("supabase")
        ) {
          response.cookies.set(cookie.name, cookie.value, {
            maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
          });
        }
      });
    }

    return response;
  } catch (error: any) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred during sign in" },
      { status: 500 }
    );
  }
}

