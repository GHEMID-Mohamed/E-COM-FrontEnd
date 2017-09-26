import React, { Component } from 'react';
import { Container, Alert } from 'reactstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormPassOublier from '../components/FormPassOublier'
import InputSignIn from '../components/InputSignIn'



export default class PassOublierPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            passSentVisible: false,
            passNotSentVisible: false,
            formVisible: false
        }

        this.passSentVisible = this.passSentVisible.bind(this)
        this.passNotSentVisible = this.passNotSentVisible.bind(this)
    }

  

    passSentVisible(state) {
        this.setState({
            passSentVisible: true, 
            formVisible: !this.state.formVisible,
            passNotSentVisible: false
        })
    }

    passNotSentVisible(state) {
        this.setState({
            passNotSentVisible: true,
            passSentVisible: false,
            formVisible: true
        })
    }


    render() {
        return (
            <div>
                <div className="App">
                    <Container>
                        <Header></Header>
                        {!this.state.formVisible ? <FormPassOublier
                            getSentState={this.passSentVisible}
                            getNotSentState={this.passNotSentVisible}
                        >
                        </FormPassOublier> : null}
                        {this.state.passSentVisible ?

                            <Alert color="success">
                                <br />
                                <center><h5>Mot de passe envoyé à l'email</h5></center>
                            </Alert>
                            : null}
                        {this.state.passNotSentVisible ?

                            <Alert color="danger">
                                <br />
                                <center>
                                    <h5>Votre email n'est pas enregistré</h5>
                                    <FormPassOublier
                                        getSentState={this.passSentVisible}
                                        getNotSentState={this.passNotSentVisible}
                                    >
                                    </FormPassOublier>
                                </center>
                            </Alert>
                            : null}
                        <br />
                        <br />
                    </Container>
                </div>
            </div>
        );
    }
}

