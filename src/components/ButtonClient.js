import React, { Component } from 'react';
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

export default class ButtonClient extends Component {
    render() {
        return (
            <div>

                <Button color="primary" size="sm">
                    <img src="http://www.moellermatthews.ca/wp-content/themes/moellermatthews/images/placeholder-profile.png" height="20" width="20"/>
                    Mon compte
                </Button>{' '}

            </div>
        );
    }
}

