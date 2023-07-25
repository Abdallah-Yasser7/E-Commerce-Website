import React from 'react'
import { Slider } from '../../components/Home/Slider'
import { HomeCategory } from '../../components/Home/HomeCategory'
import { ProductCardContainer } from '../../components/products/productCardContainer';
import { DiscountSection } from '../../components/Home/DiscountSection';
import { BrandFeature } from '../../components/Brands/BrandFeature';
import { useViewHomProductHook } from '../../hook/products/viewHomProductHook';

export const HomePage = () => {

  const [items] = useViewHomProductHook()
  if (items)
  console.log(items);
  return (
    <div className='font'>
      <Slider/>
      <HomeCategory/>
      <ProductCardContainer products = {items} title = "الاكثر مبيعأ" btntitle = "المذيد" path="products"/>
      <DiscountSection/>
      <ProductCardContainer products = {items} title = "احدث الازياء" btntitle = "المذيد" path="products"/>
      <BrandFeature btntitle="المذيد" title="اشهر الماركات"/>
    </div>
  )
}
