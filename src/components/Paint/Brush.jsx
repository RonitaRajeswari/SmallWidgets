import React from 'react';

function Brush({ handleUtensil }) {
  // Function to handle the weight change
  const handleWeightChange = (event) => {
    let weight;
    switch (event.target.value) {
      case 'Thin':
        weight = 2; // Set brush weight for thin option
        break;
      case 'Normal':
        weight = 5; // Set brush weight for normal option
        break;
      case 'Thick':
        weight = 8; // Set brush weight for thick option
        break;
      default:
        weight = 5; // Default to normal weight
    }

    handleUtensil(weight, 'weight'); // Update the brush weight in parent component
  };

  return (
    <div>
      <select 
        onChange={handleWeightChange} // Call the handler function on selection change
        id='brush-details' 
        className='bg-white/30 border-white rounded-lg p-1 cursor-pointer'
      >
        <option>Thin</option>
        <option>Normal</option>
        <option>Thick</option>
      </select>
    </div>
  );
}

export default Brush;
