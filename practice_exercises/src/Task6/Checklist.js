import React, { useState } from 'react';
function Checklist() {
const [checkedItems, setCheckedItems] = useState({});
const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems(prevState => ({
    ...prevState,
    [itemName]: isChecked
    }));
};
    return (
    <div>
    <h1>Checklist</h1>
    <label>
        <input
        type="checkbox"
        name="item1"
        checked={checkedItems.item1 || false}
        onChange={handleCheckboxChange}
        />
        Item 1
    </label>
    <br />
    <label>
        <input
        type="checkbox"
        name="item2"
        checked={checkedItems.item2 || false}
        onChange={handleCheckboxChange}
        />
        Item 2
    </label>
    <br />
    <label>
        <input
        type="checkbox"
        name="item3"
        checked={checkedItems.item3 || false}
        onChange={handleCheckboxChange}
        />
        Item 3
    </label>
    <br />
    <h2>Selected Items:</h2>
    <ul>
        {Object.keys(checkedItems).map(itemName => (
        checkedItems[itemName] && <li key={itemName}>{itemName}</li>
        ))}
        </ul>
    </div>
    );
};
export default Checklist;