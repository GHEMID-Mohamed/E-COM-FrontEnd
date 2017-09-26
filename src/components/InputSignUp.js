import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Jumbotron, Alert } from 'reactstrap';
import { Link } from 'react-router-dom'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';



export default class InputSignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            region: '',
            email: '',
            motDePasse: '',
            confirmMotDePasse: '',
            sexe: '',
            nom: '',
            prenom: '',
            numeroTel: '',
            adresse: '',
            codePostal: '',
            messageMotPasse: '',
            messageFin: '',
            colorAltert: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleAdresse = this.handleAdresse.bind(this)
        this.handleCodePostal = this.handleCodePostal.bind(this)
        this.handleMotDePass = this.handleMotDePass.bind(this)
        this.handleConfirmPass = this.handleConfirmPass.bind(this)
        this.handleNom = this.handleNom.bind(this)
        this.handlePrenom = this.handlePrenom.bind(this)
        this.handleNumTel = this.handleNumTel.bind(this)
        this.selectCountry = this.selectCountry.bind(this)
    }

    selectCountry(val) {
        this.setState({ country: val });
    }

    selectRegion(val) {
        this.setState({ region: val });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleMotDePass(e) {
        this.setState({
            motDePasse: e.target.value
        })
    }

    handleConfirmPass(e) {
        this.setState({
            confirmMotDePasse: e.target.value
        })

        if (this.state.motDePasse != e.target.value)
            this.setState({
                messageMotPasse: 'Mot de passes non identiques'
            })
        else
            this.setState({
                messageMotPasse: ''
            })
    }


    handleNom(e) {
        this.setState({
            nom: e.target.value
        })
    }

    handlePrenom(e) {
        this.setState({
            prenom: e.target.value
        })
    }

    handleNumTel(e) {
        this.setState({
            numeroTel: e.target.value
        })
    }

    handleAdresse(e) {
        this.setState({
            adresse: e.target.value
        })
    }

    handleCodePostal(e) {
        this.setState({
            codePostal: e.target.value
        })
    }


    handleSubmit(e) {
        if ( this.state.adresse == ''
            || this.state.codePostal == '' || this.state.confirmMotDePasse == ''
            || this.state.email == '' || this.state.motDePasse == ''
            || this.state.nom == '' || this.state.numeroTel == ''
            || this.state.prenom == '') {
            e.preventDefault()
            console.log('Im not registrating')
        } else {

            console.log('Im registrating')

            const details = {

                'email': this.state.email,
                'password': this.state.motDePasse,
                'nom': this.state.nom,
                'prenom': this.state.prenom,
                'adresse': this.state.adresse,
                'ville': 'Paris',
                'region': 'Bretagne',
                'codePostal': this.state.codePostal,
                'sexe': 'Mr',
                'numTel': this.state.numeroTel
            }

            const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&')

            fetch('http://152.77.78.16:8080/HotelBookersWeb/auth/register/', {
                
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
                        messageFin: data.resultat,
                        colorAltert: 'success'
                    })
                    this.props.getStateConnectionProp(true, data.resultat.nom, data.resultat.prenom)
                    window.scrollTo(0, 0)
                    this.props.getStateProp(true)
                    
                }
                else  {
                    this.setState({
                        messageFin: data.resultat,
                        colorAltert: 'danger'
                    })
                }
                //console.log(data)
            }).catch((error) => {
                console.error(error);
            });



        }
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
                <Alert color={this.state.colorAltert}>
                    <strong>{this.state.messageFin}</strong>
                </Alert>
                <br /> <h4>
                    <img src="https://cdn4.iconfinder.com/data/icons/IconFinder%201/Png/512/User/User%20Red.png"
                        height="70" width="70" />
                    Mes informations personnelles
                    </h4>
                <Row>
                    <Col>
                        <Jumbotron>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email*</Label>
                                        <Input type="email" name="email" id="email"
                                            placeholder="Entrez votre boite email..."
                                            onChange={this.handleEmailChange}
                                            required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="motDePasse">Mon mot de passe*</Label>
                                        <Input type="password" name="motDePasse" id="motDePasse"
                                            placeholder="Entrez votre mot de passe ..."
                                            onChange={this.handleMotDePass}
                                            required />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="confirmMotDePasse">Confirmer mon mot de passe*</Label>
                                        <Input type="password" name="confirmMotDePasse"
                                            id="confirmMotDePasse"
                                            placeholder="password placeholder"
                                            onChange={this.handleConfirmPass}
                                            required />
                                        <p>{this.state.messageMotPasse}</p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup tag="fieldset">
                                <Row>
                                    <Col md="auto">Vous êtes :</Col>
                                    <Col md="auto">
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" checked />{' '}
                                                Mr
                                                    </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md="auto">
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                Mme                                </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md="auto">
                                        <FormGroup check >
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                Mlle
                                                    </Label>
                                        </FormGroup>
                                    </Col>

                                </Row>
                            </FormGroup>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="nom">Nom*</Label>
                                        <Input type="nom" name="nom" id="nom"
                                            placeholder="Entrez votre boite nom..."
                                            onChange={this.handleNom}
                                            required />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="prenom">Prénom*</Label>
                                        <Input type="prenom" name="prenom" id="prenom"
                                            placeholder="Entrez votre boite prenom..."
                                            onChange={this.handlePrenom}
                                            required />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="numTel">Numéro de téléphone portable*</Label>
                                        <Input type="numTel" name="numTel" id="numTel"
                                            placeholder="Entrez votre boite numéro téléphone..."
                                            onChange={this.handleNumTel}
                                            required />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="adresse">Adresse*</Label>
                                        <Input type="adresse" name="adresse" id="adresse"
                                            placeholder="Entrez votre adresse..."
                                            onChange={this.handleAdresse}
                                            required />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="codePostal">Code postal*</Label>
                                        <Input type="codePostal" name="codePostal"
                                            id="codePostal"
                                            placeholder="Entrez votre code postal..."
                                            onChange={this.handleCodePostal}
                                            required />
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
                                                    value={this.state.country}
                                                    onChange={(val) => this.selectCountry(val)} />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>



                            <Row>
                                <Col>
                                    <Button onClick={this.handleSubmit} color="success">Créer votre compte</Button>
                                </Col>
                            </Row>
                        </Jumbotron >
                    </Col >
                </Row >
            </Form >


        );
    }
}