import { User } from "@/models/User"; // Assuming the User model is properly defined

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, password, address, role } = req.body;

    try {
      // Validate incoming data
      if (!name || !email || !phone || !password || !address || !role) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Create a new user
      const newUser = new User({
        username: name,
        email,
        phone,
        password, // You should hash the password before saving it (use bcrypt)
        address,
        isAdmin: role === "Admin",
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
