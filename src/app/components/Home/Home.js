import React from 'react';
import './Home.css';
import yodaWelcomeIcon from '../../../assets/yodaWelcomeIcon.png'

class Home extends React.Component {

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
