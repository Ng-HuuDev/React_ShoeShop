import React from "react";

export default function ListShoe(props) {
  console.log(props);

  let { dataShoe, handleRemoveFromList, handleAddToCart } = props;
  let renderList = (shoe) => {
    // image, name, btn, add
    return dataShoe.map((shoe, index) => {
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
    });
  };
  return <div className="row col-5">{renderList()}</div>;
}
