import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Bgslider from '../components/Bgslider'
import Testimonials from '../components/Testimonial'
import Upload from '../components/Upload'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Bgslider />
      <Testimonials/>
      <Upload/>

    </div>
  )
}

export default Home
