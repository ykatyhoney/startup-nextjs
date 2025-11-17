// API helper functions for frontend to call backend API routes

const API_BASE = "/api/auth";

export async function signUp(email: string, password: string, name?: string) {
  const response = await fetch(`${API_BASE}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { data: null, error: { message: data.error } };
  }

  return { data, error: null };
}

export async function signIn(email: string, password: string, rememberMe: boolean = false) {
  const response = await fetch(`${API_BASE}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, rememberMe }),
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    return { data: null, error: { message: data.error } };
  }

  return { data, error: null };
}

export async function signOut() {
  const response = await fetch(`${API_BASE}/signout`, {
    method: "POST",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    return { error: { message: data.error } };
  }

  return { error: null };
}

export async function signInWithOAuth(provider: "google" | "github") {
  // Redirect to OAuth endpoint
  // Note: This is a redirect, so it doesn't return a promise
  // Errors will be handled by the OAuth callback route
  if (typeof window !== "undefined") {
    window.location.href = `${API_BASE}/oauth?provider=${provider}`;
  }
}

export async function getCurrentUser() {
  const response = await fetch(`${API_BASE}/user`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    return { user: null, error: { message: data.error } };
  }

  return { user: data.user, error: null };
}

export async function resetPassword(email: string) {
  const response = await fetch(`${API_BASE}/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { data: null, error: { message: data.error } };
  }

  return { data, error: null };
}

export async function updatePassword(newPassword: string) {
  const response = await fetch(`${API_BASE}/update-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newPassword }),
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    return { data: null, error: { message: data.error } };
  }

  return { data, error: null };
}

