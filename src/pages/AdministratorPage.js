import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'reactstrap'
import FormSearch from '../components/FormSearch'
import TabsAdministrator from '../components/TabsAdministrator'


export default class AdministratorPage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header></Header>
                    <hr />
                    <center><h3>Espace Admnistrateur</h3></center>
                    <hr />
                    <br />
                    <TabsAdministrator></TabsAdministrator>
                    <br />
                    <br />
                </Container>
            </div>
        );
    }
}

