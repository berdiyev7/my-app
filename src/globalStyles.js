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

export default GlobalStyle