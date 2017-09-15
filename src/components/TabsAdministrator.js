import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import classnames from 'classnames';
import FormAjouterHotel from '../components/FormAjouterHotel'
import FormAjouterChambre from '../components/FormAjouterChambre'


export default class TabsAdministrator extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Ajouter un Hotel
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Ajouter une Chambre
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Gérer les clients
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Gérer les reservations
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    {/*Ajouter une hotel*/}
                    <TabPane tabId="1">
                        <Row>
                            <Col md="8">
                                <FormAjouterHotel></FormAjouterHotel>
                            </Col>
                            <Col></Col>
                        </Row>
                    </TabPane>

                    {/*Ajouter une chambre*/}
                    <TabPane tabId="2">
                        <FormAjouterChambre></FormAjouterChambre>
                    </TabPane>

                    {/*Client*/}
                    <TabPane tabId="3">

                    </TabPane>

                    {/*Confirmation*/}
                    <TabPane tabId="4">

                    </TabPane>
                </TabContent>
            </div>
        );
    }
}


