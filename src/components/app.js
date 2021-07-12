import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Nathaniel Hubbard Portfolio</h1>
        <PortfolioContainer />
        <div>{moment().format('MMM Do YYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
