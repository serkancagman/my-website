import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,SkillsPage} from './Pages'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skills' element={<SkillsPage/>} />
    </Routes>
  )
}

export default MainRouter