import React from 'react';
//import Logon from './pages/Logon'  // when we import a folder, it looks for the index.js in there
import './global.css'

import Routes from './routes'

export default function App() {
  return (
    <Routes/>
  )
}


// import React, { useState } from 'react';
// // JSX - JavaScript + XML
// // A React component is a function that return HTML
// // React properties are similar to HTML attributes in sintax
// // Components can keep State - user input, info from external APIs

// function App() {
//   // always use useState to keep state within a component
//   // useState returns an array with two positions
//   // [0] value
//   // [1] update function
//   // let's deconstruct the array into variables for each position
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return (
//     <div>
//       <Header>Counter: {counter}</Header>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default App;
