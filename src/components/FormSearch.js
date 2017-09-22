import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import DatePickerDepart from '../components/DatePickerDepart'
import DatePickerArrive from '../components/DatePickerArrive'
import InputDestination from '../components/InputDestination'
import '../components/SearchIcon.css'
import '../components/FormSearch.css'

export default class FormSearch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dateArrive: '',
            dateDepart: '',
            InputValue: '',
            valueAdulte: '',
            valueEnfant: ''
        }

        this.getDateArrive = this.getDateArrive.bind(this)
        this.getDateDepart = this.getDateDepart.bind(this)
        this.getInputValue = this.getInputValue.bind(this)
        this.handleChangeEnfant = this.handleChangeEnfant.bind(this)
        this.handleChangeAdulte = this.handleChangeAdulte.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeAdulte(e) {
        this.setState({
            valueAdulte: e.target.value
        })
    }

    handleChangeEnfant(e2) {
        this.setState({
            valueEnfant: e2.target.value
        })
    }

    getInputValue(value) {
        const v = value;
        this.setState({
            InputValue: v
        })
      
    }

    getDateArrive(date) {
        this.setState({ dateArrive: date })
    }

    getDateDepart(date) {
        this.setState({ dateDepart: date })
    }

    handleSubmit(e) {
        if (this.state.dateArrive=="" || this.state.dateDepart=="" || this.state.InputValue=="") {
            console.log('i stop submit')
            e.preventDefault()

        }
        else {
            if(this.state.valueAdulte=="" && this.state.valueEnfant=="") {
                e.preventDefault()
            } else {
                // DO THE POST
                console.log('Im ready')
            }
        }

    }

    render() {
        return (



            <Form>
                <Row>
                    <Col md="11">
                        <FormGroup>
                            <InputDestination
                                getInputValueProp={this.getInputValue}
                            ></InputDestination>
                        </FormGroup>
                        {' '}
                    </Col>
                </Row>

                <Row>
                    <Col md="auto">
                        <FormGroup>

                            <DatePickerArrive goGetDateArrive={this.getDateArrive} ></DatePickerArrive>

                        </FormGroup>
                        {' '}
                    </Col>
                    <Col md="auto">
                        <FormGroup>

                            <DatePickerDepart goGetDateDepart={this.getDateDepart} ></DatePickerDepart>

                        </FormGroup>
                        {' '}
                    </Col>

                </Row>

                <Row>
                    <Col md="auto">
                        <FormGroup>
                            <label for="NbrAdulte">Nombre adulte(s)</label>
                            <Input type="select" name="NbrAdulte" id="NbrAdulte"
                                value={this.state.valueAdulte}
                                onChange={this.handleChangeAdulte}
                                required
                            >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup> {' '}
                    </Col>
                    <Col md="auto">
                        <FormGroup>
                            <label for="NbrEnfant">Nombre enfant(s)</label>
                            <Input type="select" name="NbrEnfant" id="NbrEnfant"
                                value={this.state.valueEnfant}
                                onChange={this.handleChangeEnfant}
                                placeholder="nbr enfant" required
                            >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    {/*
                            <Col md="auto">
                                <FormGroup>
                                    <Input type="select" name="NbrPersonne" id="NbrPersonne">
                                        <option>1 chambre</option>
                                        <option>2 chambres</option>
                                        <option>3 chambres</option>
                                        <option>4 chambres</option>
                                        <option>5 chambres</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            */}
                </Row>

                <Row>
                    <Col md={{ size: 5, push: 7 }}>
                        <Link to="/resultat">
                            <Button color="danger" size="md" onClick={this.handleSubmit}>
                                <img src="http://www.vincentdeplais.fr/siteAlummi/images/menu-search.png" height="20" width="20" />
                                &nbsp;
                                Rechercher
                            </Button>{' '}
                        </Link>
                    </Col>
                </Row>




            </Form>



        );
    }
}

