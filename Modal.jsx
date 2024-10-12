import React from "react";

export default function Modal({
  dataCart,
  handleRemoveFromCart,
  handleChangeTotal,
}) {
  let renderProduct = () => {
    return dataCart.map((item) => {
      return (
        // <tr>
        //   <td> {item.id} </td>
        //   <td>
        //     {" "}
        //     <img width={100} src={item.image} alt="" />{" "}
        //   </td>
        //   <td> {item.name} </td>
        //   <td> {item.price} </td>
        //   <td> 0 </td>
        //   <td>
        //     <button className="btn btn-danger"> Delete </button>
        //   </td>
        // </tr>
        <div className="row col-3 m-1 p-1 text-center border  border-2 border-success rounded ">
          <img src={item.image} width={100} alt="" />
          <p className="h6 fw-bold"> {item.name} </p>
          <p>
            <strong>Price</strong>: {item.price}$
          </p>
          <div className="mb-3">
            <button
              onClick={() => {
                handleChangeTotal(item.id, -1);
              }}
              className=" btn btn-danger"
            >
              {" "}
              -{" "}
            </button>
            <span className="fw-bold mx-2">{item.total}</span>
            <button
              onClick={() => {
                handleChangeTotal(item.id, 1);
              }}
              className="btn btn-success"
            >
              {" "}
              +{" "}
            </button>
          </div>
          <button
            onClick={() => {
              handleRemoveFromCart(item.id);
            }}
            className="btn btn-success"
          >
            {" "}
            Delete
          </button>
        </div>
      );
    });
  };
  return (
    <div className="row col-7 ">
      {/* <table className="table">
        <thead>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Total</th>
          <th>Action</th>
        </thead>
        <tbody> {renderProduct()}</tbody>
      </table> */}
      {renderProduct()}
    </div>
  );
}
