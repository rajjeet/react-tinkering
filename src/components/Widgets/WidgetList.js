import React from 'react';
import PropTypes from 'prop-types';

const WidgetList = ({widgets}) => (
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {widgets && (
            widgets.map(w =>
                <tr key={w.id}>
                    <td>{w.id}</td>
                    <td>{w.name}</td>
                    <td>{w.description}</td>
                </tr>
            )
        )}
        </tbody>
    </table>
);

WidgetList.propTypes = {
    widgets: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                description: PropTypes.string
            }
        )
    )
};

export default WidgetList;