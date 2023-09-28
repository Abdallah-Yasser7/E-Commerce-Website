import { useEffect, useState } from 'react'
import { useSearchHomProductHook } from '../products/viewSearchProductHook'
import { useNavigate } from 'react-router-dom'

export const useNavbarSearchHook = () => {
  const [searchWord, setSearchWord] = useState("")
  const [,,, getProductFromSearch] = useSearchHomProductHook()

  const navigate = useNavigate()

  const onChangeSearch = (e) => {
    setSearchWord(e.target.value)
    localStorage.setItem("searchWord", e.target.value)
    navigate("/products")
  }

  useEffect(() => {
    setTimeout(() => {
      getProductFromSearch();
    }, 1000);
  },[searchWord])

  return [onChangeSearch]
}
