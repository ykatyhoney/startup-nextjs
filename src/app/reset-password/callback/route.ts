import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = requestUrl.origin;
  const hashParams = new URLSearchParams(requestUrl.hash.substring(1));
  const accessToken = hashParams.get("access_token");
  const type = hashParams.get("type");

  if (accessToken && type === "recovery") {
    const supabase = await createClient();
    
    // Set the session with the recovery token
    const { error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: hashParams.get("refresh_token") || "",
    });

    if (!error) {
      // Redirect to reset password page with success
      return NextResponse.redirect(`${origin}/reset-password?reset=true`);
    }
  }

  // If there's an error or no token, redirect to reset password page
  return NextResponse.redirect(`${origin}/reset-password`);
}

