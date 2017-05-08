import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super(); //to give the key word this the context within the App component not React.Component
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  update(e) { // e for event
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <Widget update={this.update.bind(this)}/>
        <Button>I <Heart/> React</Button>
      </div>
    );
  }
}

App.prpTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

const Widget = (props) => {
  return(
    <input type="text" onChange={props.update}/>
  );
}

const Button = (props) => {
  return(
    <button>{props.children}</button>
  );
}

class Heart extends Component {
  render() {
    return(
      <span>&hearts;</span>
    );
  }
}

export default App;
