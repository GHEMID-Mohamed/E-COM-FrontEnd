import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
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

                    <Button color="danger" size="md">
                        <img src="http://www.iconsdb.com/icons/preview/white/search-3-xxl.png" height="20" width="20" />
                    </Button>{' '}

                </Form>
                
            </div>
        );
    }
}

