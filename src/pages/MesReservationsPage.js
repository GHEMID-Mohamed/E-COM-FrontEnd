import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MesReservation from '../components/MesReservation'




export default class ResultatPage extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Container>
                        <Header></Header>
                        <br />
                        <hr />
                        <MesReservation></MesReservation>
                        <br />
                        <br />
                        <Footer></Footer>
                    </Container>
                </div>
            </div>
        );
    }
}

