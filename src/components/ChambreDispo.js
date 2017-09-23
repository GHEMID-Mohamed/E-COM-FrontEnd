import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import ConnectedClient from '../components/ConnectedClient'
import CardHotel from '../components/CardHotel'
import LoadingIndicator from 'react-loading-indicator'

export default class ChambreDispo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            listChambre: ''
        }
    }

    componentDidMount() {
        fetch('http://152.77.78.16:8080/HotelBookersWeb/hotels/room/search')
            .then(result => {
                return result.json()
            }).then(data => {
                this.setState({
                    listChambre: data
                })
                console.log(data)
            }).catch((error) => {
                console.error(error);
            });


    }

    render() {

        if (this.state.listChambre === '') return (
            <Row>
                <Col md={{size : 1, push: 12}}>
                    <LoadingIndicator
                        segmentWidth="50"
                    />
                </Col></Row>
        )

        const listItems = this.state.listChambre.map((object) =>
            <Col>
                <CardHotel
                    nomHotel={object.hotel.nom}
                    nbrEtoileHotel={object.hotel.nbEtoile}
                    adresseHotel={object.hotel.adresse}
                    VilleHotel={object.hotel.ville}
                    regionHotel={object.hotel.region}
                    codePostalHotel={object.hotel.codePostal}
                ></CardHotel>
            </Col>
        )

        return (
            <div>
                <Row>
                    {listItems}
                </Row>
            </div>
        )
    }
}


/*
REQUEST
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})
*/

