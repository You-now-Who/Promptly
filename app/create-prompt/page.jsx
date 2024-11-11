"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Form from '@app/components/Form'

const CreatePrompt = () => {
    const [ submitting, setSubmitting ] = useState(false)
    const [ post, setPost ] = useState({
        prompt: '',
        tag: ''
    })

    const createPrompt = async (e) => {
        
    }
    
  return (
    <>
        <Form
        type="Create"
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}/>
    </>
  )
}

export default CreatePrompt