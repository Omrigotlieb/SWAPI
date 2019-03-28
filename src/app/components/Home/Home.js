import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import yodaWelcomeIcon from '../../../assets/yodaWelcomeIcon.png'

class Home extends React.Component {
constructor(props) {
  super(props);
}

render(){
  return (
    <div className="home">
      <div className="welcome">
      <img src={yodaWelcomeIcon} className='heart' alt="yoda"/>
      </div>
      <div>
        <h1>WELCOME YOU ARE!</h1>
        </div>
    </div>
  );
  }
}

export default Home;
