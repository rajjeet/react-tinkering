import React from 'react';
import {connect} from "react-redux";
import Home from "./Home";
import {addMetric} from "../../actions/sampleActions";

export class HomePage extends React.Component {

    handleStart = () => {
        this.props.addMetric(1);
    };

    render() {
        return (
            <Home
                onAdd={this.handleStart}
                metric={this.props.metric}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        metric: state.sample.metric
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        addMetric: (metric) => dispatch(addMetric(metric))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);