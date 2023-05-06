import React from 'react'
import { NavBarLogin } from '../../components/Uitily/NavBarLogin'
import { Slider } from '../../components/Home/Slider'
import { HomeCategory } from '../../components/Home/HomeCategory'

export const HomePage = () => {
  return (
    <div className='font'>
      <NavBarLogin/>
      <Slider/>
      <HomeCategory/>
    </div>
  )
}
