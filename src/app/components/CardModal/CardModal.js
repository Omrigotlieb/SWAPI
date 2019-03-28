import React from 'react';
import { Link } from 'react-router-dom';
import './CardModal.css';
import cardIcon from '../../../assets/cardIcon.jpg';
import heart from '../../../assets/heart.svg';
import activeHeart from '../../../assets/activeHeart.svg';

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: true
    }
    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  handleHeartClick(e) {
    e.preventDefault();
    this.setState({ isFavorite: !this.state.isFavorite });
  }

render() {
  const episodeId = this.props.episodeId;
  const heartIcon = this.state.isFavorite ? activeHeart: heart;
  const {view, films, i, people} = this.props;
  return (
    <div className="container">
    <div className='card-modal'>
    omri: {view}
    <img src={cardIcon} alt="cardIcon" />
    <div onClick={this.handleHeartClick}>
    <img src={heartIcon} className='heart' alt="cardIcon" />
    </div>
    <div className='title'>
     {this.props.title ? this.props.title : this.props.name}
     </div>
     {
      episodeId ?
      <div className='episode'>Episode: {this.props.episodeId}</div> :
      <div className='episode'>Gender :  {this.props.gender}</div>
      }
     <div className='director'>{this.props.director}</div>
   </div>
   </div>
 );
};
};

export default CardModal;
