import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormPassOublier from '../components/FormPassOublier'



export default class PassOublierPage extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Container>
                        <Header></Header>
                        <FormPassOublier></FormPassOublier>
                        <br />
                        <br />
                    </Container>
                </div>
            </div>
        );
    }
}

