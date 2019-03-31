import React from 'react';
import Header  from '../Header/Header';
import { Link , Route } from 'react-router-dom';
import CardsGrid from '../CardsGrid/CardsGrid';
import CardModal from '../CardModal/CardModal';
import Home from '../Home/Home';
import store from '../../../store';
import { connect } from 'react-redux';
import { fetchDataFromAPI } from '../../../actions/actionCreators';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        favoritesData : []
      }
      this.params = this.props.params;
    }

    componentDidMount() {
      this.props.fetchDataFromAPI('people/');
      this.props.fetchDataFromAPI('films/');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params !== this.props.params && nextProps.params[0] !== ':') {
          const localStorageData = JSON.parse(localStorage.getItem(nextProps.params));
          if(localStorageData && localStorageData[nextProps.params]) {
             this.data = localStorageData[nextProps.params];
          } else if(nextProps.params !== 'favorites/') {
            this.props.fetchDataFromAPI(nextProps.params);
            }
          }
        }


  render() {
    let state = store.getState();
    let params = this.props.params;
    let data = this.data || this.props.data;
    let favoritesData = state.favorite.getIn(['data','favoritesData']).toJS().map(card => card.props);

    return (
        <div>
          <h1 className="headline">
            <Link to="/" className="header">Swapi</Link>
          </h1>
          <Header />
          <Route exact={true} path="/" component={Home}></Route>
          <Route path="/home/" component={Home}></Route>
          <Route path="/films/"
              render={(routerProps) => (<CardsGrid {...routerProps} data={data} params={params}/>)}/>
         <Route path="/people/"
              render={(routerProps) => (<CardsGrid {...routerProps} data={data} params={params}/>)}/>
          <Route path="/favorites"
              render={(routerProps) => (<CardsGrid {...routerProps} data={favoritesData} params={params}/>)}/>
         <Route path="/:view/:id/:cardicon"
              render={(routerProps) => (<CardModal {...routerProps} data={data} params={params}/>)} />
        </div>
      );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDataFromAPI: (params) => dispatch(fetchDataFromAPI(params))
})

Main = connect(null, mapDispatchToProps)(Main)

export default Main;
