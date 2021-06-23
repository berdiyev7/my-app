import React, { useState } from 'react'
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
   MobileIcon
} from './Navbar.elements';

const Navbar = () => {
   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)

   return (
      <>
         <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
               <NavbarContainer>
                  <NavLogo to="/">
                     <NavIcon />
                     LOGO
                  </NavLogo>
                  <MobileIcon onClick={handleClick}>
                     {click ? <FaTimes /> : <FaBars />}
                  </MobileIcon>
                  <NavMenu onClick={handleClick} click={click}>
                     <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='/about'>About</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='/contacts'>Contacts</NavLinks>
                     </NavItem>
                  </NavMenu>
               </NavbarContainer>
            </Nav>
         </IconContext.Provider>
      </>
   )
}

export default Navbar