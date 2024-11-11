// "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@auth";
import signInAction from "@actions/signInAction";
import signOutAction from "@actions/signOutAction";

const Navbar = async () => {
  const session = await auth();
  // console.log(session);  
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2">
        {/* <Image src="/logo.png" alt="logo" width={40} height={40} className="object-contain"/> */}
        <h1 className="text-2xl logo_text font-bold">Promptly</h1>
      </Link>

      <div className="sm:flex hidden">
        {session && session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <form action={signOutAction}>
              <button type="submit" className="outline_btn">Sign Out</button>
            </form>
          
            <Link href="/profile">
              {session?.user?.image ? (
                <Image
                  src={session?.user?.image}
                  alt="profile"
                  width={40}
                  height={40}
                  className="object-cover rounded-full cursor-pointer"
                />
              ) : (
                <div className="h-10 w-10 bg-gray-300 rounded-full cursor-pointer"></div>
              )}
            </Link>
          </div>
        ) : (
          <>
            <form
              action={signInAction}
            >
              <button type="submit" className="black_btn">Sign In with Google</button>
            </form>
          </>
        )}
      </div>


    </nav>
  );
};

export default Navbar;
