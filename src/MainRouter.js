import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,SkillsPage,ContactPage,ProjectsPage} from './Pages'


const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skills' element={<SkillsPage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
    </Routes>
  )
}

export default MainRouter