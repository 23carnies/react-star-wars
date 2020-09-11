import React, { Component } from 'react'
import { getPilots } from '../../services/sw-api'


class Pilots extends Component {
    state = { 
        pilotUrls: this.props.pilots,
        pilots: []
     }

     async componentDidMount() {
         const promises = await getPilots(this.state.pilotUrls)
         const pilotObjects = await Promise.all(promises)
         this.setState({ pilots: pilotObjects })
     }
     

    render() { 
        const { pilots } = this.state
        return ( 
            <>
            {pilots.length 
            
            ?
                <div>
                    <h5>Pilots:</h5>
                    {pilots.map((pilot, idx) => 
                    <p key={idx}>{pilot.name}</p>)}
                </div>

            :

            <p>No Pilots</p>
        
        }
            </>
         );
    }
}
 
export default Pilots;