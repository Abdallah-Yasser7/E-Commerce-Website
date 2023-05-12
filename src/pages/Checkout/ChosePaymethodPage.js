import React from 'react'
import { Container } from 'react-bootstrap'
import { ChosePaymethod } from '../../components/Checkout/ChosePaymethod'
import { SubTitle } from '../../components/Uitily/SubTitle'

export const ChosePaymethodPage = () => {
  return (
    <Container style={{minHeight:"670px"}} className='mt-4'>
      <SubTitle title="اختر طريقة الدفع" />
      <ChosePaymethod />
    </Container>
  )
}
