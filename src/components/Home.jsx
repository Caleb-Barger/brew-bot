import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = props => {

    return (
        <div>
            <h1>Welcome to brew bot!</h1>
            <NavLink to='/brew'>
                <button>Start Brewing</button>
            </NavLink>
        </div>
    )
}

export default Home


