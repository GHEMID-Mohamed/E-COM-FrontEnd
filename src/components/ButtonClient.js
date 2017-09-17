import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import ConnectedClient from '../components/ConnectedClient'

export default class ButtonClient extends Component {

    constructor(props) {
        super(props)

        this.state = {
            connected: false
        }

        this.listenToLogOut = this.listenToLogOut.bind(this)
    }

    listenToLogOut() {
        this.setState({
            connected: true
        })
    }

    render() {

        if (!this.state.connected) {
            return (
                <div>

                    <Button color="primary" size="sm">
                        <img src="http://www.moellermatthews.ca/wp-content/themes/moellermatthews/images/placeholder-profile.png" height="20" width="20" />
                        Mon compte
                    </Button>{' '}

                </div>
            );
        }
        else {
            return (
                <div>
                    <ConnectedClient listenToLogOutProp={this.listenToLogOut}></ConnectedClient>
                </div>
            );
        }
    }
}

