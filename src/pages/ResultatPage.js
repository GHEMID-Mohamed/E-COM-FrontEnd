import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StepsBookingTabs from '../components/StepsBookingTabs'


export default class ResultatPage extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Container>
                        <Header></Header>
                        <br />
                        <hr />
                        <StepsBookingTabs></StepsBookingTabs>
                        <br />
                        <br />
                    </Container>
                </div>
            </div>
        );
    }
}

