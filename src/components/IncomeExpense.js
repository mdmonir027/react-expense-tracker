import React, { useState, useEffect } from "react";

import { DataLayerValue } from "./store/dataLayer";

const IncomeExpense = () => {
  const [state] = DataLayerValue();

  const [isIncome, setIsIncome] = useState(true);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  //  useEffects
  useEffect(() => setBalance(state.balance), [state]);
  useEffect(() => setIncome(state.income), [state]);
  useEffect(() => setExpense(state.expense), [state]);

  useEffect(
    () => setIsIncome(() => (Math.sign(balance) === -1 ? true : false)),
    [balance]
  );
  return (
    <>
      <h5 className="text-dark text-uppercase m-0 font-weight-bold">
        Your Balance
      </h5>
      <h2 className={`font-weight-bold ${isIncome && "text-danger"} `}>
        ${balance}
      </h2>

      <div className="d-flex justify-content-around border pt-3 px-2 mt-4 text-center">
        <div>
          <h5 className="text-uppercase">Income</h5>
          <p className="text-success">${income}</p>
        </div>
        <div>
          <h5 className="text-uppercase">Expense</h5>
          <p className="text-danger">${expense}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpense;
