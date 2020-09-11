import React, { Component } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

class AllStarships extends Component {
    state = { 
        allstarships: []
     }

     async componentDidMount() {
         const allstarships = await getAllStarships()
         console.log(allstarships)
         this.setState({ allstarships: allstarships.results})
     }

    render() { 
        return ( 
            <>
                <h3>Star Wars Starships</h3>
                {this.state.allstarships.map((starship) => 
                    <div className="starshipDiv"
                        >
                        <Link
                            to={{
                                pathname: '/starship',
                                state: { starship }
                            }}
                            key={starship.index}
                            className="starships"
                            >
                                {starship.name}
                            </Link>
                    </div>
                )}
            </>
         );
    }
}
 
export default AllStarships;