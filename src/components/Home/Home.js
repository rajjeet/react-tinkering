import React from 'react';
import Button from "../Shared/Button";

const Home = ({onAdd, metric}) => (
    <div>
        <h1>Home Page</h1>
        <br />
        <button className="addMetricBtn" onClick={onAdd}>Add</button>

        <h3 className="metric">Metric: {metric}</h3>
        <Button text="SUBSCRIBE TO BASIC"/>
    </div>
);

export default Home;
