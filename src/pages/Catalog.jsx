import Card from "../components/Card/Card";
import { useState } from "react";
import axios from "axios";

function Catalog({ products, onAddToCart }) {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const [product, setProduct] = useState(() => {
    return {
      title: "",
      price: "",
      quantity: "",
      url: "",
    };
  });

  const changeInputProduct = (event) => {
    event.persist();
    setProduct((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitProduct = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8085/product/create", {
      title: product.title,
      price: product.price,
      quantity: product.quantity,
      url: product.url,
    });
  };

  return (
    <div className="content p-20">
      <div className="ml-30 d-flex align-center justify-between mb-20">
        <h2>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все товары"}</h2>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img onClick={() => setSearchValue("")} className="clear cu-p" src="img/btn-remove.svg" alt="Clear" />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {products
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.url}
              onPlus={(item) => onAddToCart(item)}
            ></Card>
          ))}
      </div>
      <div>
        <input
          type="text"
          id="title"
          name="title"
          value={product.title}
          onChange={changeInputProduct}
          placeholder="Title..."
        />
        <br></br>
        <input
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={changeInputProduct}
          placeholder="Price..."
        />
        <br></br>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={changeInputProduct}
          placeholder="Quantity..."
        />
        <br></br>
        <input type="url" id="url" name="url" value={product.url} onChange={changeInputProduct} placeholder="Url..." />
        <br></br>
        <button onClick={submitProduct}>Add product</button>
      </div>
    </div>
  );
}

export default Catalog;
