import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store.js';
import { Link } from 'react-router-dom';
import './SingleCard.css';
import cardIcon from '../../../assets/cardIcon.jpg';
import heart from '../../../assets/heart.svg';
import activeHeart from '../../../assets/activeHeart.svg';
import { favoriteCard } from '../../../actions/actionCreators';

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false
    };

    store.subscribe(() => {
     this.setState({
       isFavorite: store.getState().isFavorite
     });
   });

    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  handleHeartClick(e) {
    e.preventDefault();
    let state = store.getState();
    let { isFavorite } = state.favorite;
    this.props.favoriteCard(isFavorite);
  }

  componentWillReceiveProps(nextProps){
  this.setState({ isFavorite: nextProps.isFavorite });
  }

render() {
  let state = store.getState();
  const episodeId = this.props.episodeId;
  const heartIcon = state.favorite.isFavorite ? activeHeart: heart;
  const {view, films, i, people} = this.props;
  return (
<Link to={`/:${view}/:${i}`} style={{ textDecoration: 'none' }} key={i}>
    <div className='card' >
    <img src={this.props.cardIcon} alt="cardIcon" />
    <div >
    <img src={heartIcon} className='heart' alt="cardIcon" onClick={this.handleHeartClick}/>
    </div>
    <div className='title'>
     {this.props.title ? this.props.title : this.props.name}
     </div>
     {
      episodeId ?
      <div className='episode' key={'episode'+i}>Episode: {this.props.episodeId}</div> :
      <div className='episode'key={'episode'+i}>Gender :  {this.props.gender}</div>
      }
     <div className='director' key={'director'+i}>{this.props.director}</div>
   </div>
   </Link>
 );
};
};

const mapStateToProps = (state, ownProps) => ({
  isFavorite: ownProps.isFavorite
})

const mapDispatchToProps = dispatch => ({
  favoriteCard: (state) => dispatch(favoriteCard(state))
})

SingleCard = connect(mapStateToProps, mapDispatchToProps)(SingleCard)
export default SingleCard;
