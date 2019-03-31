import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './CardsGrid.css';
import loader from '../../../assets/loader.gif';

class CardsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      people: []
    }

    this.params = this.props.params;
  }

  componentWillMount () {
      let req = require.context('../../../assets', true, /.*\.png$/)
                .keys();
      this.avatars = [];
      this.avatars['favorites/'] = req.splice(0,21).map(item => item.replace(new RegExp('\.\/[a-z]*\/') , ''));;
      const filmsAvatar = req.splice(1,9).map(item => item.replace(new RegExp('\.\/[a-z]*\/') , ''));
      const peopleAvatar = req.splice(1,11).map(item => item.replace(new RegExp('\.\/[a-z]*\/') , ''));;
      this.avatars['films/'] = filmsAvatar;
      this.avatars['people/'] = peopleAvatar;
     }

  render() {
    //this.cardIcons = this.avatars || '';
    const avatars = this.avatars;
    const { data }  = this.props;
    const cardIcon = data[0].cardIcon;
    return (
      <div>
      <ul className="flex-container wrap" key={this.params}>
      {data ? data.map((item, index) => {
        let icon = item.cardIcon;
        if(!icon) {
          icon = avatars ? avatars[this.params][index] : null;
        }
        return (<li key={index}>
                <SingleCard
                    favorite={false}
                    cardIcon={icon}
                    i={index}
                    params={this.params}
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

export default CardsGrid;
