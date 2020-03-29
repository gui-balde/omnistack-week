import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes'

export default function App() {
  return (
    <Routes />
  );
}

// // Tags web: <div> <p> <h1> <span> <header> <footer> - different semantic meanings
// // Tags mobile: just use <div> for everything
// //              <View> can be used for <div> and <section>
// //              <Text> use for any kind of text instead of <p> <h1> <span> 

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>You're ready!</Text>
//     </View>
//   );
// }

// // styling is different - the attribute style in the tags define the function for style
// // all elements of React Native have display: flex by default - there are no other options
// // names of CSS properties need to be converted to camelCase - and values need to be in single quotes
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   title: {
//     color: '#fff',
//     fontSize: 19
//   }
// });
