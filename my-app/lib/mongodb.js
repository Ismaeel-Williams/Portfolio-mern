import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

async function connectToDatabase() {
  const client = await clientPromise;
  return client.db(process.env.DB_NAME); // Ensure DB_NAME is set in your .env file
}

// Fetch users
export async function getUsers(filter = {}) {
  const db = await connectToDatabase();
  return db.collection("users").find(filter).toArray();
}

// Fetch a single user
export async function getUser(filter = {}) {
  const db = await connectToDatabase();
  return db.collection("users").findOne(filter);
}

// Delete a user
export async function deleteUser(filter) {
  const db = await connectToDatabase();
  return db.collection("users").deleteOne(filter);
}

// Update a user
export async function updateUser(filter, updateData) {
  const db = await connectToDatabase();
  return db.collection("users").updateOne(filter, { $set: updateData });
}

// Create a user
export async function createUser(userData) {
  const db = await connectToDatabase();
  return db.collection("users").insertOne(userData);
}
