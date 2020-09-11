import React from 'react'
import {styled} from 'linaria/react'

import './loader.css'

export const Loader = () => {
  return (
    <div id="cube-loader">
      <div className="caption">
        <div className="cube-loader">
          <div className="cube loader-1"></div>
          <div className="cube loader-2"></div>
          <div className="cube loader-4"></div>
          <div className="cube loader-3"></div>
        </div>
      </div>
    </div>
  )
}
