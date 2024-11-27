import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "GET request received at /api/dashboard",
  });
}

export async function POST(request) {
  try {
    const body = await request.json(); // Using request here
    console.log("POST request body:", body);
    return NextResponse.json({ message: "POST request received", data: body });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.error();
  }
}
