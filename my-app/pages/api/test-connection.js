import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI; // MongoDB URI from .env.local

const handler = async (req, res) => {
  try {
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();
    // Try a simple query to check the connection, like listing collections
    const collections = await db.collections();
    res.status(200).json({ message: "MongoDB connected", collections });

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to MongoDB", error });
  } finally {
    // Ensure the connection is only closed if it was successfully opened
    if (client && client.isConnected()) {
      await client.close();
    }
  }
};

export default handler;
