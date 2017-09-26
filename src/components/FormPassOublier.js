import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom'



export default class FormPassOublier extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            emailValue: '',
            emailSent: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(e) {

        if (this.state.emailValue != '') {
            fetch('http://152.77.78.16:8080/HotelBookersWeb/auth/passwordLost/' + this.state.emailValue)
                .then(result => {
                    return result.json()
                }).then(data => {

                    if (data.code == 201) {
                        this.setState({
                            emailSent: true
                        })
                        this.props.getSentState(true)
                    }
                    else {
                        this.props.getNotSentState(true)
                    }

                    console.log(data)
                }).catch((error) => {
                    console.error(error);
                });
        }
        else
            e.preventDefault()

    }

    handleChange(event) {
        this.setState({
            emailValue: event.target.value
        })
    }

    render() {
        return (
            <div>

                <hr />
                <h4><strong>Mot de passe oublier</strong></h4>
                <hr />
                <Row>
                    <Col md="7">
                        <Jumbotron>
                            <h4>Entrez votre adresse email</h4>
                            <hr />
                            <Form>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleEmail" hidden>Email</Label>
                                            <Input type="email" value={this.state.emailValue} onChange={this.handleChange} placeholder="Entrez votre adresse email" required />
                                        </FormGroup>
                                        {' '}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="3"></Col>
                                    <Col md="3"></Col>
                                    <Col md="1"></Col>
                                    <Col md="5">
                                        <Button color="danger" onClick={this.handleClick} >Envoyer mot de passe</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        );
    }
}