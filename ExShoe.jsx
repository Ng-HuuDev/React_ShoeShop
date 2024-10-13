import React, { useState } from "react";
import { shoeArr } from "./dataShoe";
import ListShoe from "./ListShoe";
import Modal from "./Modal";

export default function ExShoe() {
  console.log(shoeArr);
  const [listShoe, setListShoe] = useState(shoeArr);
  const [cart, setCart] = useState([]);
  // state o dau thi setState o do
  // xoa san pham
  let handleRemoveFromList = (idShoe) => {
    console.log("🚀 ~ handleRemoveFromList ~ idShoe:", idShoe);

    let newListShoe = listShoe.filter((shoe) => {
      return shoe.id !== idShoe;
    });
    // setState = render lai layout
    setListShoe(newListShoe);
  };

  // them sp
  let handleAddToCart = (shoe) => {
    // let data = { ...shoe, total: 1 };
    // let newCart = [...cart, data];
    // setCart(newCart);
    // su dung findIndex xem sp co trong gio hang chua
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      // ko tim thay
      // th1: chua co trong gio hang => them vao gio hang
      let data = { ...shoe, total: 1 };
      cloneCart.push(data);
    } else {
      // th2: da co trong gio hang => tang so luong
      cloneCart[index].total++;
    }
    setCart(cloneCart);
  };

  // xoa sp da chon
  let handleRemoveFromCart = (idShoe) => {
    let newCart = cart.filter((shoe) => shoe.id !== idShoe);
    setCart(newCart);
  };

  // tang / giam san pham
  let handleChangeTotal = (idShoe, option) => {
    // option: +1 or -1 / tang / giam so luong
    let cloneCart = [...cart];
    // tim vi tri cua sp
    let index = cloneCart.findIndex((item) => item.id == idShoe);
    // cap nhat lai value cua objdect vua tim thay
    cloneCart[index].total = cloneCart[index].total + option;
    // kiem tra neu so luong = 0 thi xoa khoi gio  hang
    if (cloneCart[index].total == 0) {
      cloneCart.splice(index, 1);
    }
    // setState => render lai giao dien
    setCart(cloneCart);
  };
  return (
    <div className="row align-items-start">
      <ListShoe
        dataShoe={listShoe}
        handleRemoveFromList={handleRemoveFromList}
        handleAddToCart={handleAddToCart}
      />
      <Modal
        dataCart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleChangeTotal={handleChangeTotal}
      />
    </div>
  );
}
