import React from 'react'
import CreatePrompt from '@app/components/CreatePrompt'
import { auth } from '@auth'

const CreatePromptPage = async () => {
    const session = await auth()
    const userId = session?.user?.id || session?.sub
    // console.log('Session:', session)
    // console.log('User ID:', userId)
  return (
    <>
        <CreatePrompt session={session}/>
    </>
  )
}

export default CreatePromptPage