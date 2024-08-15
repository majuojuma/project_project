import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import links from '../Dashboard/List';

const role = localStorage.getItem('role');

const Nav = ({ userRole = localStorage.getItem('role') }) => {
 
  return (
    <>
      <Header />
      <div className="nav">
      <h3 style={{marginLeft:0}}>Main Navigation</h3>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 , marginLeft: 20, marginTop:30}}>
          {links[userRole].map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
