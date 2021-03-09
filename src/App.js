import React from "react";
import "./App.css";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div className="app">
      <Header />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
