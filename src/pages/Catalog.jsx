import Card from "../components/Card/Card";
import { useState } from "react";

function Catalog({ products, onAddToCart }) {
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
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
              imgUrl={item.imgUrl}
              onPlus={(item) => onAddToCart(item)}
            ></Card>
          ))}
      </div>
    </div>
  );
}

export default Catalog;
