import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  updateProduct,
} from "../../redux/actions/productsAction";
import { useEffect, useState } from "react";
import notify from "../useNotifaction";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import { getSubCategory } from "../../redux/actions/subCategoryAction";
import { useParams } from "react-router-dom";

export const useEditProductHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله في الاتصال بالانترنت", "warn");
      return;
    }
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, [dispatch]);

  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);

  const onSelect = (selectedList) => {
    setSelectSubCatID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectSubCatID(selectedList);
  };

  const [options, setOptions] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
    };
    run();
  }, [dispatch, id]);

  const item = useSelector((state) => state.allProduct.oneProduct);

  if (item) {
    if (item.data) {
      var name = item.data.title;
    }
  }

  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState();
  const [priceAfter, setPriceAfter] = useState();
  const [qty, setQty] = useState();
  const [catID, setCatID] = useState(0);
  const [selectSubCatID, setSelectSubCatID] = useState("");
  const [brandID, setBrandID] = useState(0);
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item) {
      if (item.data) {
        setProdName(item.data.title);
        setProdDescription(item.data.description);
        setPriceBefore(item.data.price);
        setQty(item.data.quantity);
        setCatID(item.data.category);
        setBrandID(item.data.brand);
        setColors(item.data.availableColors);
        setImages(item.data.images);
      }
    }
  }, [item]);

  const product = useSelector((state) => state.allProduct.product);

  useEffect(() => {
    if (loading === false) {
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("");
      setPriceAfter("");
      setQty("");
      setCatID(0);
      setSelectSubCatID("");
      setBrandID(0);
      setColors([]);
      setOptions([]);
      setTimeout(() => {
        setLoading(true);
      }, 2000);

      if (product) {
        if (product.status === 201) {
          notify("تم الاضافه بنجاح", "success");
        } else {
          notify("هناك مشكله في عملية الاضافه", "error");
        }
      }
    }
  }, [loading, product]);

  const onSelectCategory = async (e) => {
    setCatID(e.target.value);
    if (e.target.value !== 0) {
      await dispatch(getSubCategory(e.target.value));
    }
  };

  useEffect(() => {
    const run = async () => {
      if (catID !== 0) {
        await dispatch(getSubCategory(catID));
      }
    };
    run();
  }, [catID, dispatch]);

  const subCat = useSelector((state) => state.subCategory.subCategory);

  useEffect(() => {
    if (catID !== 0) {
      if (subCat.data) {
        setOptions(subCat.data);
      }
    }
  }, [subCat, catID]);

  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  const handelClickAddColor = () => {
    setShowColor(!showColor);
  };

  const handelChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };

  const handelOnRemove = (color) => {
    const newArray = colors.filter((item) => item !== color);
    setColors(newArray);
  };

  //to convert base 64 img to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (
      prodName === "" ||
      prodDescription === "" ||
      qty === "" ||
      priceBefore === "" ||
      priceAfter === "" ||
      images.length <= 0 ||
      catID === 0 ||
      brandID === 0
    ) {
      notify("من فضلك اكمل جميع البيانات", "warn");
      return;
    }

    if (priceAfter >= priceBefore) {
      notify("السعر بعد الخصم يجب ان يكون اقل من السعر قبل الخصم", "warn");
      return;
    }

    let imgCover;
    let imageArray = [];

    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[0].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => imageArray.push(val));
      } else {
        imageArray.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("category", catID);
    formData.append("brand", brandID);

    colors.map((item) => formData.append("availableColors", item));
    selectSubCatID.map((item) => formData.append("subcategory", item._id));
    
    setTimeout(() => {
      formData.append("imageCover", imgCover);
      imageArray.map((item) => formData.append("images", item));
    }, 1000);
    
    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateProduct(id, formData));
      setLoading(false);
    }, 1000);
  };

  return [
    category,
    brand,
    onSelect,
    onRemove,
    options,
    onSelectCategory,
    onSelectBrand,
    handelClickAddColor,
    handelChangeComplete,
    handelOnRemove,
    handelSubmit,
    images,
    setImages,
    prodName,
    setProdName,
    prodDescription,
    setProdDescription,
    priceBefore,
    setPriceBefore,
    priceAfter,
    setPriceAfter,
    qty,
    setQty,
    colors,
    showColor,
    catID,
    brandID,
    name,
  ];
};
