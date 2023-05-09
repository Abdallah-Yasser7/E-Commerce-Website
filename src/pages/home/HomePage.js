import React from 'react'
import { Slider } from '../../components/Home/Slider'
import { HomeCategory } from '../../components/Home/HomeCategory'
import { ProductCardContainer } from '../../components/products/productCardContainer';
import { DiscountSection } from '../../components/Home/DiscountSection';
import { BrandFeature } from '../../components/Brands/BrandFeature';

export const HomePage = () => {
  return (
    <div className='font'>
      <Slider/>
      <HomeCategory/>
      <ProductCardContainer title = "الاكثر مبيعأ" btntitle = "المذيد" path="products"/>
      <DiscountSection/>
      <ProductCardContainer title = "احدث الازياء" btntitle = "المذيد" path="products"/>
      <BrandFeature btntitle="المذيد" title="اشهر الماركات"/>
    </div>
  )
}
