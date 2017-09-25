import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InputSignUp from '../components/InputSignUp'


export default class InscriptionPage extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Container>
                        <Header></Header>
                        <InputSignUp></InputSignUp>
                        <br />
                        <br />
                    </Container>
                </div>
            </div>
        );
    }
}

