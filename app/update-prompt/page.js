import React from 'react'
import { Suspense } from 'react'
import UpdatePrompt from '@app/components/UpdateForm'

const UpdatePromptPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  )
}

export default UpdatePromptPage