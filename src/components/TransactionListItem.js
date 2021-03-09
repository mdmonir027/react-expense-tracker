import React, { useState, useEffect } from "react";
import * as actionTypes from "./store/actionTypes";

import { DataLayerValue } from "./store/dataLayer";
const TransactionListItem = ({ item }) => {
  const [isNegetive, setNegetive] = useState(true);

  const [{ _ }, dispatch] = DataLayerValue();
  // useEffect
  useEffect(() => {
    setNegetive(Math.sign(item.amount) === -1);
  }, [item]);

  const deleteItem = (id) => {
    dispatch({
      type: actionTypes.WIDTRAW_MONEY,
      payload: { id },
    });
  };

  return (
    <li className="transaction__listItem my-2">
      <div className="card bg-light">
        <div
          className={`card-body  px-3 py-2 border-right ${
            isNegetive ? "border-danger" : "border-success"
          }`}
        >
          <div className="d-flex justify-content-between">
            <div>
              {item.text}
              <span
                className={`font-weight-bold ml-1 ${
                  isNegetive ? "text-danger" : "text-success"
                }`}
              >
                {isNegetive && "-"}${Math.abs(item.amount)}
              </span>
            </div>
            <button
              className="transaction__deleteBtn"
              onClick={() => deleteItem(item.id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TransactionListItem;
