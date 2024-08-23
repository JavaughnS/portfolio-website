import React from 'react'

function UnderConstruction() {
  return (
    <div className='under__construction'>
        <h2>Coming Soon!</h2>
      <video loop="loop" width="480" height="100%" autoplay="autoplay">
        <source src="media/under-construction.mp4" type="video/mp4" />
        Revisit this in a little bit :)
      </video>
    </div>
  )
}

export default UnderConstruction
