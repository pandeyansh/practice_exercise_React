import React, { useContext } from 'react';
import { AppContext } from './AppContext';
function ComponentB() {
    const sharedValue = useContext(AppContext);
    return (
    <div>
    <h2>Component B</h2>
    <p>{sharedValue}</p>
    </div>
);
};
export default ComponentB;