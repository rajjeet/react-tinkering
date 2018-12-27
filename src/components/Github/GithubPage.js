import React from 'react';
import {connect} from "react-redux";
import GithubRepoSearch from "./GithubRepoSearch";
import PropTypes from 'prop-types';

export class GithubPage extends React.Component {

    render() {
        return (
            <GithubRepoSearch />
        );
    }
}

GithubPage.propTypes = {
    mySubmit: PropTypes.func
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubPage);