import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SubTitle } from '../../components/Uitily/SubTitle'
import { CartItem } from '../../components/Cart/CartItem'
import { CartPayment } from '../../components/Cart/CartPayment'
import { useGetAllUserCartHook } from '../../hook/cart/GetAllUserCartHook'
import { ToastContainer } from 'react-toastify'

export const CartPage = () => {
  const [ , itemsCart, totalPrice, nameCoupon, totalPriceAfterDiscount ] = useGetAllUserCartHook()

  return (
    <Container style={{minHeight:"670px"}} className=''>
      <SubTitle title="عربة التسوق"/>
      <Row className='d-flex justify-content-center'>
        <Col lg="9" xs="12" md="8">
        {
          itemsCart && itemsCart.length >= 1 ? (
            itemsCart.map((item,index) => {
              return <CartItem key={index} item={item}/>
            })
          ) : <h4>عربة التسوق فارغه</h4>
        }
        </Col>
        <Col lg="3" xs="12" md="4">
          <CartPayment totalPrice={totalPrice} nameCoupon={nameCoupon} totalPriceAfterDiscount={totalPriceAfterDiscount} />
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  )
}
