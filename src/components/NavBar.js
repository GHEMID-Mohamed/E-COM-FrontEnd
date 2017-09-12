import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Nav pills>
                    <NavItem>
                        <NavLink href="/" active>Accueil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Nos meilleures offres</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Nos Hôtels</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Nous contacter</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

