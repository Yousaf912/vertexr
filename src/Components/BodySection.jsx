import React from 'react'
import Menu from './Menu/Menu'

export default function BodySection() {
  return (
    <div className='position-relative'>
        <div className='col-2 menu position-fixed '>
            <Menu/>
        </div>
        <div className="reports">

        </div>
    </div>
  )
}


