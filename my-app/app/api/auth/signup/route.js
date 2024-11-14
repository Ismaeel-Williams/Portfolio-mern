import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

const client = new MongoClient(MONGODB_URI);

export const POST = async (req) => {
  try {
    const { name, surname, email, password } = await req.json();

    if (!name || !surname || !email || !password) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db(MONGODB_DB_NAME);

    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 409,
      });
    }

    // Create new user
    const newUser = {
      name,
      surname,
      email,
      password, // Remember to hash the password in production!
    };

    await usersCollection.insertOne(newUser);

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to sign up", error: error.message }),
      { status: 500 }
    );
  } finally {
    await client.close();
  }
};
