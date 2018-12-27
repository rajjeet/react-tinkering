import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';

export class GithubRepoSearchForm extends Component {
    static propTypes = {
        reset: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired
    };

    componentSubmit = () => {
        this.props.reset();
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <form className="repoSearchForm" onSubmit={handleSubmit(this.componentSubmit)}>
                <Field name="orgName" component="input"/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'githubRepoSearch'
})(GithubRepoSearchForm);
