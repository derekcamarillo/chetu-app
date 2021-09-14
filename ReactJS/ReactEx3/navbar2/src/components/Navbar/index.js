import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
        <div class="header" style={{padding:'3vh', backgroundColor:'#FB94C2',}}>
          <h2>This IS Nev</h2>

        </div>
      <Nav>
  
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            ContactUS
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;