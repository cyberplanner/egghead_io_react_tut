# egghead.io React.js Tutorials:
## Source:
The course could be found [here](https://egghead.io/lessons/react-react-fundamentals-development-environment-setup).

## Notes on the walkthrough
### 1. Create the empty app:
* `create-react-app <nameoftheapp>`
* Delete
```
App.css
App.test.js
index.css
logo.svg
```
* Re-create `public/index.html` from scratch:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>

  </body>
</html>
```
* The div with id="root" is the target div.
* Re-create `src/App.js`:

  ```
  import React from 'react';

  const App = () => {
    return(
    <h1>Hello</h1>
    );
  }

  export default App;

  ```
* Remove from `src/index.js`:

  ```
  import './index.css';
  ```
### 2. Create first Component:

* Replace:

  ```
  // in `App.js`
  // replace the stateless function/class/componenet
   const App = () => {
     return(
     <h1>Hello</h1>
     );
   }
  // with class components
  // stateless function cannot have a state but calss components can!
  class App extends React.Component {
    render() {
      return <h1 className="hello">Hello World!</h1>
    }
  }

  ```
#### Side Note: the render method can only return one element/tag so you have to enclose everything in a <div>

### 3. Use props:
* Add props:

  ```
  // in `src/index.js`:
  <App txt="This is the prop txt" cat={3}/>,
  ```
  ```
  // in `src/App.js` :
  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    return <h1 className="hello">{txt} {cat}</h1>
  }
  ```
