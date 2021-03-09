import React, { useState, useEffect } from "react";
import TransactionListItem from "./TransactionListItem";
import { DataLayerValue } from "./store/dataLayer";

const TransactionList = () => {
  const [state] = DataLayerValue();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => setTransactions(state.transanctions), [state]);

  return (
    <div className="mt-3">
      <h4 className="mb-1 border-bottom border-primary font-weight-bold pb-2">
        History
      </h4>
      <ul className="m-0 p-0 transaction__list">
        {transactions.map((item) => (
          <TransactionListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
