import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterLink,FooterLinkContainer,
    FooterLinkItems,FooterLinkTitle,FooterLinkWraper,
    FooterWrap,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights} from './FooterElement'
const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWraper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>    
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors </FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos </FooterLinkTitle>    
                                <FooterLink to="/signin">Submit Video </FooterLink>
                                <FooterLink to="/signin">Ambassadors</FooterLink>
                                <FooterLink to="/signin">Agency</FooterLink>
                                <FooterLink to="/signin">Influencer</FooterLink>
                                {/* <FooterLink to="/signin">Terms of Services</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinkWraper>
                    <FooterLinkWraper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>    
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Destination</FooterLink>
                                <FooterLink to="/signin">Sponsership </FooterLink>
                                {/* <FooterLink to="/signin">Terms of Services</FooterLink> */}
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media</FooterLinkTitle>    
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">FaceBook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter </FooterLink>
                                {/* <FooterLink to="/signin">Terms of Services</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinkWraper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        DG WebTech
                        </SocialLogo>
                        <WebsiteRights>DG WebTech © {new Date().getFullYear()} All rights reserved .</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/dhruv.gopani.7" target="_blank" arial-label="Facebook"><FaFacebook /></SocialIconLink>
                        
                        
                            <SocialIconLink href="https://www.instagram.com/_dhruv_gopani_" target="_blank" arial-label="Instagram"><FaInstagram /></SocialIconLink>
                        
                        
                            <SocialIconLink href="/" target="_blank" arial-label="Youtube"><FaYoutube /></SocialIconLink>
                        
                        
                            <SocialIconLink href="/" target="_blank" arial-label="Twitter"><FaTwitter /></SocialIconLink>
                            </SocialIcons>
                  
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
