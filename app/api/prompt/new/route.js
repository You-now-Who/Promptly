import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json()
    // console.log(req.json())
    // console.log("recieved userID is: ", userId)
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt: prompt,
            tag: tag
        });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch (error) {
        console.error(error);
        return new Response("Failed to create prompt", {status: 500})
    }
}