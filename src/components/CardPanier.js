import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Jumbotron, Col, Row, Alert
} from 'reactstrap';
import Sticky from 'react-sticky-el'




export default class CardPanier extends Component {

    constructor(props) {
        super(props)

        this.state = {
            infos: []
        }
    }

    ComponentWillReceiveProps(nextProps) {
        if(nextProps.infos !== this.state.infos ) {
            this.setState({ infos: this.state.infos.push(nextProps.infos)})
        }

        console.log(this.nextProps.infos)
    }



    render() {


        var chambres = []
        for (var i = 0; i < this.state.infos.length; i++) {
                chambres.push(<span className='chambres' key={i}>

                        </span>
                )
        }

        return (

            <Sticky>
                <div className="CardPanier">

                    <Card>
                        <CardBlock>
                            <CardTitle>Votre reservation </CardTitle>

                            <Alert color="info">
                                2 Chambre 1-2 personnes 1 grand lit pour 1 nuit
                            </Alert>
                            <CardText>
                                <Row>
                                    <Col>
                                        <p>Totale </p><h3><strong> {this.props.prix} € </strong></h3>
                                    </Col>
                                </Row>
                            </CardText>

                            <Button color="success"><strong>Réserver !</strong></Button>
                            <img src="https://image.freepik.com/icones-gratuites/panier-2_318-11553.jpg"
                                height="30" width="30" />
                        </CardBlock>
                    </Card>

                </div>
            </Sticky>

        )
    }

}
