import React, { Component } from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Card, Button,
    CardTitle, CardText, Row, Col, Collapse, CardBlock, Alert
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
            confirmationVisible: false,
            emailSent: '',
            messageAfterSingUp: ''
        };

        this.activeOnlget2 = this.activeOnlget2.bind(this)
        this.listenPayerButton = this.listenPayerButton.bind(this)
        this.listenBackButton = this.listenBackButton.bind(this)
        this.buttonNewClicked = this.buttonNewClicked.bind(this)
        this.toggleCollapseSignIn = this.toggleCollapseSignIn.bind(this)
        this.toggleCollapseSignUp = this.toggleCollapseSignUp.bind(this)
        this.getStateCnTb = this.getStateCnTb.bind(this)
        this.listenToPayerFin = this.listenToPayerFin.bind(this)
        this.handeSignUp = this.handeSignUp.bind(this)
        this.backToTwo = this.backToTwo.bind(this)
        this.backToThree = this.backToThree.bind(this)
    }

    backToTwo() {
        this.setState({
            activeTab: '2'
        })
    }

    backToThree() {
        this.setState({
            activeTab: '3'
        })
    }

    handeSignUp(state, nom, prenom) {

        this.setState({
            collapseSignIn: !this.state.collapseSignIn,
            CollapseSignUp: !this.state.CollapseSignUp,
            messageAfterSingUp: 'Inscription réussi, veuillez maintenant vous connecter'
        })
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

        console.log(token + ' from Booking')
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

        console.log('state last token from Tabs' + nextProps.token)
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
                        //onClick={() => { this.toggle('1'); }}
                        >
                            Resultat de recherche
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                        //onClick={() => { this.toggle('2'); }}
                        >
                            Récapitulatif
                        </NavLink>
                    </NavItem>
                    {!this.state.connexionState ? <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                        //onClick={() => { this.toggle('3'); }}
                        >
                            Identification
                        </NavLink>
                    </NavItem> : null}
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                        //onClick={() => { this.toggle('4'); }}
                        >
                            Paiement
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                        //onClick={() => { this.toggle('5'); }}
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
                            src="http://designingflicks.com/images/hotel-svg-12.png"
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

                    {/*Récaputulatif*/}
                    <TabPane tabId="3">
                        <br />
                        <hr />
                        <Button color="warning"
                            onClick={this.backToTwo}>
                            <Row>
                                <Col md="1">
                                </Col>
                                <img src="https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Undo_arrow_left_edit_back_cancel_rotate_delete.png"
                                    height="20" width="20" />
                                <Col>Revenir en arrière</Col>
                            </Row>
                        </Button>
                        <br />
                        <hr />
                        <br />
                        <h5>Veuillez vous connecter ou vous s'inscrire pour pouvoir continuer</h5>
                        <hr />
                        <Row>
                            <Col>
                                <Button color="success" onClick={this.toggleCollapseSignUp} style={{ marginBottom: '1rem' }}>S'inscrire</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="auto">
                                <br />
                                <Collapse isOpen={this.state.CollapseSignUp}>
                                    <Card>
                                        <CardBlock>
                                            <InputSignUp
                                                getStateConnectionProp={this.handeSignUp}
                                            ></InputSignUp>
                                        </CardBlock>
                                    </Card>
                                </Collapse>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button color="primary" onClick={this.toggleCollapseSignIn} style={{ marginBottom: '1rem' }}>S'identifier</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="auto">
                                <br />
                                <Alert color="success">
                                    <strong>{this.state.messageAfterSingUp}</strong>
                                </Alert>
                                <br />
                                <Collapse isOpen={this.state.collapseSignIn}>
                                    <Card>
                                        <CardBlock>
                                            <InputSignIn
                                                getStateConnectionProp={this.getStateCnTb}
                                            >
                                            </InputSignIn>
                                        </CardBlock>
                                    </Card>
                                </Collapse>
                            </Col>
                        </Row>

                    </TabPane>

                    <TabPane tabId="4">
                        <br />
                        <hr />
                        <Button color="warning"
                            onClick={this.backToThree}>
                            <Row>
                                <Col md="1">
                                </Col>
                                <img src="https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Undo_arrow_left_edit_back_cancel_rotate_delete.png"
                                    height="20" width="20" />
                                <Col>Revenir en arrière</Col>
                            </Row>
                        </Button>
                        <br />
                        <hr />
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


