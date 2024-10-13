import { Button, Popconfirm } from "antd";
import React from "react";

export default function Modal({
  dataCart,
  handleRemoveFromCart,
  handleChangeTotal,
}) {
  let renderProduct = () => {
    return dataCart.map((item) => {
      return (
        // <tr key={item.index} className="fw-bold">
        //   <td> {item.name} </td>
        //   <td>
        //     <img width={100} src={item.image} alt="" />{" "}
        //   </td>
        //   <td> {item.price} </td>
        //   <td>
        //     <button className="btn btn-success"> - </button>
        //     <span className="mx-3">{item.total}</span>
        //     <button
        //       onClick={() => {
        //         handleIncrease(item.id);
        //       }}
        //       className="btn btn-warning"
        //     >
        //       {" "}
        //       +{" "}
        //     </button>
        //   </td>
        //   <td>
        //     <button
        //       onClick={() => {
        //         handleRemoveFromCart(item.id);
        //       }}
        //       className="btn btn-danger"
        //     >
        //       {" "}
        //       Delete{" "}
        //     </button>
        //   </td>
        // </tr>
        <div className="row col-3 m-1 p-1 text-center border  border-2 border-success rounded ">
          <img src={item.image} width={100} alt="" />
          <p className="h6 fw-bold"> {item.name} </p>
          <p>
            <strong>Price</strong>: {item.price}$
          </p>
          <div className="mb-3">
            {
              // neu total la 1 thi render btn xoa
              item.total === 1 ? (
                <Popconfirm
                  title="Xoa san pham nay"
                  description="Ban muon xoa khong"
                  onConfirm={() => {}}
                  okText="Yes"
                >
                  <Button type="primary">-</Button>
                </Popconfirm>
              ) : (
                <button
                  onClick={() => {
                    handleChangeTotal(item.id, -1);
                  }}
                  className="btn btn-success"
                >
                  {" "}
                  -{" "}
                </button>
              )
            }

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
