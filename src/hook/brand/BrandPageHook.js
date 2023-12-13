import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBrand } from "../../redux/actions/brandAction"

export const useBrandCardContainerHook = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllBrand()
  },[])

  const brand = useSelector(state => state.allBrand.allBrand)
  const loading = useSelector(state => state.allBrand.loading)

  let pageCount = 0
  if (brand.paginationResult) {
    pageCount = brand.paginationResult.numberOfPages
  }

  const onpress = (num) => {
    dispatch(getAllBrand(4, num));
  };


  return [brand, loading, pageCount, onpress];

}
