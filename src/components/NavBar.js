import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Nav tabs={false} pills={true}>
                    <NavItem>
                        <NavLink href="/" active>Accueil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/administrator">Nos meilleures offres</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/hotels">Nos Hôtels</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contacterNous">Contacter nous</NavLink>
                    </NavItem>
                    

                </Nav>
            </div>
        );
    }
}

