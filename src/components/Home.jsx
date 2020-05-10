import React from 'react'
import Dropdown from './Dropdown'
import { NavLink } from 'react-router-dom'
import { Jumbotron, Container } from 'reactstrap'

const Home = props => {

    return (
        // <div>
        //     <h1>Welcome to brew bot!</h1>
        //     <NavLink to='/brew'>
        //         <button>Start Brewing</button>
        //     </NavLink>
        // </div>
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Welcome to Brew-Bot</h1>
                    <p className="lead">Brewing made simple with guded steps along the way :D</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home


