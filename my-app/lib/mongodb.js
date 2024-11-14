// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Environment variable for MongoDB connection string

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

// Create a MongoClient instance using the URI
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect(); // Connect to MongoDB
    console.log("Connected successfully to MongoDB!");
    return client; // Return the client to use for database operations
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error; // Throw the error if connection fails
  }
}

export default connectToDatabase;
