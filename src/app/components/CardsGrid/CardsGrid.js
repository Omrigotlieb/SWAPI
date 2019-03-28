import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import { films }  from '../../../data/films';
import { people }  from '../../../data/people';
import { fetchDataFromAPI } from '../../../actions/actionCreators';
import { connect } from 'react-redux';
import './CardsGrid.css';
import loader from '../../../assets/loader.gif';

class CardsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      people: []
    }
    this.avatars = {};
    this.params = this.props.match.url.slice(1);
  }

  componentWillMount () {
      this.params = this.props.match.url.slice(1);
      let req;
      if(this.params === 'films') {
        req = require.context('../../../assets/films', true, /.*\.png$/);
      } else {
        req = require.context('../../../assets/people', true, /.*\.png$/);
      }
      this.avatars = req.keys();
     }

     componentDidMount() {
       this.props.fetchDataFromAPI(this.params);
     }

  render() {
    this.cardIcons = this.avatars || '';
    const data = this.props[this.params] || this.props.data;
    const view = this.props.data;
    return (
      <div>
      <ul className="flex-container wrap" key={this.params}>
      {data ? data.map((item, index)  => {
        let icon = this.avatars ? './' + this.params + '/'+ this.avatars[index].slice(2) : null;
        return (<li key={index}>
                <SingleCard
                    cardIcon={icon}
                    i={index}
                    view={view}
                    title={item.title}
                    episodeId={item.episode_id}
                    director={item.director}
                    name={item.name}
                    gender={item.gender}
                    key={index}
                    />
                  </li>);
                }) :
                 (<img src={loader} className='loader' alt="loader"/>)}
      </ul>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDataFromAPI: (params) => dispatch(fetchDataFromAPI(params))
})

CardsGrid = connect(null, mapDispatchToProps)(CardsGrid)
export default CardsGrid;
