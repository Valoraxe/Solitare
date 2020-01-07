import React from "react";
import TopTable from "./topTable";
import BottomTable from "./bottomTable";
import { connect } from 'react-redux';
import { DECK } from "../../public/deck";
import { getDeck } from "../redux/actions/actions";
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export class Gameboard extends React.Component {
    constructor(props) {
        super(props);

        this.getDeck();
    }

    getDeck() {
        const DECKSHUFFLED = this.shuffle(DECK);
        this.props.getDeck(DECKSHUFFLED);
    }

    shuffle(deck) { //Fisher-Yates shuffle algorithm
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    render() {
        return (
            <DndProvider backend={Backend}>
                <div className='gameboard'>
                    <TopTable/>
                    <BottomTable/>
                </div>
            </DndProvider>
        );
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        getDeck: (deck) => dispatch(getDeck(deck))
    }
};

export default connect(undefined, mapDispatchToProps)(Gameboard)