import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';



export default class InputSignUp extends React.Component {

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

                    <Form>
                        <hr />
                        <br /> <h4><strong>Nouveau client Pyramide Hôtel ?</strong></h4>
                        <hr />
                        <br /> <h4>Créez ici votre compte client en renseignant vos informations personnelles</h4>
                        <hr />
                        <br /> <h4>
                            <img src="https://cdn4.iconfinder.com/data/icons/IconFinder%201/Png/512/User/User%20Red.png"
                                height="70" width="70" />
                            Mes informations personnelles
                    </h4>
                    <Row>
                    <Col md="7">
                        <Jumbotron>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email*</Label>
                                        <Input type="email" name="email" id="email" placeholder="Entrez votre boite email..." />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="motDePasse">Mon mot de passe*</Label>
                                        <Input type="password" name="motDePasse" id="motDePasse" placeholder="Entrez votre mot de passe ..." />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="confirmMotDePasse">Confirmer mon mot de passe*</Label>
                                        <Input type="password" name="confirmMotDePasse" id="confirmMotDePasse" placeholder="password placeholder" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup tag="fieldset">
                                        <p>Vous êtes*</p>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="monsieur" />{' '}
                                                M.
                        </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="madame" />{' '}
                                                Mme
                        </Label>
                                        </FormGroup>
                                        <FormGroup check disabled>
                                            <Label check>
                                                <Input type="radio" name="mademoiselle" />{' '}
                                                Mlle
                        </Label>
                                        </FormGroup>
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="nom">Nom*</Label>
                                        <Input type="nom" name="nom" id="nom" placeholder="Entrez votre boite nom..." />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="prenom">Prénom*</Label>
                                        <Input type="prenom" name="prenom" id="prenom" placeholder="Entrez votre boite prenom..." />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="numTel">Numéro de téléphone portable*</Label>
                                        <Input type="numTel" name="numTel" id="numTel" placeholder="Entrez votre boite numéro téléphone..." />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="adresse">Adresse*</Label>
                                        <Input type="adresse" name="adresse" id="adresse" placeholder="Entrez votre adresse..." />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="codePostal">Code postal*</Label>
                                        <Input type="codePostal" name="codePostal" id="codePostal" placeholder="Entrez votre code postal..." />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Row>
                                            <Col md="1"><Label for="pays">Pays* </Label></Col>
                                            <Col md="11">
                                                <CountryDropdown
                                                    value={country}
                                                    onChange={(val) => this.selectCountry(val)} />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>



                            <Row>
                                <Col>
                                    <Button color="success">Créer votre compte</Button>
                                </Col>
                            </Row>
                        </Jumbotron>
                        </Col>
                        </Row>
                    </Form >
            

        );
    }
}