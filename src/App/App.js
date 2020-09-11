import React, { Component } from 'react';
import './App.css';
import Starships from '../pages/Starships/Starships'
import { Route } from 'react-router-dom'
import ShipDetails from '../pages/ShipDetails/ShipDetails'


class App extends Component {
  state = { 

   }


  render() { 
    return ( 
      <>
        <h1>Star Wars Starships</h1>
        <Route  
          exact path='/'
          render={() => 
            <Starships />
          }/>
          
        <Route 
          exact path='/starship'
          render={( { location } ) => 
            <ShipDetails 
            location={location}
            />
          }/>

       
      </>
     );
  }
}
 
export default App;


