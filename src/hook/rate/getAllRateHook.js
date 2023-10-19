import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRate } from "../../redux/actions/rateAction"

export const useGetAllRateHook = (id) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllRate(id, 1, 5))
  },[])
  
  const allRate = useSelector(state => state.rateReducer.getAllRate)

  const onPress = async (page) => {
    await dispatch(getAllRate(id, page, 5))
  }

  return [allRate, onPress]
}
