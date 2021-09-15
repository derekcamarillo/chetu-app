
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background:  #333;;
height: 85px;
display: flex;
justify-content: left;
padding: 0px;
`;

export const NavLink = styled(Link)`
color: white;
display: flex;
font-weight: bolder;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #364141c2;
	color: White;
}
`;



export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #37E4B0;
padding: 8px 18px;
color: black;
font-weight: bolder;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #2EC396;
	color: black;
}
`;
