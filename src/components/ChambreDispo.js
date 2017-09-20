import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import ConnectedClient from '../components/ConnectedClient'

export default class ChambreDispo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            listChambre: []
        }
    }

    componentDidMount() {
        fetch('http://152.77.78.16:8080/HotelBookersWeb/hotels/room/search')
            .then(result => {
                return result.json()
            }).then(data => {
                this.setState({
                    listChambre: data
                })
                console.log(data)
            }).catch((error) => {
                console.error(error);
            });


    }

    render() {
        return (
            <div>
                
                {/*listItems = this.state.listChambre.map((object) =>
                
                )
                */
                }
            </div>
        )
    }
}


/*
REQUEST
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})
*/
