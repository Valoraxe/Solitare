import React from "react";
import FreeCell from "./freeCell";
import Foundation from "./foundation";
import { connect } from 'react-redux';

export class TopTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const PROPS = this.props;
        return (
            <div className='table'>
                <FreeCell number={1} cards={PROPS.freeCell1}/>
                <FreeCell number={2} cards={PROPS.freeCell2}/>
                <FreeCell number={3} cards={PROPS.freeCell3}/>
                <FreeCell number={4} cards={PROPS.freeCell4}/>
                
                <Foundation suit="Hearts" cards={PROPS.hearts}/>
                <Foundation suit="Spades" cards={PROPS.spades}/>
                <Foundation suit="Diamonds" cards={PROPS.diamonds}/>
                <Foundation suit="Clubs" cards={PROPS.clubs}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    freeCell1: state.tables.freeCell1,
    freeCell2: state.tables.freeCell2,
    freeCell3: state.tables.freeCell3,
    freeCell4: state.tables.freeCell4,
    hearts: state.tables.hearts,
    spades: state.tables.spades,
    diamonds: state.tables.diamonds,
    clubs: state.tables.clubs,
})

export default connect(mapStateToProps)(TopTable)