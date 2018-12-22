import React from 'react';

const Home = ({onAdd, metric}) => (
    <div>
        <h1>Home Page</h1>
        <br />
        <button onClick={onAdd}>Add</button>

        <h3>Metric: {metric}</h3>
    </div>
);

export default Home;
