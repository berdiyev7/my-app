import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export const Container = styled.div`
   width: 100%;
   max-width: 1170px;
   margin: 0 auto;
   padding: 0 1rem;
`;

export const Button = styled.button`
   border-radius: 4px;
   background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
   white-space: nowrap;
   padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
   color: #fff;
   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
   outline: none;
   border: none;
   cursor: pointer;

   &:hover{
      transition: all 0.3s ease-out;
      background: #fff;
      background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
   }

   @media screen and (max-width: 960px){
      width: 100%;
   }
`;

export default GlobalStyle