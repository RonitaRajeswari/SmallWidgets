import React from 'react'

function Items({handleUtensil}) {
  return (
    <div className='flex  rounded-lg' style={{ textAlign:"center"}}>
      <button 
        name='brush'
        className='border rounded-lg p-1' 
        onClick={event => handleUtensil(event.target.name, "tool")}
        >✏️
      </button>
      <button 
        name='bucket'
        className='border rounded-lg p-1' 
        onClick={event => handleUtensil(event.target.name, "tool")}
        >🪣
      </button>
      <button 
        name='eraser'
        className='border rounded-lg p-1' 
        onClick={event => handleUtensil(event.target.name, "tool")}
        >❌
      </button>
    </div>
  )
}

export default Items
