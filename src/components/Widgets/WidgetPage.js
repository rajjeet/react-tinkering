import React from 'react';
import {connect} from "react-redux";
import WidgetList from "./WidgetList";
import PropTypes from 'prop-types';
import * as widgetActions from '../../actions/widgetActions';

export class WidgetPage extends React.Component {

    static propTypes = {
        loadWidgets: PropTypes.func.isRequired,
        widgets: PropTypes.PropTypes.arrayOf(
            PropTypes.shape(
                {
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    description: PropTypes.string
                }
            )
        ).isRequired
    };

    static defaultProps = {
        loadWidgets: () => {
        },
        widgets: []
    };

    componentDidMount() {
        this.props.loadWidgets();
    }

    render() {
        return (
            <WidgetList widgets={this.props.widgets}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        widgets: state.widget.widgets
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadWidgets: () => dispatch(widgetActions.loadWidgets())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetPage);