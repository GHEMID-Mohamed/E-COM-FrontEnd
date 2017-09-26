import React, { Component } from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Card, Button,
    CardTitle, CardText, Row, Col, Collapse, CardBlock
} from 'reactstrap'
import classnames from 'classnames';
import Resultat from '../components/Resultat'
import Recapitulatif from '../components/Recapitulatif'
import PayementForm from '../components/PayementForm'
import Confirmation from '../components/Confirmation'
import InputSignIn from '../components/InputSignIn'
import InputSignUp from '../components/InputSignUp'

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
            nbrLit: 0,
            idChambre: '',
            data: this.props.dataProp,
            connexionState: this.props.stateConnexionProp,
            collapseSignIn: false,
            CollapseSignUp: false,
            PayementFormVisible: false,
            tokenState: '',
            confirmationVisible: false
        };

        this.activeOnlget2 = this.activeOnlget2.bind(this)
        this.listenPayerButton = this.listenPayerButton.bind(this)
        this.listenBackButton = this.listenBackButton.bind(this)
        this.buttonNewClicked = this.buttonNewClicked.bind(this)
        this.toggleCollapseSignIn = this.toggleCollapseSignIn.bind(this)
        this.toggleCollapseSignUp = this.toggleCollapseSignUp.bind(this)
        this.getStateCnTb = this.getStateCnTb.bind(this)
        this.listenToPayerFin = this.listenToPayerFin.bind(this)


    }

    listenToPayerFin() {
        this.setState({
            activeTab: '5',
            confirmationVisible: true
        })
    }

    getStateCnTb(state, name, prenom, token) {
        this.setState({
            connexionState: state,
            collapseSignIn: false,
            tokenState: token,
            activeTab: '4'
        })

        console.log(token+' from Booking')
        console.log(this.props.dateDebProp)
        console.log(this.props.dateFinProp)
        console.log(this.state.idChambre)
    }

    buttonNewClicked() {
        this.props.buttonNewClickedProps()
        console.log('clicked from steps booking')
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggleCollapseSignIn() {
        this.setState({ collapseSignIn: !this.state.collapseSignIn });
    }

    toggleCollapseSignUp() {
        this.setState({ CollapseSignUp: !this.state.CollapseSignUp });
    }

    activeOnlget2(prix, nomHotel, adressHotel, nbrAdulte, nbrEnfant, nbrChambre, nbrLit, idChambre) {
        this.setState({
            activeTab: '2',
            prix: Number(prix),
            nomHotel: nomHotel,
            adressHotel: adressHotel,
            nbrAdulte: Number(nbrAdulte),
            nbrEnfant: Number(nbrEnfant),
            nbrChambre: Number(nbrChambre),
            nbrLit: Number(nbrLit),
            idChambre: Number(idChambre)
        });

        console.log(idChambre + ' from Steps')
    }

    listenPayerButton(idChambre) {
        if (this.state.connexionState)
            this.setState({
                activeTab: '4',
                PayementFormVisible: !this.state.PayementFormVisible
            })
        else
            this.setState({
                activeTab: '3'
            })
    }

    listenBackButton() {
        this.setState({
            activeTab: '1'
        })
    }

    componentWillMount() {
        console.log('state from steps booking tab : ' + this.props.stateConnexionProp)
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            connexionState: nextProps.stateConnexionProp,
            data: nextProps.dataProp,
            tokenState: nextProps.token
        })

        console.log('state last token from Tabs'+ nextProps.token)
        console.log('something has changed')
        console.log(nextProps.dataProp)

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
                    {!this.state.connexionState ? <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Identification
                        </NavLink>
                    </NavItem> : null}
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Payement
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
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
                                <Resultat
                                    activeOnglet={this.activeOnlget2}
                                    newClickedProp={this.buttonNewClicked}
                                    dataProp={this.state.data}
                                ></Resultat>
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
                            idChambreProp={this.state.idChambre}
                        ></Recapitulatif>
                    </TabPane>

                    {/*Payement*/}
                    <TabPane tabId="3">
                        <Row>
                            <Col md={{ push: 1 }}>
                                <br />
                                <Button color="primary" onClick={this.toggleCollapseSignIn} style={{ marginBottom: '1rem' }}>S'identifier</Button>
                                <Collapse isOpen={this.state.collapseSignIn}>
                                    <Card>
                                        <CardBlock>
                                            <InputSignIn
                                                getStateConnectionProp={this.getStateCnTb}>
                                            </InputSignIn>
                                        </CardBlock>
                                    </Card>
                                </Collapse>
                            </Col>
                            <Col md={{ push: 1 }}>
                                <br />
                                <Button color="success" onClick={this.toggleCollapseSignUp} style={{ marginBottom: '1rem' }}>S'inscrire</Button>

                                <Collapse isOpen={this.state.CollapseSignUp}>
                                    <Card>
                                        <CardBlock>
                                            <InputSignUp></InputSignUp>
                                        </CardBlock>
                                    </Card>
                                </Collapse>
                            </Col>
                        </Row>
                    </TabPane>

                    <TabPane tabId="4">
                        {this.state.connexionState ?
                            <PayementForm
                                prix={this.state.prix}
                                nomHotel={this.state.nomHotel}
                                adressHotel={this.state.adressHotel}
                                nbrAdulte={this.state.nbrAdulte}
                                nbrEnfant={this.state.nbrEnfant}
                                nbrChambre={this.state.nbrChambre}
                                nbrLit={this.state.nbrLit}
                                idChambre={this.state.idChambre}
                                token={this.state.tokenState}
                                dateDeb={this.props.dateDebProp}
                                dateFin={this.props.dateFinProp}
                                listenToPayer={this.listenToPayerFin}
                            ></PayementForm> : null
                        }
                    </TabPane>

                    {/*Confirmation*/}
                    <TabPane tabId="5">
                        {this.state.confirmationVisible ? <Confirmation></Confirmation> : null}
                    </TabPane>
                </TabContent>
            </div >
        );
    }
}


