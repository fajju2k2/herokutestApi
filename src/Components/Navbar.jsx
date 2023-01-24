import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;
      li {
        list-style: none;
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;

            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
  `;
  return (
    <Nav>
      <div className='menuIcon'>
        <ul className='navbar-list'>
          <li>
            <NavLink to='/' className='navbar-link'>
              {' '}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/About' className='navbar-link'>
              {' '}
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/Services' className='navbar-link'>
              {' '}
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to='/Contact' className='navbar-link'>
              {' '}
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
