import React from "react";
import Card from "./card";

export default class Tableau extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const CARDS = this.props.cards;
        return (
            <div className="tableau">
                {CARDS.map(card => {
                    return (
                        <Card key={card.id} {...card}/>
                    )
                })}
            </div>
        );
    }
}