"use server";
import { signIn } from "@auth";
import { connectToDB } from "@utils/database";
import User from "@models/user";

export default async function signInAction() {
  // console.log('hello world')
  await signIn("google");
  // console.log('goodbye world')
    await connectToDB();
    const userExists = await User.findOne({ email: session.user.email });
    console.log("User exists: ", userExists);

    if (!userExists){
      console.log("User does not exist, creating user");
      await User.create({
        email: profile.email,
        username: profile.name.replace(" ", "").toLowerCase(),
        image: profile.picture
      })
    }
}