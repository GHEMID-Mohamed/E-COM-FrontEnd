import React, { Component } from 'react';
import {
    Form, FormGroup,
    Input, Button, FormText, Label, Container, Row, Col,
    InputGroup, InputGroupAddon, Alert
} from 'reactstrap';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class ContacterNousPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: '',
            messageToSend: '',
            nom: '',
            sujet: '',
            email: '',
            Formvisible: true
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleMessageSend = this.handleMessageSend.bind(this)
        this.handleNom = this.handleNom.bind(this)
        this.handleSujet = this.handleSujet.bind(this)
        this.handleEmail = this.handleEmail.bind(this)

    }

    handleMessageSend(event) {
        this.setState({
            messageToSend: event.target.value
        })
    }

    handleNom(event) {
        this.setState({
            nom: event.target.value
        })
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleSujet(event) {
        this.setState({
            sujet: event.target.value
        })
    }

    handleClick() {

        const details = {
            'nom': this.state.nom,
            'sujet': this.state.sujet,
            'email': this.state.email,
            'message': this.state.messageToSend

        }

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&')

        fetch('http://152.77.78.16:8080/HotelBookersWeb/contact/contactUs', {

            method: 'POST',
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        }).then(result => {
            return result.json()
        }).then(data => {
            if (data.code == '201') {
                this.setState({
                    message: data.resultat,
                    Formvisible: !this.state.Formvisible
                })
            }
            else {
                this.setState({
                    message: "Il y a une erreur dans le système"
                })
            }

        }).catch((error) => {
            console.error(error);
        });
    }


    render() {
        return (

            <div>
                <Container>
                    <Header></Header>
                    <hr />

                    {this.state.Formvisible ? <Row>
                        <Col md="8">
                            <Form tag="fieldset">
                                <legend>Nous Contacter</legend>
                                <FormGroup>
                                    <Label for="name">Nom: </Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Nom"
                                        value={this.state.nom}
                                        onChange={this.handleNom} />
                                </FormGroup>
                                <br />
                                <FormGroup>
                                    <Label for="email">Email: </Label>
                                    <InputGroup>
                                        <InputGroupAddon>@</InputGroupAddon>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="@example.example"
                                            value={this.state.email}
                                            onChange={this.handleEmail} />
                                    </InputGroup>
                                </FormGroup>
                                <br />
                                <FormGroup>
                                    <Label for="select">Sujet: </Label>
                                    <Input type="select" name="select" id="select"
                                        onChange={this.handleSujet}
                                        value={this.state.sujet}>
                                        <option>Choisissez un</option>
                                        <option>Réservation</option>
                                        <option>Paiment</option>
                                        <option>Confirmation réservation</option>
                                        <option>Compte</option>
                                        <option>Autre</option>
                                    </Input>
                                </FormGroup>
                                <br />
                                <FormGroup>
                                    <Label for="text">Message: </Label>
                                    <Input type="textarea" name="text" id="text"
                                        value={this.state.messageToSend}
                                        onChange={this.handleMessageSend} />
                                </FormGroup>
                                <br />
                                <Button onClick={this.handleClick} color="primary">Envoyer</Button>

                            </Form>
                        </Col>
                    </Row> : null}

                    {!this.state.Formvisible ? 
                    <Alert color="success">
                        <h4>{this.state.message}</h4>
                    </Alert> : null}

                </Container>
                <hr />
            </div>
        );
    }
}



