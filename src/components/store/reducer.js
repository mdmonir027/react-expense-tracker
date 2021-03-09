import * as actionsTypes from "./actionTypes";
import shortId from "shortid";

const calculate = (transaction) => {
  const balance = () => {
    let sum = 0;
    for (let i = 0; i < transaction?.length; i++) {
      sum += transaction[i].amount;
    }
    return sum;
  };

  const income = () => {
    let sum = 0;
    for (let i = 0; i < transaction?.length; i++) {
      if (Math.sign(transaction[i].amount) === 1) {
        sum += transaction[i].amount;
      }
    }
    return sum;
  };

  const expense = () => {
    let sum = 0;
    for (let i = 0; i < transaction?.length; i++) {
      if (Math.sign(transaction[i].amount) === -1) {
        sum += Math.abs(transaction[i].amount);
      }
    }
    return sum;
  };

  return { income, expense, balance };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.ADD_MONEY: {
      const { amount, text } = action.payload;
      const transaction = {
        id: shortId.generate(),
        text,
        amount: parseInt(amount),
      };
      const transanctions = [...state.transanctions, transaction];
      let numericData = calculate(transanctions);
      return {
        ...state,
        transanctions,
        balance: numericData.balance,
        income: numericData.income,
        expense: numericData.expense,
      };
    }
    case actionsTypes.WIDTRAW_MONEY: {
      const { id } = action.payload;

      const transanctions = state.transanctions.filter(
        (item) => item.id !== id
      );
      const numericData = calculate(transanctions);

      return {
        ...state,
        transanctions,
        balance: numericData.balance,
        income: numericData.income,
        expense: numericData.expense,
      };
    }
    default:
      return state;
  }
};
