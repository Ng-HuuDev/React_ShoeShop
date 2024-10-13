import React from "react";

export default function ItemProduct({
  shoe,
  index,
  handleRemoveFromList,
  handleAddToCart,
}) {
  return (
    <div key={index} className="col-3">
      <img className="w-100" src={shoe.image} alt="" />
      {/* <p className=""> {shoe.name}</p> */}
      <button
        onClick={() => {
          handleAddToCart(shoe);
        }}
        className="btn btn-danger"
      >
        ADD
      </button>
      <button
        onClick={() => {
          handleRemoveFromList(shoe.id);
        }}
        className="btn btn-success"
      >
        Delete
      </button>
    </div>
  );
}
