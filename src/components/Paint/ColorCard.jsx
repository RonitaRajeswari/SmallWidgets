import React from 'react'

function ColorCard({color, handleUtensil}) {
  return (
    <div
    onClick={() => handleUtensil(color, "color")}
    className='color-icon' 
    style={{backgroundColor:`${color}`, width: '20px', height:'20px', margin:"3px", float:"left", position:"relative"}}>
      
    </div>
  )
}

export default ColorCard
