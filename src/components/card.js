import React from "react";
import { DragSource } from "react-dnd";

const Types = {
    CARD: 'card',
}
  
const cardSource = {
    beginDrag(props) {
        return props
    },
  
    endDrag(props) {
        return props
    },
}
  
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

class CardElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { connectDragSource } = this.props
        const PROPS = this.props;
        return connectDragSource(
            <div className="card">
                {PROPS.value} {PROPS.suit}
            </div>
        );
    }
}

export default DragSource(Types.CARD, cardSource, collect)(CardElement);