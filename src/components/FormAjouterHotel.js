import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import '../components/FormAjouterHotel.css'


export default class FormAjouterHotel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { country: '', region: '' };
    }


    selectCountry(val) {
        this.setState({ country: val });
    }

    selectRegion(val) {
        this.setState({ region: val });
    }

    render() {
        const { country, region } = this.state;
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Nom Hotel</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Nom hôtel" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Adresse</Label>
                        <Input type="text" name="password" id="examplePassword" placeholder="Adresse hôtel" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Pays</Label>
                        <br />
                        <CountryDropdown
                            value={country}
                            onChange={(val) => this.selectCountry(val)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Ville</Label>
                        <br />
                        <RegionDropdown 
                            
                            country={country}
                            value={region}
                            onChange={(val) => this.selectRegion(val)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Code postale</Label>
                        <Input type="text" name="password" id="examplePassword" placeholder="Code postale" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Nombre d'étoile</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <Button color="success">Ajouter</Button>
                </Form>
            </div>
        );
    }
}