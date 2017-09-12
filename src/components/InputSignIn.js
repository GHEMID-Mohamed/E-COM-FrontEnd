import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'



export default class InputSignIn extends React.Component {
    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                        {' '}
                    </Col>
                </Row>
                <Row>
                    <Col md="4"><Button color="danger">Connexion</Button></Col>
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