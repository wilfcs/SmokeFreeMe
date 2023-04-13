import React from 'react'
import "./App.css"
// import { Button, ButtonGroup } from '@chakra-ui/react'
import {Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Chatpage from './pages/Chatpage'
const App = () => {
  return (
    <div className='App'>
      <Route path="/" component={Homepage} exact/>
      <Route path="/chat" component={Chatpage}/>
      
    </div>
  )
}

export default App

