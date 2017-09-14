import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import classnames from 'classnames';
import Resultat from '../components/Resultat'
import Recapitulatif from '../components/Recapitulatif'
import PayementForm from '../components/PayementForm'
import Confirmation from '../components/Confirmation'

export default class StepsBookingTabs extends Component {
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
                            Resultat de recherche
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Récapitulatif
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Payement
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Confirmation
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    {/*Resustat de recherche*/}
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Resultat></Resultat>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </TabPane>

                    {/*Récapitulatif*/}
                    <TabPane tabId="2">

                    <Recapitulatif
                            src="http://img-ovh-cloud.zszywka.pl/0/0229/6107-elegancka-sypialnia.jpg"
                            nombreDadultes="7"
                            nombreEnfants="3"
                            nombreChambres="1"
                            nombreLits="1"
                            prix="69"
                            nomHotel="Pyramide Millénuim"
                            adresseHotel="01 Rue Jean Léoquet"
                        ></Recapitulatif>
                    </TabPane>

                    {/*Payement*/}
                    <TabPane tabId="3">
                        <PayementForm></PayementForm>
                    </TabPane>

                    {/*Confirmation*/}
                    <TabPane tabId="4">
                        <Confirmation></Confirmation>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}


