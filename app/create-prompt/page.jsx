import React from 'react'
import CreatePrompt from '@app/components/CreatePrompt'
import { auth } from '@auth'

const CreatePromptPage = async () => {
    const session = await auth()
  return (
    <>
        <CreatePrompt session={session}/>
    </>
  )
}

export default CreatePromptPage