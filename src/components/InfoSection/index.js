import React from 'react'
import { Button } from '../ButtonElement'
import { Column2, Img, TextWrapper, ImgWrap, InfoContainer, Subtitle, BtnWrap, InfoRow, InfoWrapper, Column1, TopLine, Heading } from './InfoElements'

const InfoSection = ({ 
    lightBg,
     alt, 
     id, 
     imgStart, 
     topLine, 
     lightText, 
     headLine, 
     darkText, 
     description, 
     buttonLable, 
     img,
     primary,
     dark,
     dark2 
    }) => {
    console.log(img)
    return (
        <>
            <InfoContainer name={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}

                                    >{buttonLable}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img.default} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
