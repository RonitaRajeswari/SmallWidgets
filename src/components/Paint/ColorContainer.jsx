import React from 'react'
import ColorCard from './ColorCard';

const colorList = ["red", "blue", "green","yellow", "pink", "black", "white", "brown", "purple", "grey", "orange"];

//     {
//   return( 
//      <div 
//         onClick={()=> { console.log(color)}}
//         key={color}
//         style={{backgroundColor:`${color}`, width: '20px', height:'20px', margin:"3px", float:"left", position:"relative"}}>
//     </div>
//     )
// })
function ColorContainer({utensil, handleUtensil}) {
    const colorGrid = colorList.map((color) =>
    <ColorCard
    handleUtensil={handleUtensil}
     key={color} color={color}/>)

  return (
    <div className='color-grid cursor-pointer'>
     {colorGrid}
    </div>
  )
}

export default ColorContainer
