import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import {homeObjOne,homeObjThree,homeObjTwo} from './../components/InfoSection/Data'
import Footer from '../components/Footer'
import './../App.css'
const Home = () => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>   
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
            {/* <InfoSection {...homeObjFour}/> */}
            {/* <InfoSection {...homeObjFive}/>
            <InfoSection {...homeObjSix}/> */}
        </>
    )
}

export default Home
