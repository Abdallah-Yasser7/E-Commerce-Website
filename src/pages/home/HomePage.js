import React from 'react'
import { NavBarLogin } from '../../components/Uitily/NavBarLogin'
import { Slider } from '../../components/Home/Slider'

export const HomePage = () => {
  return (
    <div className='font'>
      <NavBarLogin/>
      <Slider/>
    </div>
  )
}
