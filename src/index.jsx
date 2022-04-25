import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';


import './index.scss'; // to bundle `./index.scss`

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
    </Container>
  
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render app in root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);