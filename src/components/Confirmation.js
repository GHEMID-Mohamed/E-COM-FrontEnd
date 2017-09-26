import React, { Component } from 'react';
import {
    Dropdown, DropdownToggle, DropdownMenu,
    DropdownItem, Row, Col, Alert, Button
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Confirmation extends Component {


    render() {
        return (
            <div>
                <br />
                <br />
                <Alert color="success">
                    <Row>
                        <Col>
                            <center>Reservation <strong>réussi</strong></center>
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <Row>
                        <Col>
                            <center>
                                <Link to="/">
                                    <Button color="warning" size="md" onClick={this.handleClickNew}>

                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/2000px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
                                            height="30" width="30" />

                                        <strong>Nouvelle recherche</strong>

                                    </Button>
                                </Link>
                            </center>
                        </Col>
                    </Row>
                </Alert>
                <br />
            </div>
        );
    }
}

