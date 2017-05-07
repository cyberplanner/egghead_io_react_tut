import React from 'react';
// stateless function/class/componenet
// const App = () => {
//   return(
//   <h1>Hello</h1>
//   );
// }

class App extends React.Component {
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
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
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


export default App;
