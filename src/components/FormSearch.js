import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import DatePickerDepart from '../components/DatePickerDepart'
import DatePickerArrive from '../components/DatePickerArrive'
import InputDestination from '../components/InputDestination'
import '../components/SearchIcon.css'
import '../components/FormSearch.css'

export default class FormSearch extends Component {
    render() {
        return (
            <div>

                <Form inline>
                    <img src="https://st2.depositphotos.com/6323354/11163/v/950/depositphotos_111633542-stock-illustration-map-pointer-icon-gps-location.jpg"
                        height="50" width="50" />
                    <FormGroup>
                        <InputDestination></InputDestination>
                    </FormGroup>
                    {' '}
                    <FormGroup>

                        <DatePickerArrive></DatePickerArrive>

                    </FormGroup>
                    {' '}
                    <FormGroup>

                        <DatePickerDepart></DatePickerDepart>

                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Input type="select" name="NbrPersonne" id="NbrPersonne">
                            <option>1 personne</option>
                            <option>2 personnes</option>
                            <option>3 personnes</option>
                            <option>4 personnes</option>
                            <option>5 personnes</option>
                        </Input>
                    </FormGroup> {' '}

                    <Link to="/resultat">
                    <Button color="danger" size="md">
                       
                            <img src="http://www.vincentdeplais.fr/siteAlummi/images/menu-search.png" height="20" width="20" />
                        
                    </Button>{' '}
                    </Link>

                </Form>

            </div>
        );
    }
}

