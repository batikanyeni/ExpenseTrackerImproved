import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /*   const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  let [formContent, setFormContent] = useState(false);

  const titleChangeHandler = (event) => {
    /*     setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); */
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    /*     setUserInput((prevState) => {
        return { ...prevState, enteredAmount: event.target.value };
      }); */
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    /*     setUserInput((prevState) => {
        return { ...prevState, enteredDate: event.target.value };
      });
    }; */
    setEnteredDate(event.target.value);
  };
  const handleFormState = () => {
    setFormContent((prevState) => {
      return !prevState;
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    handleFormState();
  };

  if (!formContent) {
    return <button onClick={handleFormState}>Add Expense</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={handleFormState}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
