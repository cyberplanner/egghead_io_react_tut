import React from 'react';
// stateless function/class/componenet
// const App = () => {
//   return(
//   <h1>Hello</h1>
//   );
// }

class App extends React.Component {
  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    return <h1 className="hello">{txt} {cat}</h1>
  }
}

App.prpTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}


export default App;
