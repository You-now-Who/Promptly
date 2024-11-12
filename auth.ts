  import { MongoDBAdapter } from "@auth/mongodb-adapter"
  import NextAuth from "next-auth"
  import Google from "next-auth/providers/google"
  import client from "@lib/db"
  import User from "@models/user"
  import { connectToDB } from "@utils/database"

  export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    session: {
    },
    callbacks: {
      async session({ session, token }) {
        const sessionUser = await Promise.race([
          User.findOne({ email: session.user.email }),
          new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 5000))
        ]);

        if (sessionUser) {
          session.user.id = sessionUser.id;
        } else {
          session = null;
        }

        return session;
      },
      async signIn({ account, profile, user, credentials }) {
        try {
          await connectToDB();

          // check if user already exists
          const userExists = await User.findOne({ email: profile.email });

          // if not, create a new document and save user in MongoDB
          if (!userExists) {
            await User.create({
              email: profile.email,
              username: profile.name.replace(" ", "").toLowerCase(),
              image: profile.picture,
            });
          }

          return true;
        } catch (error) {
          console.log("Error checking if user exists: ", error.message);
          return false;
        }
      },
    },
  });