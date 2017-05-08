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
        <Title text="123456"/>
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

const Title = (props) => {
  return(
    <h1>Title: {props.text}</h1>
  );
}

Title.propTypes = {
  // text: React.PropTypes.string.isRequired  <= simple built in validation
  // further validations could be achived through a method
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was too short`);
    }
  }
}
export default App;
