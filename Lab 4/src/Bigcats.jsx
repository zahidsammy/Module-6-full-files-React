import React, { useState } from 'react';

const cats = [
  { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
  { name: 'Cougar', latinName: 'Puma concolor' },
  { name: 'Jaguar', latinName: 'Panthera onca' },
  { name: 'Leopard', latinName: 'Panthera pardus' },
  { name: 'Lion', latinName: 'Panthera leo' },
  { name: 'Snow leopard', latinName: 'Panthera uncia' },
  { name: 'Tiger', latinName: 'Panthera tigris' },
];

function BigCats() {
  const [catList, setCatList] = useState([...cats]);

  // Function to sort alphabetically by cat name
  const sortAlphabetically = () => {
    const sortedCats = [...catList].sort((a, b) => a.name.localeCompare(b.name));
    setCatList(sortedCats);
  };

  // Function to reverse the list
  const reverseList = () => {
    const reversedCats = [...catList].reverse();
    setCatList(reversedCats);
  };

  // Function to show 'Panthera' only in family cats
  const filterPanthera = () => {
    const pantheraCats = cats.filter((cat) => cat.latinName.includes('Panthera'));
    setCatList(pantheraCats);
  };

  // Function to reset and show the full list
  const resetList = () => {
    setCatList([...cats]);
  };

  return (
    <div className="BigCats componentBox">
      {/* Buttons for sorting, reversing, filtering, and resetting the list */}
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      <button onClick={reverseList}>Reverse List</button>
      <button onClick={filterPanthera}>Filter Panthera</button>
      <button onClick={resetList}>Reset List</button>

      {/* showing up the cats */}
      <ul>
        {catList.map((cat, index) => (
          <li key={index}>{cat.name} ({cat.latinName})</li>
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
