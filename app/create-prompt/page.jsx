"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Form from '@app/components/Form'
import { useSession } from 'next-auth/react'

const CreatePrompt = () => {
    const [ submitting, setSubmitting ] = useState(false)
    const [ post, setPost ] = useState({
        prompt: '',
        tag: ''
    })
    const session = useSession();

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userID: session?.user.ud,
                    tag: post.tag
                })
            });
        } catch (error) {
            
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