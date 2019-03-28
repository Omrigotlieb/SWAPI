import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
constructor(props) {
  super(props);
}

render(){
  return (
    <ul className='navigation'>
      <li className='navItem'>
        <Link to="/">Home</Link>
      </li>
      <li className='navItem'>
        <Link to="/people">People</Link>
      </li>
      <li className='navItem'>
        <Link to="/films">Films</Link>
      </li>
      <li className='navItem'>
        <Link to="/favorite">Favorite</Link>
      </li>

    </ul>
  );
  }
}

export default Header;