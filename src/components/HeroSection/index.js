import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import Video from './../../video/video.mp4'
import { HeroContainer, VideoBg, HeroBtnWrapper, HeroH1, HeroP, HeroBg, HeroContent, ArrowForward, ArrowRght } from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>

                <HeroP>
                    Sign up for a new account today and receive 300 rs. in
                    credit toward your
                    next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary='true'
                        dark='true'
                        onMouseEnter={onHover} onMouseLeave={onHover} hover={hover}>
                        Get started {hover ? <ArrowForward /> : <ArrowRght />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
