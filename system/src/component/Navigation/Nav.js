import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import links from '../Dashboard/List';

const role = localStorage.getItem('role');

const Nav = ({ userRole = localStorage.getItem('role') }) => {
  // Check if userRole exists in links object
  // if (!links[userRole]) {
  //   console.error(`Role ${role} does not exist in links object`);
  //   return <div>Error: Role not found</div>;
  // }

  return (
    <>
      <Header />
      <div className="nav">
        <ul>
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
