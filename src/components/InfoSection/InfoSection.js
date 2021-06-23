import React from 'react'
import { Container } from '../../globalStyles';
import { InfoColumn, InfoRow, InfoSec, TextWrapper } from './InfoSection.elements';

const InfoSection = ({ lightBg, imgStart }) => {
   return (
      <>
         <InfoSec lightBg={lightBg} >
            <Container>
               <InfoRow imgStart={imgStart}>
                  <InfoColumn>
                     <TextWrapper>h</TextWrapper>
                  </InfoColumn>
               </InfoRow>
            </Container>
         </InfoSec>
      </>
   )
}

export default InfoSection
