import React, { Component } from 'react';
import {
    Button, Form, FormGroup, Label, Input, FormText,
    Col, Row, FormFeedback
} from 'reactstrap';



export default class PayementForm extends Component {

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
            stateInput: '',
            color: '',
            notification: '',
            value: '',
            stateInput2: '',
            color2: '',
            notification2: '',
            value2: '',
            stateInput3: '',
            color3: '',
            notification3: '',
            value3: '',
            value4: '',
            stateInput5: '',
            color5: '',
            notification5: '',
            value5: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
        this.handleChange5 = this.handleChange5.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e) {
        if (e.target.value == '') {
            this.setState({
                stateInput: 'danger',
                color: 'danger',
                notification: 'Le champs est vide'
            })
        }
        else {
            this.setState({
                stateInput: 'success',
                color: 'success',
                notification: 'Très bien fait',
                value: e.target.value
            })
        }

    }

    handleChange2(e) {
        if (e.target.value == '') {
            this.setState({
                stateInput2: 'danger',
                color2: 'danger',
                notification2: 'Le champs est vide'
            })
        }
        else {
            this.setState({
                stateInput2: 'success',
                color2: 'success',
                notification2: 'Très bien fait',
                value2: e.target.value
            })
        }

    }

    handleChange3(e) {

        if (e.target.value == '') {
            this.setState({
                stateInput3: 'danger',
                color3: 'danger',
                notification3: 'Le champs est vide'
            })
        }
        else {
            this.setState({
                stateInput3: 'success',
                color3: 'success',
                notification3: 'Très bien fait',
                value3: e.target.value
            })
        }
    }

    handleChange4(e) {
        this.setState({
            value4: e.target.value
        })
    }

    handleChange5(e) {
        if (e.target.value == '') {
            this.setState({
                stateInput5: 'danger',
                color5: 'danger',
                notification5: 'Le champs est vide'
            })
        }
        else {
            this.setState({
                stateInput5: 'success',
                color5: 'success',
                notification5: 'Très bien fait',
                value5: e.target.value
            })
        }
    }

    handleSubmit(e) {
        if (this.state.value == '' || this.state.value2 == '' || this.state.value3 == '' ||
            this.state.value4 == '' || this.state.value5 == '') {
            e.preventDefault()

        } else {
            console.log('everyThing is good :) ')
        }
    }


    componentWillReceiveProps(nextProps) {

        this.setState({
            prix: nextProps.prix,
            nomHotel: nextProps.nomHotel,
            adressHotel: nextProps.adressHotel,
            nbrAdulte: nextProps.nbrAdulte,
            nbrEnfant: nextProps.nbrEnfant,
            nbrChambre: nextProps.nbrChambre,
            nbrLit: nextProps.nbrLit,
        })

    }




    render() {
        return (
            <div>
                <hr />
                Payement
                <hr />
                <Row>

                    <Col>
                        <Form>
                            <FormGroup color={this.state.color}>
                                <Label for="exampleEmail">Nom du détenteur de carte</Label>
                                <Input state={this.state.stateInput} onChange={this.handleChange}
                                    placeholder="Entrez le nom du déteneur de la carte" />
                                <FormFeedback>{this.state.notification}</FormFeedback>
                                <FormText color="muted">Exemple DRARENI</FormText>
                            </FormGroup>


                            <FormGroup color={this.state.color2}>
                                <Label for="exampleEmail">Numéro de la carte</Label>
                                <Input state={this.state.stateInput2} onChange={this.handleChange2}
                                    placeholder="Entrez le numéro de la carte" />
                                <FormFeedback>{this.state.notification2}</FormFeedback>
                                <FormText color="muted">Exemple 4012 0010 3714 1112</FormText>
                            </FormGroup>


                            <FormGroup color={this.state.color3}>
                                <Row>
                                    <Col>
                                        <Label for="exampleSelect">Date d'expiration</Label>
                                        <Input type="select"
                                            state={this.state.stateInput3}
                                            name="select" id="exampleSelect" onChange={this.handleChange3}>
                                            <option></option>
                                            <option value="01">Jan (01)</option>
                                            <option value="02">Feb (02)</option>
                                            <option value="03">Mar (03)</option>
                                            <option value="04">Apr (04)</option>
                                            <option value="05">May (05)</option>
                                            <option value="06">June (06)</option>
                                            <option value="07">July (07)</option>
                                            <option value="08">Aug (08)</option>
                                            <option value="09">Sep (09)</option>
                                            <option value="10">Oct (10)</option>
                                            <option value="11">Nov (11)</option>
                                            <option value="12">Dec (12)</option>
                                        </Input>
                                    </Col>
                                    <Col>
                                        <Label for="exampleSelect">Année</Label>
                                        <Input type="select" name="select" id="exampleSelect"
                                            onChange={this.handleChange4}>
                                            <option></option>
                                            <option value="13">2013</option>
                                            <option value="14">2014</option>
                                            <option value="15">2015</option>
                                            <option value="16">2016</option>
                                            <option value="17">2017</option>
                                            <option value="18">2018</option>
                                            <option value="19">2019</option>
                                            <option value="20">2020</option>
                                            <option value="21">2021</option>
                                            <option value="22">2022</option>
                                            <option value="23">2023</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup color={this.state.color5}>
                                <Label for="exampleEmail">CVV de la carte</Label>
                                <Input type="email" name="email" id="exampleEmail"
                                    onChange={this.handleChange5} placeholder="with a placeholder" />
                            </FormGroup>

                            <Button color="success" onClick={this.handleSubmit}>Payer</Button>

                        </Form>
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </div>
        );
    }
}

