import { MongoClient } from "mongodb";
import { NextResponse } from "next/server"; // Import NextResponse

const MONGODB_URI = process.env.MONGODB_URI;

export async function GET() {
  let client;

  try {
    client = new MongoClient(MONGODB_URI);

    const db = client.db();
    const collections = await db.collections();

    // Return JSON response with status 200
    return NextResponse.json(
      { message: "MongoDB connected", collections },
      { status: 200 }
    );
  } catch (error) {
    // Return JSON response with status 500
    return NextResponse.json(
      { message: "Failed to connect to MongoDB", error },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close(); // Close the connection
    }
  }
}
