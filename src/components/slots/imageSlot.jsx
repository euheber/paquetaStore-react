import React, { Component } from "react"

function imageSlot({children, sex, position, filter, order}){ 
    return  (
        <div className={`img relative ${order}`}>
            {children}
          <div className={`filter from-oranger from-5% to-50% z-1 w-full h-full z-1 absolute top-0 ${filter}`}></div>
  
          <p className={`absolute bottom-20 text-2xl text-white uppercase font-normal w-28 ${position}`}>
            {sex}
          </p>
        </div>
      )
}

export default imageSlot
