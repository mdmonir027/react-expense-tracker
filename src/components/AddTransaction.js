import React, { useState } from "react";
import { DataLayerValue } from "./store/dataLayer";
import * as actionTypes from "./store/actionTypes";

const AddTransaction = ({ addItem }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [errors, setErrors] = useState({});

  const [{ _ }, dispatch] = DataLayerValue();

  const handleForm = (event) => {
    event.preventDefault();
    const { isValid, errors } = validattion();
    if (isValid) {
      // addItem(text, amount);

      dispatch({
        type: actionTypes.ADD_MONEY,
        payload: { text, amount },
      });

      setText("");
      setAmount(0);
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  const validattion = () => {
    const errors = {};

    if (!text) {
      errors.text = "Please enter text";
    }

    if (!amount) {
      errors.amount = "Please enter a amount";
    } else if (amount === 0) {
      errors.amount = "Amount must be more / less than 0";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };

  return (
    <>
      <h4 className="border-bottom pb-2 pt-2 font-weight-bold border-primary">
        Add transaction
      </h4>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors?.text && "is-invalid"}`}
            id="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="invalid-feedback">{errors?.text}</div>
        </div>
        <div className="form-group">
          <input
            type="number"
            className={`form-control ${errors?.amount && "is-invalid"}`}
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <small className="form-text text-muted">
            (negative - expense, positive - income)
          </small>
          <div className="invalid-feedback">{errors?.amount}</div>
        </div>

        <button type="submit" className="btn btn-info btn-block">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
