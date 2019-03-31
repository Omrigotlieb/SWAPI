import React from 'react';
import './CardModal.css';
import { favoriteCard } from '../../../actions/actionCreators';
import { connect } from 'react-redux';
import heart from '../../../assets/heart.svg';
import activeHeart from '../../../assets/activeHeart.svg';
import store from '../../../store';

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: this.props.isFavorite
    }
    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  handleHeartClick(e) {
    e.preventDefault();
    let state = store.getState();
    let { params } = this.props;
    this.props.favoriteCard(this);
    this.setState({ isFavorite: !state.isFavorite, params });
  }


render() {
  const data = this.props.data;
  const cardIcon = this.props.match.params.cardicon;
  const index = this.props.match.params.id.slice(1);
  const view = this.props.match.params.view.slice(1);
  const item = data && data[index];
  const headline = item ? item.name ? item.name : item.title : null;
  const year = item ? item.birth_year ? item.birth_year : item.release_date : null;
  const gender = item ? item.gender ? item.gender : item.director : null;
  const episodeId = item ? item.height ? item.height : item.episodeId : null;
  const heartIcon = this.state.isFavorite ? activeHeart: heart;
  return (
    <div className="container">
      <div className='card-modal'>
      <div className='top-card'>
        <div className='picture'>
          <img src={`../../${view}/${cardIcon}`} alt="cardIcon" className='icon'/>
        </div>
        <div className='headline'>
          {headline}
          </div>
          </div>
     <div className='year'>
      year : {year}
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

const mapStateToProps = (state, ownProps) => ({
  isFavorite: ownProps.isFavorite
})

const mapDispatchToProps = dispatch => ({
  favoriteCard: (state) => dispatch(favoriteCard(state))
})

CardModal = connect(mapStateToProps, mapDispatchToProps)(CardModal)

export default CardModal;
