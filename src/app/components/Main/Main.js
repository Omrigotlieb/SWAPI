import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Header  from '../Header/Header';
import { Link , Route } from 'react-router-dom';
import CardsGrid from '../CardsGrid/CardsGrid';
import CardModal from '../CardModal/CardModal';
import Home from '../Home/Home';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
      super(props);
    }

  render() {
    let data = this.props.data;
    return (
        <div>
          <h1 className="headline">
            <Link to="/" className="header">Swapi</Link>
          </h1>
          <Header />
          <Route exact={true} path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/films"
           render={(routerProps) => (<CardsGrid {...routerProps} data={data}/>)}
           />
           <Route path="/people"
            render={(routerProps) => (<CardsGrid {...routerProps} data={data}/>)}
            />
          <Route path="/:view/:id" component={CardModal}></Route>
        </div>
      );
  }
};

export default Main;
