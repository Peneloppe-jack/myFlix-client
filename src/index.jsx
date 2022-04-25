import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
import MainView from './components/main-view/main-view';
=======
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

import './index.scss';
>>>>>>> Stashed changes


class MyFlixApplication extends React.Component {
  render() {
    return (
<<<<<<< Updated upstream
      <MainView/> //cf MainView
=======
      <Container>
        <MainView />
      </Container>
  
>>>>>>> Stashed changes
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render app in root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);