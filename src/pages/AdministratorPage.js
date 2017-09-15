import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'reactstrap'
import TabsAdministrator from '../components/TabsAdministrator'


export default class AdministratorPage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header></Header>
                    <hr />
                    <br />
                    <TabsAdministrator></TabsAdministrator>
                    <br />
                    <br />
                    <Footer></Footer>
                </Container>
            </div>
        );
    }
}

