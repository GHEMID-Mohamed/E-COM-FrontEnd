import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class CardChambre extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.src} alt="Chambre" />
                    <CardBlock>
                        <CardTitle>Chambre {this.props.nombreDePersonne} personne</CardTitle>
                        <CardSubtitle>{this.props.nombreDeLit} lit</CardSubtitle>
                        <CardText>Profitez d’une chambre pouvant accueillir 1 ou 2 personnes avec un matelas de qualité et des oreillers moelleux. Vous disposerez d’une salle de bain privée équipée d’une douchette XXL, de toilettes, de serviettes et d’un tapis de bain. N'hésitez plus !</CardText>
                        <Button color="danger">Reserver</Button>
                    </CardBlock>
                </Card>
            </div>
        )
    }

}
