import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from './routes/LoadingPage'
import Home from './Home'
import Basic from './routes/Basic'
import Dot from './routes/Dot'
import Cursor from './routes/cursor/Cursor'
import PageTrans from './routes/pageTrans/PageTrans'
import About from './routes/pageTrans/About'
import Contact from './routes/pageTrans/Contact'
import Drag from './routes/Drag'
import GSAP001 from './routes/GSAP001'
import Test from './routes/Test/Test'


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
        <Route path="/drag" element={<Drag/>}/> 
        <Route path="/gsap001" element={<GSAP001/>}/> 
        <Route path="/test" element={<Test/>}/> 
      </Routes>
    </>
  )
}

export default App;