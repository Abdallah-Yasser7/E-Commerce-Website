import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBrand } from './../../redux/actions/brandAction';

const useBrandFeatureHook = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand())
  },[dispatch])

  const brand = useSelector(state => state.allBrand.brand)
  const loading = useSelector(state => state.allBrand.loading)

  return [brand, loading];

}

export default useBrandFeatureHook;