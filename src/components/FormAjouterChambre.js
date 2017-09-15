import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import '../components/FormAjouterHotel.css'


export default class FormAjouterChambre extends React.Component {

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
                        <Label for="exampleSelect">Hôtel</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Pyramide</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Numéro</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Nom de chambre" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Etage</Label>
                        <Input type="text" name="password" id="examplePassword" placeholder="étage de la chambre" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Etat</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Très bon état</option>
                            <option>Bon état</option>
                            <option>Mauvais état</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">prix</Label>
                        <Input type="text" name="password" id="examplePassword" placeholder="Code postale" />
                    </FormGroup>
                    <Button color="success">Ajouter</Button>
                </Form>
            </div>
        );
    }
}