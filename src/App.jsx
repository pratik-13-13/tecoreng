
import React from 'react';
import Video from './components/Video';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import SuccessStories from './components/SuccessStories';
import Industries from './components/industries';
import Footer from './components/Footer';
import Appreciation from './components/Appreciation ';
import Insight from './components/Insight';
import Specialization from './components/Specialization';
import Services from './components/services';
import Project from './components/Project';
import Eng_Model from './components/Eng_Model';
import Development_Process from './components/Development_Process';




function App() {


  return (
    <>
      <Navbar />
      <Video />
      <Herosection/>
     <Services/>
     <Project/>
      <Specialization/>
      <Eng_Model/>
      <Development_Process/>
      <SuccessStories/>
      <Industries/>
      <Appreciation/>
      <Insight/>
      <Footer/>
      

    </>
  )
}

export default App
