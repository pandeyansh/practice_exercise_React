import React, { useState } from 'react';
const SearchFilter = ({ data }) => {
const [searchTerm, setSearchTerm] = useState('');
const [filteredData, setFilteredData] = useState(data);
const handleSearch = (event) => {
const searchValue = event.target.value;
setSearchTerm(searchValue);
const filteredItems = data.filter((item) =>
item.toLowerCase().includes(searchValue.toLowerCase())
);
setFilteredData(filteredItems);
};
return (
<div>
<input
type="text"
placeholder="Search..."
value={searchTerm}
onChange={handleSearch}
/>
<ul>
{filteredData.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
</div>
);
};
export default SearchFilter;