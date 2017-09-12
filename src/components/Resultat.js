import React, { Component } from 'react';
import { Alert, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../components/Resultat.css'
import StepsBookingTabs from '../components/StepsBookingTabs'
import CardChambre from '../components/CardChambre'
import CardPanier from '../components/CardPanier'

export default class Resultat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            price : 0,
            type_chambre: '',
            nombre_chambre: ''
        }
    }



    render() {

        var chambres = []

        for (var i = 0; i < 3; i++) {
            if(i==0) {
                chambres.push(<span className='chambres' key={i}>
                <Row>
                <Col md="3">
                    <CardChambre src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                        nombreDeLit="2"
                        nombreDePersonne="2"
                    >
                    </CardChambre>
                </Col>
                <Col md="3">
                    <CardChambre src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                        nombreDeLit="2"
                        nombreDePersonne="2"
                    >
                    </CardChambre>
                </Col>
                <Col md="3">
                    <CardChambre src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                        nombreDeLit="2"
                        nombreDePersonne="2"
                    >
                    </CardChambre>
                </Col>          
                <Col md="3"><CardPanier></CardPanier></Col>      
            </Row>
            </span>)
            }
            else 
            chambres.push(<span className='chambres' key={i}>

                <Row>
                    <Col md="3">
                        <CardChambre src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                            nombreDeLit="2"
                            nombreDePersonne="2"
                        >
                        </CardChambre>
                    </Col>
                    <Col md="3">
                        <CardChambre src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                            nombreDeLit="2"
                            nombreDePersonne="2"
                        >
                        </CardChambre>
                    </Col>
                    <Col md="3">
                        <CardChambre src="http://www.martigues-hotel.com/en/files/2012/11/chambre-double-twin.jpg"
                            nombreDeLit="2"
                            nombreDePersonne="2"
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
                        <h3><strong>Hotel trouvé !</strong></h3>
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

