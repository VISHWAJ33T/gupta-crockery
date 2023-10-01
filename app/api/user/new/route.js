import User from "@/models/user";
import { connectToDB } from "@/db/database";

export const POST = async (req) => {
  const { usid, name, email, photoURL, cartItems } = await req.json();

  try {
    await connectToDB();
    // Check if a user with the same usid already exists
    const existingUser = await User.findOne({ usid });

    if (existingUser) {
      // User with the same usid already exists, return a 200  status code
      return new Response("User Already Exists", { status: 200 });
    }

    const newUser = new User({
      usid: usid,
      name: name,
      email: email,
      photoURL: photoURL,
      cartItems: cartItems,
    });
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    // return new Response("User Already Exists", { status: 202 });
    return new Response("Failed to create a new User", { status: 500 });
  }
};
