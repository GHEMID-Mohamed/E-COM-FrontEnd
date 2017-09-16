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
            activeTab: '1',
            prix: 0,
            nomHotel: '',
            adressHotel: '',
            nbrAdulte: 0,
            nbrEnfant: 0,
            nbrChambre: 0,
            nbrLit: 0

        };

        this.activeOnlget2 = this.activeOnlget2.bind(this)
        this.listenPayerButton = this.listenPayerButton.bind(this)
        this.listenBackButton = this.listenBackButton.bind(this)
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    activeOnlget2(prix, nomHotel, adressHotel, nbrAdulte, nbrEnfant, nbrChambre, nbrLit) {
        this.setState({
            activeTab: '2',
            prix: Number(prix),
            nomHotel: nomHotel,
            adressHotel: adressHotel,
            nbrAdulte: Number(nbrAdulte),
            nbrEnfant: Number(nbrEnfant),
            nbrChambre: Number(nbrChambre),
            nbrLit: Number(nbrLit)
        });
    }

    listenPayerButton() {
        this.setState({
            activeTab: '3'
        })
    }

    listenBackButton() {
        this.setState({
            activeTab: '1'
        })
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
                                <Resultat activeOnglet={this.activeOnlget2}></Resultat>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </TabPane>

                    {/*Récapitulatif*/}
                    <TabPane tabId="2">

                        <Recapitulatif
                            src="http://img-ovh-cloud.zszywka.pl/0/0229/6107-elegancka-sypialnia.jpg"
                            prix={this.state.prix}
                            nomHotel={this.state.nomHotel}
                            adressHotel={this.state.adressHotel}
                            nbrAdulte={this.state.nbrAdulte}
                            nbrEnfant={this.state.nbrEnfant}
                            nbrChambre={this.state.nbrChambre}
                            nbrLit={this.state.nbrLit}
                            listenPayerButtonProp={this.listenPayerButton}
                            listenBackButtonProp={this.listenBackButton}
                        ></Recapitulatif>
                    </TabPane>

                    {/*Payement*/}
                    <TabPane tabId="3">
                        <PayementForm
                            prix={this.state.prix}
                            nomHotel={this.state.nomHotel}
                            adressHotel={this.state.adressHotel}
                            nbrAdulte={this.state.nbrAdulte}
                            nbrEnfant={this.state.nbrEnfant}
                            nbrChambre={this.state.nbrChambre}
                            nbrLit={this.state.nbrLit}
                        ></PayementForm>
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


