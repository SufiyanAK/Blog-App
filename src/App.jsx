import React from 'react'
import { env } from './envImports/envVariables'

const App = () => {

  console.log(env.projectId)


  return (
    <>
      <h1>
        App
      </h1>
    </>
  )
}

export default App