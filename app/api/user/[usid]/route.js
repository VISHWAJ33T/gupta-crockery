import User from "@/models/user.js";
import { connectToDB } from "@/db/database.js";

// GET (READ)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const user = await User.findOne({ usid: params.usid });
    if (!user) return new Response("User not found", { status: 404 });

    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to fetch user", {
      status: 500,
    });
  }
};

// PATCH (UPDATE)
export const PATCH = async (request, { params }) => {
  const { usid, name, email, photoURL, cartItems } = await request.json();

  try {
    await connectToDB();

    const existingUser = await User.findOne({ usid: params.usid });

    if (!existingUser) return new Response("User not found", { status: 404 });
    existingUser.usid = usid;
    existingUser.name = name;
    existingUser.email = email;
    existingUser.photoURL = photoURL;
    existingUser.cartItems = cartItems;

    await existingUser.save();
    return new Response(JSON.stringify(existingUser), { status: 200 });
  } catch (error) {
    return new Response("Failed to update User", { status: 500 });
  }
};

// DELETE (DELETE)
// export const DELETE = async (request, { params }) => {
//   try {
//     await connectToDB();
//     await User.findByIdAndRemove(params.id);
//     return new Response("User deleted Successfully", { status: 200 });
//   } catch (error) {
//     return new Response("Failed to delete User", { status: 500 });
//   }
// };
