import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,SkillsPage} from './Pages'
import ProjectsPage from './Pages/ProjectsPage'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skills' element={<SkillsPage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
    </Routes>
  )
}

export default MainRouter