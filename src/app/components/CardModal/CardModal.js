import React from 'react';
import { Link } from 'react-router-dom';
import './CardModal.css';
import cardIcon from '../../../assets/cardIcon.jpg';
import heart from '../../../assets/heart.svg';
import activeHeart from '../../../assets/activeHeart.svg';
import store from '../../../store';

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
    let {favoritesData} = store.getState();
    favoritesData = favoritesData.push(this.props.data);
    this.setState({
      isFavorite: !this.state.isFavorite,
      favoritesData
     });

  }

render() {
  const data = this.props.data;
  const index = this.props.match.params.id.slice(1);
  const item = data && data[index];
  const headline = item ? item.name ? item.name : item.title : null;
  const year = item ? item.birth_year ? item.birth_year : item.release_date : null;
  const gender = item ? item.gender ? item.gender : item.director : null;
  const episodeId = item ? item.height ? item.height : item.episodeId : null;
  const heartIcon = this.state.isFavorite ? activeHeart: heart;
  const {view, films, i, people} = this.props;
  return (
    <div className="container">
    <div className='card-modal'>
    <div className='headline'>
     {headline}
     </div>
     <img src={cardIcon} alt="cardIcon" />
     <div className='year'>
      {year}
      </div>
      <div className='year'>
       {gender}
       </div>
       <div className='year'>
        {episodeId}
        </div>

    <div onClick={this.handleHeartClick}>
    <img src={heartIcon} className='heart' alt="cardIcon" />
   </div>
   </div>
   </div>
 );
};
};

export default CardModal;
