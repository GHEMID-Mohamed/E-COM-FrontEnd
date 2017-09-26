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
            nbrLit: 0,
            idChambre: ''
        }

        this.goListenButtonInChambre = this.goListenButtonInChambre.bind(this)
        this.listenReserverButton = this.listenReserverButton.bind(this)
        this.handleClickNew = this.handleClickNew.bind(this)

    }

    handleClickNew() {
        this.props.newClickedProp()
        console.log('clicked from result')
    }

    listenReserverButton(prix, nomHotel, adressHotel, nbrAdulte, nbrEnfant, nbrChambre, nbrLit, idChambre) {

        console.log(idChambre + ' from Resultat')
        console.log('button was clicked from resultats')

        this.props.activeOnglet(
            prix,
            nomHotel,
            adressHotel,
            nbrAdulte,
            nbrEnfant,
            nbrChambre,
            nbrLit,
            idChambre
        )



    }



    goListenButtonInChambre(event, prix, nomHotel, adressHotel, nbrAdulte, nbrEnfant, nbrChambre, nbrLit, idChambre) {
        this.setState({
            prix: Number(prix),
            nomHotel: nomHotel,
            adressHotel: adressHotel,
            nbrAdulte: Number(nbrAdulte),
            nbrEnfant: Number(nbrEnfant),
            nbrChambre: Number(nbrChambre),
            nbrLit: Number(nbrLit),
            idChambre: Number(idChambre)


        })

        console.log(idChambre + ' from resultat')


    }



    render() {

        var data = this.props.dataProp
        var i = 0
        var once = true



        var chambres = data.resultat.map((element, index) =>

            (index == 2 || index == 5 ||  index == 8 || index == 11 || index == 14) ? <Col md="4"></Col>
                :
                <Col md="4">
                    <CardChambre listenButton={this.goListenButtonInChambre}
                        nombreLits={element.nbLits}
                        prix={element.prix}
                        nomHotel={element.hotel.nom}
                        adresseHotel={element.hotel.adresse}
                        idChambre={element.id}
                        //srcProp={element.photos.url}
                        srcProp={element.photos[0].url}
                    >
                    </CardChambre>
                </Col>


        )


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
                        <Button color="warning" size="md" onClick={this.handleClickNew}>

                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/2000px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
                                height="30" width="30" />

                            <strong>Nouvelle recherche</strong>

                        </Button>
                    </Col>

                </Row>





                {/* Chambre trouvé */}
                <Row>
                    <Col md="4">
                        <Panier
                            listenReserverButton2={this.listenReserverButton}
                            prix={this.state.prix}
                            nomHotel={this.state.nomHotel}
                            adressHotel={this.state.adressHotel}
                            nbrAdulte={this.state.nbrAdulte}
                            nbrEnfant={this.state.nbrEnfant}
                            nbrChambre={this.state.nbrChambre}
                            nbrLit={this.state.nbrLit}
                            idChambre={this.state.idChambre}
                        >
                        </Panier>
                    </Col>
                    {chambres}
                </Row>


                {/*<Col md="4">
                        <Panier
                            listenReserverButton2={this.listenReserverButton}
                            prix={this.state.prix}
                            nomHotel={this.state.nomHotel}
                            adressHotel={this.state.adressHotel}
                            nbrAdulte={this.state.nbrAdulte}
                            nbrEnfant={this.state.nbrEnfant}
                            nbrChambre={this.state.nbrChambre}
                            nbrLit={this.state.nbrLit}
                            idChambre={this.state.idChambre}
                        >
                        </Panier>
                    </Col>*/}


            </div>
        );
    }
}

