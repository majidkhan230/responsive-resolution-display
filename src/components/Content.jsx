import React from 'react'
import ShowResolution from './ShowResolution'
import { MyProvider } from '../context/MyProvider'

const Content = () => {
  return (
    <MyProvider>
      <ShowResolution/>
    </MyProvider>
  )
}

export default Content