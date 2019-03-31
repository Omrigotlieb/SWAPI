import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Main from './Main/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Omri']
    };
  };

    render() {
     let data = this.props.data;
     let params = this.props.match.url.slice(1);
      return (
        <Main data={data} params={params}/>
      )
    }
  };

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const mapStateToProps = (state, ownProps) => {
  const { data } = state.fetchAPI;
  return { data };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
