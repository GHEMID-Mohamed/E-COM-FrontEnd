import React, { Component } from 'react';
import Header from '../components/Header'
import BodyHome from '../components/BodyHome'
import Footer from '../components/Footer'
import StepsBookingTabs from '../components/StepsBookingTabs'


export default class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            StepsBookingTabsVisible : false,
            BodyHomeVisible: true,
            connexionState: false,
            Data: false
        }

        this.goListenToButtonSearch = this.goListenToButtonSearch.bind(this)
        this.buttonNewClickedd = this.buttonNewClickedd.bind(this)
        this.getConnexionState = this.getConnexionState.bind(this)
    }

    getConnexionState(state) {
        this.setState({
          connexionState: state
        })
        console.log('state connexion is '+state+' from HomePage') 
    }

    buttonNewClickedd() {
        this.setState({
            StepsBookingTabsVisible: !this.state.StepsBookingTabsVisible,
            BodyHomeVisible: !this.state.BodyHomeVisible
        }) 
    }

    goListenToButtonSearch(state, data) {
        this.setState({
            StepsBookingTabsVisible: !this.state.StepsBookingTabsVisible,
            BodyHomeVisible: !this.state.BodyHomeVisible,
            Data : data
        })

        console.log(this.state.Data)
    }

    render() {
        return (
            <div>
                <Header getStateConnexionProp = {this.getConnexionState}></Header>
                <hr />
                <br />
                {this.state.StepsBookingTabsVisible ? <StepsBookingTabs
                             buttonNewClickedProps={this.buttonNewClickedd}
                             dataProp={this.state.Data}
                             stateConnexionProp={this.state.connexionState}
                             
                ></StepsBookingTabs> : null}
                {this.state.BodyHomeVisible ? <BodyHome goListenToButtonSearchProp={this.goListenToButtonSearch}
                                                         ></BodyHome> : null}
                <br />
                <br />
                <br />
                <Footer></Footer>
                <hr />
            </div>
        )
    }


}

