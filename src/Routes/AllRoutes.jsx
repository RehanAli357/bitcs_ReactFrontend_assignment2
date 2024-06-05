import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage' 
import PostPage from '../Pages/PostPage'
import EditPost from '../Pages/EditPost'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='*' exact element={<HomePage/>}/>
      <Route path='/bitcs_ReactFrontend_assignment2' element={<HomePage/>}/>
      <Route path='/bitcs_ReactFrontend_assignment2/home' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/post/:id' element={<PostPage/>}/>
      <Route path ='/post/edit/:id' element ={<EditPost/>}/>
      <Route path='/about'  element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
  )
}

export default AllRoutes
