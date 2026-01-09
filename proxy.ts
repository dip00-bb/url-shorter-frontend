// middleware.js
import { NextRequest, NextResponse } from "next/server";

export function proxy(req:NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  
  const pathname = req.nextUrl.pathname;

  const protectedRoutes = ["/dashboard", "/profile", "/settings", "/admin"];

  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("redirect", pathname);
      console.log(loginUrl)
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}
