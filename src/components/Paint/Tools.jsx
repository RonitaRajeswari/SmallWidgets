import React from 'react'
import Items from './Items'
import ColorContainer from './ColorContainer'
import Brush from './Brush'

function Tools({handleUtensil}) {


  return (
    <>
    <div className='flex justify-between m-2'>
      <h1>🎨 untitled- Paint</h1>
      <span className='cursor-pointer'>🔴🟡🟢</span>
    </div>
      <div className='flex gap-3 justify-start m-4'>
        <Items handleUtensil={handleUtensil}/>
        <Brush handleUtensil={handleUtensil}/>
        <ColorContainer handleUtensil={handleUtensil}  />
      </div>
    </>
  )
}

export default Tools
