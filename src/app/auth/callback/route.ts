import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    const error = requestUrl.searchParams.get("error");
    const origin = requestUrl.origin;

    // Handle OAuth errors
    if (error) {
      console.error("OAuth error:", error);
      return NextResponse.redirect(`${origin}/signin?error=${encodeURIComponent(error)}`);
    }

    if (code) {
      const supabase = await createClient();
      const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
      
      if (exchangeError) {
        console.error("Session exchange error:", exchangeError);
        return NextResponse.redirect(`${origin}/signin?error=${encodeURIComponent(exchangeError.message)}`);
      }
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(`${origin}/`);
  } catch (error: any) {
    console.error("Auth callback error:", error);
    const requestUrl = new URL(request.url);
    const origin = requestUrl.origin;
    return NextResponse.redirect(`${origin}/signin?error=authentication_failed`);
  }
}

