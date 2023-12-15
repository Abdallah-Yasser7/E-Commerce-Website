import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUserAddress } from "../../redux/actions/userAddressAction"

export const useUserAllAddressHook = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      setLoading(true)
      await dispatch(getAllUserAddress())
      setLoading(false)
    }
    run()
  },[])

  const res = useSelector(state => state.userAddressReducer.allUserAddress)

  let userAddresses = [];
  if (res) {
    if (res.data) {
      userAddresses = res.data;
    }
  }

  return [userAddresses]
}
