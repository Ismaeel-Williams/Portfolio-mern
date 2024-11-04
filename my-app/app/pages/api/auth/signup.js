// my-app/pages/api/auth/signup.js
import dbConnect from "@app/lib/mongodb"; // Adjust the path if necessary
import User from "@app/models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, surname, email, password } = req.body;

    try {
      await dbConnect(); // Ensure you connect to the database

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create a new user
      const user = new User({ name, surname, email, password });
      await user.save();

      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error creating user" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
