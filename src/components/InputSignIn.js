import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'



export default class InputSignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            respons: '',
            code: '',
            connectionState: false,
            message: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }


    handleClick() {

        const details = {
            'email': this.state.email,
            'password': this.state.password
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
                    connectionState: true,
                    message: ''
                })
                this.props.getStateConnectionProp(true, data.resultat.nom, data.resultat.prenom)
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

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
        console.log(e.target.value)
    }

    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <p>{this.state.message}</p>
                        <FormGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email"
                                onChange={this.handleChangeEmail} required />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input type="password" name="password" id="examplePassword"
                                onChange={this.handleChangePassword} placeholder="Password" required />
                        </FormGroup>
                        {' '}
                    </Col>
                </Row>
                <Row>
                    <Col md="4"><Button color="danger" onClick={this.handleClick}>Connexion</Button></Col>
                    <Col md="4">
                        <Link to="/passOublier">Mot de passe oublié ?</Link>
                    </Col>
                    <Col md="4">
                        <Link to="/inscription">Créer votre compte Client Pyramide</Link>
                    </Col>
                </Row>
            </Form>
        );
    }
}