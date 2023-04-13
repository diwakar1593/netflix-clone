import React from 'react';
import Login from './Login';
import HomeScreen from './css/HomeScreen';


function App() {
  const user = null;
  return (
    <div className="App">
      {
        !user ? (<Login/>) :
        (<HomeScreen/>)
      }
      
    </div>
  );
}

export default App;
