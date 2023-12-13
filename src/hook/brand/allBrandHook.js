import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBrand } from "../../redux/actions/brandAction"

export const useAllBrandHook = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllBrand(8))
    }
    run()
  },[])

  const res = useSelector(state => state.allBrand.allBrand)

  let allBrand = []
  if (res) {
    if (res.data) {
      allBrand = res.data
    }
  }

  let allBrandResults = []
  if (res) {
    allBrandResults = res
  }

  let pageCount = 0
  if (res) {
    if (res.paginationResult) {
      if (res.paginationResult.numberOfPages)
      pageCount = res.paginationResult.numberOfPages
    }
  }

  const onpress = async (page) => {
    await dispatch(getAllBrand(8, page))
  }

  return [allBrand, pageCount, onpress, allBrandResults]
}

