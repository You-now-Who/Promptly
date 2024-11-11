"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from '@app/components/Form'
import { useSession } from 'next-auth/react'

const CreatePrompt = ({ session }) => {
    const [ submitting, setSubmitting ] = useState(false)
    const [ post, setPost ] = useState({
        prompt: '',
        tag: ''
    })
    // const { data: session } = useSession();
    const router = useRouter();

    // console.log(session?.user)

    const createPrompt = async (e) => {
        // e.preventDefault();
        setSubmitting(true);
        try {
            // console.log(session?.user.id)
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            });

            if (response.ok){
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

  return (
    <>
            <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}/>
    </>
  )
}

export default CreatePrompt