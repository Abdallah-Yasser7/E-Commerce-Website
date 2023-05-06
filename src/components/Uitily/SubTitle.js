import React from 'react'
import "../../styles/HomePage.css"

export const SubTitle = ({btntitle, title}) => {
  return (
    <div className='d-flex justify-content-between pt-4'>
      <div className='sub-title'>{title}</div>
      {
        btntitle ? (
          <div className='option'>{btntitle}</div>
        ) : null
      }
    </div>
  )
}
