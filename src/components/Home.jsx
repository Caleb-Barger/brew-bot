import React from 'react'
import DropdownComponent from './DropdownComponent'
import { Jumbotron, Container } from 'reactstrap'

const Home = props => {
    const { history, setCurrentBrew, brews } = props

    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Welcome to Brew-Bot</h1>
                    <p className="lead">Brewing made simple with guided steps along the way... Go ahead and select  a brew from the dropdown!</p>
                    <DropdownComponent
                        history={history}
                        brews={brews}
                        setCurrentBrew={setCurrentBrew} />
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home


