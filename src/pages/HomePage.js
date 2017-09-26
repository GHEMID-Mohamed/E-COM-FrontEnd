import React, { Component } from 'react';
import Header from '../components/Header'
import BodyHome from '../components/BodyHome'
import Footer from '../components/Footer'
import StepsBookingTabs from '../components/StepsBookingTabs'


export default class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            StepsBookingTabsVisible: false,
            BodyHomeVisible: true,
            connexionState: false,
            Data: false,
            dateDeb: '',
            dateFinn: ''
        }

        this.goListenToButtonSearch = this.goListenToButtonSearch.bind(this)
        this.buttonNewClickedd = this.buttonNewClickedd.bind(this)
        this.getConnexionState2 = this.getConnexionState2.bind(this)
        this.getDates = this.getDates.bind(this)
    }

    getDates(dateDebut, dateFin) {
        this.setState({
            dateDeb: dateDebut,
            dateFinn: dateFin
        })
    }

    getConnexionState2(state) {
        this.setState({
            connexionState: state
        })

        console.log('state from homePage '+state)
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
            Data: data
        })

        console.log(this.state.Data)
    }

    render() {
        return (
            <div>
                <Header getStateConnexionProp3={this.getConnexionState2}></Header>
                <hr />
                <br />
                {this.state.StepsBookingTabsVisible ? <StepsBookingTabs
                    buttonNewClickedProps={this.buttonNewClickedd}
                    dataProp={this.state.Data}
                    stateConnexionProp={this.state.connexionState}
                    dateDebProp={this.state.dateDeb}
                    dateFinProp={this.state.dateFinn}
                ></StepsBookingTabs> : null}
                {this.state.BodyHomeVisible ? <BodyHome goListenToButtonSearchProp={this.goListenToButtonSearch}
                                                        goGetDatesProp={this.getDates}
                ></BodyHome> : null}
                <br />
                <br />
                <br />
                <hr />
            </div>
        )
    }


}

