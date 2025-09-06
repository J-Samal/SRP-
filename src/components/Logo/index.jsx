import React from 'react'
import "./Logo.css"
import { PiBuildingFill } from 'react-icons/pi'

const Logo = () => {
  return (
    <div className='logo'>
        <div className="icon__container">
            <PiBuildingFill/>

        </div>
        <h1 className="name">Parida &<span> Sons.</span></h1>
      
    </div>
  )
}

export default Logo
