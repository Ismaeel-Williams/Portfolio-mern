import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;
const JWT_SECRET = process.env.JWT_SECRET;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

if (!MONGODB_DB_NAME) {
  throw new Error(
    "MONGODB_DB_NAME is not defined in the environment variables"
  );
}

if (!JWT_SECRET) {
  console.log("Generated Token:", token);

  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  console.log("JWT_SECRET type:", typeof process.env.JWT_SECRET);

  throw new Error("JWT_SECRET is not defined in the environment variables");
}

let cachedClient = null;

const connectToDatabase = async () => {
  if (cachedClient) return cachedClient;

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
};

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    // Validate required fields
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Connect to the database
    const client = await connectToDatabase();
    const db = client.db(MONGODB_DB_NAME);
    const usersCollection = db.collection("users");

    // Find the user by email
    const user = await usersCollection.findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({
          message: "Email not found. Please sign up if you haven't already.",
        }),
        { status: 401 }
      );
    }

    // Compare the provided password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return new Response(
        JSON.stringify({
          message: "Incorrect password. Please try again.",
        }),
        { status: 401 }
      );
    }

    // Generate a JWT
    const token = jwt.sign(
      { email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: "1h" } // Token valid for 1 hour
    );

    // Set the token as an HTTP-only cookie
    const response = new Response(
      JSON.stringify({
        message: "Sign-in successful",
        user: { name: user.name, email: user.email },
      }),
      { status: 200 }
    );
    response.headers.set(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=3600; Secure=${
        process.env.NODE_ENV === "production"
      }`
    );

    return response;
  } catch (error) {
    if (error instanceof MongoClient.MongoError) {
      return new Response(
        JSON.stringify({ message: "Database error", error: error.message }),
        { status: 500 }
      );
    }

    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ message: "An error occurred", error: error.message }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Unexpected error", error: "Unknown error" }),
      { status: 500 }
    );
  }
};
