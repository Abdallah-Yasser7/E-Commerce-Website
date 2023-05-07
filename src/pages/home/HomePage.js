import React from 'react'
import { NavBarLogin } from '../../components/Uitily/NavBarLogin'
import { Slider } from '../../components/Home/Slider'
import { HomeCategory } from '../../components/Home/HomeCategory'
import { ProductCardContainer } from '../../components/products/productCardContainer';
import { DiscountSection } from '../../components/Home/DiscountSection';
import { BrandFeature } from '../../components/Brands/BrandFeature';
import { Footer } from '../../components/Uitily/Footer';

export const HomePage = () => {
  return (
    <div className='font'>
      <NavBarLogin/>
      <Slider/>
      <HomeCategory/>
      <ProductCardContainer title = "الاكثر مبيعأ" btntitle = "المذيد"/>
      <DiscountSection/>
      <ProductCardContainer title = "احدث الازياء" btntitle = "المذيد"/>
      <BrandFeature btntitle="المذيد" title="اشهر الماركات"/>
      <Footer/>
    </div>
  )
}
