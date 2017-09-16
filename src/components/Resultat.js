import React, { Component } from 'react';
import { Alert, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../components/Resultat.css'
import StepsBookingTabs from '../components/StepsBookingTabs'
import CardChambre from '../components/CardChambre'
import Panier from '../components/Panier'

export default class Resultat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            prix: 0,
            nomHotel: '',
            adressHotel: '',
            nbrAdulte: 0,
            nbrEnfant: 0,
            nbrChambre: 0,
            nbrLit: 0
        }

        this.goListenButtonInChambre = this.goListenButtonInChambre.bind(this)
        this.listenReserverButton = this.listenReserverButton.bind(this)

    }

    listenReserverButton () {

        console.log('button was clicked from resultats')

        this.props.activeOnglet(
            this.state.prix,
            this.state.nomHotel,
            this.state.adressHotel,
            this.state.nbrAdulte,
            this.state.nbrEnfant,
            this.state.nbrChambre,
            this.state.nbrLit
        )
        


    }



    goListenButtonInChambre(event, prix, nomHotel, adressHotel, nbrAdulte, nbrEnfant, nbrChambre, nbrLit) {
        this.setState({
            prix: Number(prix),
            nomHotel: nomHotel,
            adressHotel: adressHotel,
            nbrAdulte: Number(nbrAdulte),
            nbrEnfant: Number(nbrEnfant),
            nbrChambre: Number(nbrChambre),
            nbrLit: Number(nbrLit)

        })


    }



    render() {

        var chambres = []

        for (var i = 0; i < 3; i++) {
            if (i == 0) {
                chambres.push(<span className='chambres' key={i}>
                    <Row>
                        <Col md="4">
                            <CardChambre listenButton={this.goListenButtonInChambre} src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                                nombreDadultes="2"
                                nombreEnfants="2"
                                nombreChambres="3"
                                nombreLits="2"
                                prix="45"
                                nomHotel="Pyramide Millénuim"
                                adresseHotel="01 Rue Jean Léoquet"
                            >
                            </CardChambre>
                        </Col>
                        <Col md="4">
                            <CardChambre listenButton={this.goListenButtonInChambre} src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                                nombreDadultes="7"
                                nombreEnfants="3"
                                nombreChambres="1"
                                nombreLits="1"
                                prix="69"
                                nomHotel="Pyramide Millénuim"
                                adresseHotel="01 Rue Jean Léoquet"
                            >
                            </CardChambre>
                        </Col>

                        <Col md="4"><Panier
                            listenReserverButton2 = {this.listenReserverButton}
                            prix={this.state.prix}
                            nomHotel={this.state.nomHotel}
                            adressHotel={this.state.adressHotel}
                            nbrAdulte={this.state.nbrAdulte}
                            nbrEnfant={this.state.nbrEnfant}
                            nbrChambre={this.state.nbrChambre}
                            nbrLit={this.state.nbrLit}
                        >
                        </Panier></Col>
                    </Row>
                </span >)
            }
            else
                chambres.push(<span className='chambres' key={i}>

                    <Row>
                        <Col md="4">
                            <CardChambre listenButton={this.goListenButtonInChambre} src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                                nombreDadultes="2"
                                nombreEnfants="2"
                                nombreChambres="3"
                                nombreLits="2"
                                prix="85"
                                nomHotel="Pyramide Millénuim"
                                adresseHotel="01 Rue Jean Léoquet"
                            >
                            </CardChambre>
                        </Col>
                        <Col md="4">
                            <CardChambre listenButton={this.goListenButtonInChambre} src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                                nombreDadultes="2"
                                nombreEnfants="2"
                                nombreChambres="3"
                                nombreLits="2"
                                prix="77"
                                nomHotel="Pyramide Millénuim"
                                adresseHotel="01 Rue Jean Léoquet"
                            >
                            </CardChambre>
                        </Col>

                    </Row>

                </span>);
        }

        return (
            <div>
                <br />
                <Row>
                    <Col md="6">
                        {/*Hotel trouvé*/}
                        <h3><strong>Résultat de la recherche</strong></h3>
                        <hr />
                    </Col>

                    <Col md="6">
                        <Link to="/">
                            <Button color="warning" size="md">

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/2000px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
                                    height="30" width="30" />

                                <strong>Nouvelle recherche</strong>

                            </Button>
                        </Link>
                    </Col>


                </Row>
                <Row>
                    <Col md="9">
                        <Alert color="success">
                            {/*Hotel trouvé*/}
                            <strong>Récapitulatif de votre recherche :</strong> {/*Nombre de nuit*/} du {/*Date arrivé*/} au {/*Date arrivé*/}.
                        </Alert>
                    </Col>


                </Row>



                {/* Chambre trouvé */}
                {chambres}

            </div>
        );
    }
}

