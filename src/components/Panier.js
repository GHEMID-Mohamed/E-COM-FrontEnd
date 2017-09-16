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
            elements: [],
            indexElement: 0,
            listElemnt: ''
        }

        this.goListenElement = this.goListenElement.bind(this)
        this.ListenButtonReserver = this.ListenButtonReserver.bind(this)
    }

    componentDidMount() {
        this.elements = []
    }

    componentWillUnmount() {
        this.elements = []
    }


    goListenElement(element) {
        this.setState(
            { indexElement: this.state.indexElement - 1 }
        )
        var index = this.state.elements.indexOf(<PanierElement
            key={element} ></PanierElement>)

        const elemnts = this.state.elements

        elemnts.slice(index,1)

        this.setState({
            elements: elemnts
        })


    }

    componentWillReceiveProps(nextProps) {

        if (parseInt(this.state.prix) !== parseInt(nextProps.prix)) {

            this.setState({ indexElement: this.state.indexElement + 1 })

            this.state.elements.push(

                <PanierElement ListenButtonReserver={this.ListenButtonReserver}
                    
                    listenElement={this.goListenElement}
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
    }


    ListenButtonReserver () {
        console.log('button was clicked from pannier')
        this.props.listenReserverButton2()
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
