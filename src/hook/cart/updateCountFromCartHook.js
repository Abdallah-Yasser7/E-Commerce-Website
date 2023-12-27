import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCount } from "../../redux/actions/CartAction";

export const useUpdateCountFromCartHook = (item) => {
  const dispatch = useDispatch();

  const [countItem, setCountItem] = useState(item.count);

  const onChangeCount = (e) => {
    setCountItem(e.target.value);
  };

  const handelClick = async () => {
    await dispatch(
      updateCount(item._id, {
        count: countItem,
      })
    );
    window.location.reload()
  };

  return [countItem, onChangeCount, handelClick];
};
