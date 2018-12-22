import React from 'react';
import {connect} from "react-redux";
import Home from "../components/Home";

class HomePage extends React.Component {
    render() {
        return (
            <Home />
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(HomePage);