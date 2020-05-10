import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

const BrewSteps = props => {
    const { brew, takeMeHome } = props
    const [step, setStep] = useState(brew.steps[0])
    const [stepCount, setStepCount] = useState(1)

    const nextStep = () => {
        if (!(stepCount >= brew.steps.length)) {
            setStep(brew.steps[stepCount])
            setStepCount(stepCount + 1)
        }
        else {
            setStepCount(1)
        }
    }

    return (
        <div>
            <h1>Ratio!</h1>
            <ul>
                <li>{brew.ratio.water}</li>
                <li>{brew.ratio.coffee}</li>
            </ul>
            <h1>{`Step: ${stepCount}`}</h1>
            <img src={step.src} alt="potato" />
            <p>{step.des}</p>
            <button onClick={nextStep}>Next Stp</button>
            <button onClick={takeMeHome}>HOMe</button>
        </div>
    )
}

export default BrewSteps