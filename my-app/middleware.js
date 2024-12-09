// middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}

export async function middleware(req) {
  const token = req.cookies.get("token")?.value; // Extract the token value

  if (!token || typeof token !== "string") {
    return NextResponse.redirect(new URL("/pages/SignInPage", req.url));
  }

  try {
    // Verify the JWT token using `jose`
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );
    console.log("JWT payload:", payload);
    return NextResponse.next(); // Token is valid
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return NextResponse.redirect(new URL("/pages/SignInPage", req.url));
  }
}

// Config for matching specific routes
export const config = {
  matcher: ["/pages/dashboard/:path*"], // Protecting the dashboard and its subroutes
};
