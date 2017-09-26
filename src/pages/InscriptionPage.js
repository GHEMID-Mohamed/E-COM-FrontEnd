import React, { Component } from 'react';
import { Container, Alert } from 'reactstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InputSignUp from '../components/InputSignUp'


export default class InscriptionPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            InputVisible: true
        }

        this.getStateInscription = this.getStateInscription.bind(this)
    }

    getStateInscription(state) {
        this.setState({
            InputVisible: false
        })
    }


    render() {
        return (
            <div>
                <div className="App">
                    <Container>
                        <Header></Header>
                        {this.state.InputVisible ?
                            <InputSignUp getStateProp={this.getStateInscription}></InputSignUp>
                            : null}
                        {!this.state.InputVisible ?
                            <div>
                                <br />
                                <br />
                                <Alert color="success">
                                    <center>
                                        <h5>Inscription reussi</h5>
                                        <h7>Veuillez vous connecter</h7>
                                    </center>
                                </Alert>
                            </div>
                            : null}
                        <br />
                        <br />
                    </Container>
                </div>
            </div>
        );
    }
}

