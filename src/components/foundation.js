import React from "react";
import Card from "./card";

export default class Foundation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const SUIT = this.props.suit;
        const CARDS = this.props.cards;
        return (
            <div className="foundationCell">
                {CARDS.length < 1 && <span>{SUIT}</span>}
                {CARDS.map(card => {
                    return (
                        <Card key={card.id} {...card}/>
                    )
                })}
            </div>
        );
    }
}