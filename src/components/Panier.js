import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Jumbotron, Col, Row, Alert, Badge
} from 'reactstrap';
import Sticky from 'react-sticky-el'
import PanierElement from './PanierElement'




export default class Panier extends Component {

    constructor(props) {
        super(props)
        this.state = {

            prix: this.props.prix,
            nomHotel: this.props.nomHotel,
            adressHotel: this.props.adressHotel,
            nbrAdulte: this.props.nbrAdulte,
            nbrEnfant: this.props.nbrEnfant,
            nbrChambre: this.props.nbrChambre,
            nbrLit: this.props.nbrLit,
            elements: []
        }

    }



    componentWillReceiveProps(nextProps) {

        this.state.elements.push(
            <PanierElement
                prix={nextProps.prix}
                nomHotel={nextProps.nomHotel}
                adressHotel={nextProps.adressHotel}
                nbrAdulte={nextProps.nbrAdulte}
                nbrEnfant={nextProps.nbrEnfant}
                nbrChambre={nextProps.nbrChambre}
                nbrLit={nextProps.nbrLit}
            ></PanierElement>
        );

        this.setState({
            prix: nextProps.prix,
            nomHotel: nextProps.nomHotel,
            adressHotel: nextProps.adressHotel,
            nbrAdulte: nextProps.nbrAdulte,
            nbrEnfant: nextProps.nbrEnfant,
            nbrChambre: nextProps.nbrChambre,
            nbrLit: nextProps.nbrLit,
            elements: this.state.elements
        })

    }


    render() {


        return (

            <Sticky>
                <Card>
                    <CardBlock>
                        <CardTitle>Ma liste </CardTitle>
                        {this.state.elements}
                    </CardBlock>
                </Card>
            </Sticky>

        )
    }

}
