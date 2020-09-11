import React, { Component } from 'react';
import { getShipDetails } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import Pilots from '../../components/Pilots/Pilots'

class ShipDetails extends Component {
    state = { 
        url: this.props.location.state.starship.url,
        starshipDetails: {}
     }

     async componentDidMount() {
         const starshipDetails = await getShipDetails(this.state.url)
         console.log(starshipDetails)
         this.setState({ starshipDetails })
     }
    render() { 
        const { starshipDetails } = this.state
        return ( 
            <div>
                {starshipDetails.name ?   
            <>
                <h3>Starship Details</h3>
                <h4>Name: {starshipDetails.name}</h4>
                <h4>Model: {starshipDetails.model}</h4>
                <h4>Length: {starshipDetails.length}</h4>
                <h4>Crew: {starshipDetails.crew}</h4>
                <h4>Class: {starshipDetails.starship_class}</h4>
                <Pilots pilots={starshipDetails.pilots}/>
            </> 

            :
            <p>Loading details</p>
            }

           
                <Link
                    to={{
                        pathname: '/'
                    }}><button type="submit">Return</button></Link>
            </div>
         );
    }
}
 
export default ShipDetails;