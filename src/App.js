import React, { Component } from 'react';
import FancyButton from './components/container/FancyButton';

import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount () {
    console.log(this.ref.current);
  }

  render() {
    return (
      <div className="App">
        <FancyButton ref={this.ref}/>
      </div>
    );
  }
}


export default App;
