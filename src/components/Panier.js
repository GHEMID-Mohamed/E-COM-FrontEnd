import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Jumbotron, Col, Row, Alert, Badge
} from 'reactstrap';
import Sticky from 'react-sticky-el'
import PanierElement from './PanierElement'
import { Scrollbars } from 'react-custom-scrollbars';




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
            elementsIndexs: [],
            indexElement: 0,
        }

        this.goListenElement = this.goListenElement.bind(this)
        this.ListenButtonReserver = this.ListenButtonReserver.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleScroll = this.handleScroll.bind(this)

    }





    handleUpdate() {
        this.refs.scrollbar.scrollToBottom()
    }

    handleScroll(e) {
        this.refs.scrollbar.scrollToLeft()
    }


    goListenElement(element) {
        this.setState(
            { indexElement: this.state.indexElement - 1 }
        )
        var index = this.state.elements.indexOf(<PanierElement
            key={element} ></PanierElement>)

        const elemnts = this.state.elements

        elemnts.slice(index, 1)

        this.setState({
            elements: elemnts
        })


    }

    componentWillReceiveProps(nextProps) {

        if (parseInt(this.state.prix) !== parseInt(nextProps.prix)) {


            this.setState({ indexElement: this.state.indexElement + 1 })
            console.log(nextProps.idChambre+' from Panier')

            if (!this.state.elements.includes(
                nextProps.prix
            )) {
                this.state.elements.push(

                    <PanierElement ListenButtonReserver={this.ListenButtonReserver}
                        listenElement={this.goListenElement}
                        prix={nextProps.prix}
                        nomHotel={nextProps.nomHotel}
                        nbrAdulte={nextProps.nbrAdulte}
                        adressHotel={nextProps.adressHotel}
                        nbrEnfant={nextProps.nbrEnfant}
                        nbrChambre={nextProps.nbrChambre}
                        nbrLit={nextProps.nbrLit}
                        idChambre={nextProps.idChambre}
                    ></PanierElement>

                );

                this.state.elements.push(
                    parseInt(nextProps.prix)
                )
            }
        }


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



    ListenButtonReserver(prix, nomHotel, adressHotel, nbrAdulte, nbrEnfant, nbrChambre, nbrLit, idChambre) {
        console.log('button was clicked from pannier')
        console.log(prix)
        console.log(idChambre+' from Panier')
        this.props.listenReserverButton2(prix, nomHotel, adressHotel, nbrAdulte, nbrEnfant, nbrChambre, nbrLit, idChambre)
    }




    render() {


        return (

            <Sticky>

                <Card>
                    <CardBlock>
                        <CardTitle>Ma liste </CardTitle>
                        {/*onUpdate={this.handleUpdate}*/}
                        <Scrollbars style={{ width: 310, height: 350 }}
                             ref="scrollbar"
                            onScroll={this.handleScroll}>

                            {this.state.elements.map(function (listValue) {
                                if (!Number.isInteger(listValue))
                                    return <div>{listValue}</div>
                            })}

                        </Scrollbars>

                    </CardBlock>
                </Card>

            </Sticky>

        )
    }

}
