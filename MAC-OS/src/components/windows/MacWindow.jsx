import React from 'react'
import { Rnd } from 'react-rnd'
import './macwindow.scss'

const MacWindow = ({children}) => {
  return (
    <Rnd>
      <div className="window">
        <div className="top">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>    
          </div>
          <div className="title">Anupam -esh</div>
        </div>
        <div className="main">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default MacWindow
