import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import ComponentB from './ComponentB';
function ComponentA() {
    const sharedValue = useContext(AppContext);
    return (
    <div>
    <h2>Component A</h2>
    <p>{sharedValue}</p>
    <ComponentB></ComponentB>
    </div>
);
};
export default ComponentA;