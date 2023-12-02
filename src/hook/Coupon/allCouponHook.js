import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCoupon } from "../../redux/actions/couponAction"

export const useAllCouponHook = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCoupon(5))
    }
    run()
  },[])

  const res = useSelector(state => state.couponReducer.allCoupon)
  console.log(res);

  let allCoupons = []
  if (res) {
    if (res.data) {
      allCoupons = res.data
    }
  }

  let allCouponResults = []
  if (res) {
      allCouponResults = res
  }

  let pageCount = 0
  if (res) {
    if (res.paginationResult) {
      if (res.paginationResult.numberOfPages)
      pageCount = res.paginationResult.numberOfPages
    }
  }

  const onpress = async (page) => {
    await dispatch(getAllCoupon(5, page))
  }

  return [allCoupons, pageCount, onpress, allCouponResults]
}

