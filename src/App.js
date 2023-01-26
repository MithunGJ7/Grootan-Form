import './App.css';
import Header from './myComponents/Header';
import PerInformation from './myComponents/PerInformation';
import React from 'react';


class App extends React.Component {
render(){
  return (
    <div className="App">
      <Header/>
      <PerInformation/>
      
    </div>
  );
}
}

export default App;
