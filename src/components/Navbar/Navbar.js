import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
   Nav,
   NavMenu,
   NavItem,
   NavLinks,
   NavbarContainer,
   NavLogo,
   NavIcon,
   NavBtnLink,
   NavItemBtn,
   MobileIcon
} from './Navbar.elements';
import { Button } from '../../globalStyles';

function Navbar() {
   const [click, setClick] = useState(false)
   const [button, setButton] = useState(true)

   const handleClick = () => setClick(!click)
   const closeMobileMenu = () => setButton(!click)

   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false)
      } else {
         setButton(true)
      }
   }

   useEffect(() => {
      showButton()
   }, [])

   window.addEventListener('resize', showButton);

   return (
      <>
         <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
               <NavbarContainer>
                  <NavLogo to="/" onClick={closeMobileMenu}>
                     <NavIcon />
                     ULTRA
                  </NavLogo>
                  <MobileIcon onClick={handleClick}>
                     {click ? <FaTimes /> : <FaBars />}
                  </MobileIcon>
                  <NavMenu onClick={handleClick} click={click}>
                     <NavItem>
                        <NavLinks to='/' onClick={closeMobileMenu}>Home</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='/services' onClick={closeMobileMenu}>Services</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='/products' onClick={closeMobileMenu}>Products</NavLinks>
                     </NavItem>
                     <NavItemBtn>
                        {button ? (
                           <NavBtnLink to='/sign-up'>
                              <Button primary >
                                 SIGN UP
                              </Button>
                           </NavBtnLink>
                        ) : (
                           <NavBtnLink to='/sign-up'>
                              <Button onClick={closeMobileMenu} fontBig primary>
                                 SIGN UP
                              </Button>
                           </NavBtnLink>
                        )}
                     </NavItemBtn>
                  </NavMenu>
               </NavbarContainer>
            </Nav>
         </IconContext.Provider>
      </>
   );
}

export default Navbar;