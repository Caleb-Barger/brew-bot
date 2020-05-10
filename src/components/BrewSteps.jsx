import React from 'react'
// import { NavLink } from 'react-router-dom'

const BrewSteps = props => {
    const { brew } = props

    return (
        <div>
            <h1>{brew.name}</h1>
        </div>
    )
}

export default BrewSteps