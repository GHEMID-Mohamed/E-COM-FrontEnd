import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

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
                        <Link to="/contacterNous">
                        Nous contacter
                            {/*<NavLink href="#">Nous contacter</NavLink> */}
                        </Link>
                    </NavItem>

                </Nav>
            </div>
        );
    }
}

