import React from "react";
import { connect } from 'react-redux';
import Tableau from "./tableau";

export class BottomTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const PROPS = this.props;
        return (
            <div className='table'>
                <Tableau cards={PROPS.tableau1}/>
                <Tableau cards={PROPS.tableau2}/>
                <Tableau cards={PROPS.tableau3}/>
                <Tableau cards={PROPS.tableau4}/>
                <Tableau cards={PROPS.tableau5}/>
                <Tableau cards={PROPS.tableau6}/>
                <Tableau cards={PROPS.tableau7}/>
                <Tableau cards={PROPS.tableau8}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tableau1: state.tables.tableau1,
    tableau2: state.tables.tableau2,
    tableau3: state.tables.tableau3,
    tableau4: state.tables.tableau4,
    tableau5: state.tables.tableau5,
    tableau6: state.tables.tableau6,
    tableau7: state.tables.tableau7,
    tableau8: state.tables.tableau8
})

export default connect(mapStateToProps)(BottomTable)