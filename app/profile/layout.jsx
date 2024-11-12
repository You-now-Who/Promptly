import React, { Suspense } from 'react'
import User from '@models/user'
import Prompt from '@models/prompt'

const layout = ({children}) => {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
      
    </div>
  )
}

export default layout