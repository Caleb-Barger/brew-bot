import React from 'react'
import {NavLink} from 'react-router-dom'
import { Nav } from 'reactstrap'

const BrewSteps = props => {
    const {currentBrew} = props
    const { name, steps} = currentBrew
    
    return(
        <div>
            <h1>{name}</h1>
            {steps.map(step => {
                return (
                    <p>{Object.values(step)}</p>
                )
            })}
            <NavLink to='/'>
                <button>Home</button>
            </NavLink>

        </div>
    )
}

export default BrewSteps