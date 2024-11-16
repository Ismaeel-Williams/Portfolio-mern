import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}
if (!MONGODB_DB_NAME) {
  throw new Error(
    "MONGODB_DB_NAME is not defined in the environment variables"
  );
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
    const { name, surname, email, password } = await req.json();

    if (!name || !surname || !email || !password) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db(MONGODB_DB_NAME);
    const usersCollection = db.collection("users");

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      surname,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during user signup:", error);
    return new Response(
      JSON.stringify({ message: "Failed to sign up", error: error.message }),
      { status: 500 }
    );
  }
};
