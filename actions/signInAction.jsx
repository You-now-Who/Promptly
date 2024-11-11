"use server";
import { signIn } from "@auth";
import { connectToDB } from "@utils/database";
import User from "@models/user";

export default async function signInAction() {
  await signIn("google");
    await connectToDB();

    const userExists = await User.findOne({ email: session.user.email });

    if (!userExists){
      await User.create({
        email: profile.email,
        username: profile.name.replace(" ", "").toLowerCase(),
        image: profile.picture
      })
    }
}