import React,{useEffect, useState} from 'react'
import { Nav, NavbarContainer,NavBtn,NavBtnLink, NavLogo,MobileIcon,NavLinks,NavMenu,NavItem } from './NavbarElements'
import { FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'
import './../../App.css'
const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]=useState(false);
    const changeNav=()=>{
        if(window.scrollY>80){
        setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome=()=>{
        scroll.scrollToTop()
    }
    return (
        <>
            <Nav scrollNav={scrollNav} onClick={toggleHome}>
                <NavbarContainer>
                    <NavLogo to="/">DG WebTech</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80} 

                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80} >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80} >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80} >Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin" className="signInbtn">Sign in</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
