import React from "react";
import ItemProduct from "./ItemProduct";

export default function ListShoe(props) {
  console.log(props);

  let { dataShoe, handleRemoveFromList, handleAddToCart } = props;
  let renderList = () => {
    // image, name, btn, add
    return dataShoe.map((shoe, index) => {
      return (
        <ItemProduct
          key={index}
          shoe={shoe}
          handleRemoveFromList={handleRemoveFromList}
          handleAddToCart={handleAddToCart}
        />
      );
    });
  };
  return <div className="row col-5">{renderList()}</div>;
}
