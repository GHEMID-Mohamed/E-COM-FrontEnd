import React, { Component } from 'react';
import Header from '../components/Header'
import BodyHome from '../components/BodyHome'
import Footer from '../components/Footer'


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <BodyHome></BodyHome>
                <Footer></Footer>
            </div>
        );
    }
}

