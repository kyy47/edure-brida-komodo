import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const tokenStatus = request.cookies.get("token");
  if (request.nextUrl.pathname === "/trackcycle") {
    if (!tokenStatus)
      return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname === "/quiz") {
    if (!tokenStatus)
      return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname === "/login") {
    if (tokenStatus) return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/trackcycle", "/quiz"],
};
