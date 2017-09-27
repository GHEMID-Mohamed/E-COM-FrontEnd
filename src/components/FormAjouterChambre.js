import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron, Alert } from 'reactstrap';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import '../components/FormAjouterHotel.css'


export default class FormAjouterChambre extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            region: '',
            resultatVisible: true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const details = {
            'numero': '1',
            'nbLits': '2',
            'etage': '27',
            'etat': '27',
            'prix': '27',
            'idHotel': '27',
            'token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdXRoZW50aWNhdGlvbiIsImlkIjoiMTEiLCJleHAiOjE1MDY0OTY4NTAsImlhdCI6MTUwNjQ5MzI1MH0.1x9Xj2uhXTYeyFSBDIJwy6cvnjYHMLXwtJbRb3Adiqo'
        }

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&')

        fetch('http://152.77.78.16:8080/HotelBookersWeb/auth/login/', {

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
                    resultatVisible: !this.state.resultatVisible
                })
                console.log('token :' + data.resultat.token)
            }
            else {
                this.setState({
                    connectionState: false,
                    message: data.resultat
                })
            }
            //console.log(data)
        }).catch((error) => {
            console.error(error);
        });
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
                {!this.state.resultatVisible ?
                    <Alert color="success">
                        <h5>Chambre ajoutée avec succée</h5>
                    </Alert> : null}

                {this.state.resultatVisible ? <Form>
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
                    <Button color="success" onClick={this.handleClick}>Ajouter</Button>
                </Form>:null}
            </div>
        );
    }
}