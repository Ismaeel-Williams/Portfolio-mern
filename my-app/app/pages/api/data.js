import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("myDatabase"); // Replace with your database name
  const collection = db.collection("myCollection"); // Replace with your collection name

  switch (req.method) {
    // CREATE: Add a new document to the collection
    case "POST":
      try {
        const data = req.body; // Assume data is sent in the request body
        const result = await collection.insertOne(data);
        res.status(201).json({ success: true, data: result });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: "Failed to create data" });
      }
      break;

    // READ: Retrieve all documents
    case "GET":
      try {
        const data = await collection.find({}).toArray();
        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(500).json({ success: false, error: "Failed to fetch data" });
      }
      break;

    // UPDATE: Update an existing document
    case "PUT":
      try {
        const { id, ...updateData } = req.body; // Expecting the ID and new data in the request body
        const result = await collection.updateOne(
          { _id: id },
          { $set: updateData }
        );
        res.status(200).json({ success: true, data: result });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: "Failed to update data" });
      }
      break;

    // DELETE: Remove a document by ID
    case "DELETE":
      try {
        const { id } = req.body; // Expecting the ID in the request body
        const result = await collection.deleteOne({ _id: id });
        res.status(200).json({ success: true, data: result });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: "Failed to delete data" });
      }
      break;

    default:
      res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
