import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
   InfoColumn,
   InfoRow,
   InfoSec,
   TextWrapper,
   TopLine,
   Heading,
   Subtitle
} from './InfoSection.elements';

const InfoSection = ({
   lightBg,
   imgStart,
   lightTopLine,
   lightText,
   lightTextDesc,
   buttonLabel,
   description,
   headLine,
   primary,
   topLine
}) => {
   return (
      <>
         <InfoSec lightBg={lightBg} >
            <Container>
               <InfoRow imgStart={imgStart}>
                  <InfoColumn>
                     <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link>
                           <Button big fontBig primary={primary}>
                              {buttonLabel}
                           </Button>
                        </Link>
                     </TextWrapper>
                  </InfoColumn>
               </InfoRow>
            </Container>
         </InfoSec>
      </>
   )
}

export default InfoSection
