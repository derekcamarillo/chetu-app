import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
height: 85px;
width: 100%;
display: flex;
justify-content: space-between;
list-style-type: none;
overflow: hidden;
background-color: #333;
font-weight: bolder;
font-size: larger;

`;

export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 0.5rem;
height: 100%;
cursor: pointer;
&.active {
	color: white;
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
background-color: #4CAF50;
color: white;
padding: 12px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
float: right;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #07DD62;
	color: #fff;
}
`;
