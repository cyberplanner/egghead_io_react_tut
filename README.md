# egghead.io React.js Tutorials:
## Source:
The course could be found [here](https://egghead.io/lessons/react-react-fundamentals-development-environment-setup).

## Notes on the walkthrough
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
