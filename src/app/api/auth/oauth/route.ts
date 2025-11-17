import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const provider = searchParams.get("provider") as "google" | "github";

    if (!provider || !["google", "github"].includes(provider)) {
      return NextResponse.json(
        { error: "Invalid provider. Use 'google' or 'github'" },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const origin = request.nextUrl.origin;

    // Generate OAuth URL
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    if (!data.url) {
      return NextResponse.json(
        { error: "Failed to generate OAuth URL" },
        { status: 500 }
      );
    }

    // Redirect to OAuth provider
    return NextResponse.redirect(data.url);
  } catch (error: any) {
    console.error("OAuth error:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred during OAuth" },
      { status: 500 }
    );
  }
}

