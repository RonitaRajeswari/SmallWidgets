import React, { useState }  from 'react'
import Tools from './Tools'
import Container from './Container'

function Paint() {
  const [utensil, setUtensil] = useState({
    tool: "brush",
    weight:"normal",
    color:"black"
  })

  function handleUtensil(updateItem, keyHolder){
    const newUtensil = {...utensil}
    if(updateItem === "eraser"){
      newUtensil["color"] = "white";
      newUtensil["tool"] = "brush";
      setUtensil(newUtensil)
    }
    else{
      newUtensil[keyHolder] = updateItem
      setUtensil(newUtensil)
    }
   
    console.log(newUtensil)
  }

  return (
    <div className='border border-inherit border-5 rounded-lg bg-white/30 w-full'>
      <Tools handleUtensil={handleUtensil}/>
      <Container utensil={utensil}/>
    </div>
  )
}

export default Paint
