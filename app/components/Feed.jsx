import React from "react"
import { auth } from "@auth"

const Feed = async () => {
  const session = await auth()
  console.log(session?.user)
  
  return (
    <div>
      <h1>Feed</h1>
      <p>{session ? session?.user?.name : "No session"}</p>
    </div>
  )
}

export default Feed