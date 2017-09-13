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
            info: this.props.info
        }
    }

    componentWillReceiveProps(nextProps) {
        if( this.state.info !== nextProps.info   ) {
            this.setState({ info: nextProps.info})
        }

   
    }


    render() {


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
                                        <p>Totale </p><h3><strong> {this.state.info} € </strong></h3>
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
