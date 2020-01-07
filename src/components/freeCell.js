import React from "react";
import Card from "./card";
import { DropTarget } from 'react-dnd';
import store from "../redux/store";
import { moveToCell } from "../redux/actions/actions";

const Types = {
    CARD: "card"
}
  
const freeCellTarget = {
    drop(props, monitor) { //props is required, even when it is not called
        const card = monitor.getItem();
        store.dispatch(moveToCell(card, "freeCell1"));
        return card
    }
}

  function collect(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class FreeCell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { connectDropTarget } = this.props
        const CARDS = this.props.cards;
        return connectDropTarget(
            <div className="foundationCell">
                {CARDS.length < 1 && <span>Free Cell {this.props.number}</span>}
                {CARDS.map(card => {
                    return (
                        <Card key={card.id} {...card}/>
                    )
                })}
            </div>
        );
    }
}

export default DropTarget(Types.CARD, freeCellTarget, collect)(FreeCell)