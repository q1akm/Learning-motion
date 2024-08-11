import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from './routes/LoadingPage'
import Home from './Home'
import Basic from './routes/Basic'
import Dot from './routes/Dot'
import Cursor from './routes/Cursor'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loading" element={<LoadingPage/>}/>
        <Route path="/basic" element={<Basic/>}/>
        <Route path="/dot" element={<Dot/>}/>
        <Route path="/cursor" element={<Cursor/>}/>

      </Routes>
    </>
  )
}

export default App;