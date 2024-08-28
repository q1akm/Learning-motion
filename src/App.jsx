import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from './routes/LoadingPage'
import Home from './Home'
import Basic from './routes/Basic'
import Dot from './routes/Dot'
import Cursor from './routes/Cursor'
import PageTrans from './routes/pageTrans/PageTrans'
import About from './routes/pageTrans/About'
import Contact from './routes/pageTrans/Contact'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loading" element={<LoadingPage/>}/>
        <Route path="/basic" element={<Basic/>}/>
        <Route path="/dot" element={<Dot/>}/>
        <Route path="/cursor" element={<Cursor/>}/>
        <Route path="/pagetrans" element={<PageTrans/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> 
      </Routes>
    </>
  )
}

export default App;