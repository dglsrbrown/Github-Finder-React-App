import React from 'react';
import PropTypes from 'prop-types'; //impt enter is the shortcut
import { Link } from 'react-router-dom';

//destructuring where props would normally be written
const Navbar = ({ icon, title }) => {
  //destructuring for cleaner code
  // const { icon, title } = props;

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  //something to show if nothing is passed in
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  // type checking
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
