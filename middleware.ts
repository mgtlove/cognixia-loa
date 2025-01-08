// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("id_token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Protect all routes except public ones
export const config = {
//   matcher: ["/protected/:path*"],
    matcher: ["/"],
};
