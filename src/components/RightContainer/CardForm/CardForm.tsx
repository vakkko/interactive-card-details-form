import React, { useState } from "react";
import "./cardForm.css";
type cardProps = {
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  cardName: string;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  cardMonth: string;
  setCardMonth: React.Dispatch<React.SetStateAction<string>>;
  cardYear: string;
  setCardYear: React.Dispatch<React.SetStateAction<string>>;
  cardCvc: string;
  setCardCvc: React.Dispatch<React.SetStateAction<string>>;
  setShowCardConfirm: (value: boolean) => void;
};

export default function CardForm({
  cardNumber,
  setCardNumber,
  cardName,
  setCardName,
  cardMonth,
  setCardMonth,
  cardYear,
  setCardYear,
  cardCvc,
  setCardCvc,
  setShowCardConfirm,
}: cardProps) {
  const [errorCardNumber, setErrorCardNumber] = useState<boolean>(false);
  const [errorCardMonth, setErrorCardMonth] = useState<boolean>(false);
  const [errorCardYear, setErrorCardYear] = useState<boolean>(false);
  const [errorCardCvc, setErrorCardCvc] = useState<boolean>(false);

  const [emptyCardName, setEmptyCardName] = useState<boolean>(false);
  const [emptyCardNumber, setEmptyCardNumber] = useState<boolean>(false);
  const [emptyCardMonth, setEmptyCardMonth] = useState<boolean>(false);
  const [emptyCardYear, setEmptyCardYear] = useState<boolean>(false);
  const [emptyCardCvc, setEmptyCardCvc] = useState<boolean>(false);

  const [incompleteCardNumber, setIncompleteCardNumber] =
    useState<boolean>(false);
  const [incompleteCardMonth, setIncompleteCardMonth] =
    useState<boolean>(false);
  const [incompleteCardYear, setIncompleteCardYear] = useState<boolean>(false);
  const [incompleteCardCvc, setIncompleteCardCvc] = useState<boolean>(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimedName = event.target.value.trim();
    setCardName(trimedName);

    if (trimedName.length > 0) {
      setEmptyCardName(false);
    }
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numbValue = event.target.value.trim();

    if (!isNaN(Number(numbValue))) {
      setCardNumber(numbValue);
      setErrorCardNumber(false);
    } else {
      setCardNumber(numbValue);
      setErrorCardNumber(true);
    }

    if (numbValue.length > 0) {
      setEmptyCardNumber(false);
    }
    if (numbValue.length === 16) {
      setIncompleteCardNumber(false);
    }
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const monthValue = event.target.value.trim();

    if (!isNaN(Number(monthValue))) {
      setCardMonth(monthValue);
      setErrorCardMonth(false);
    } else {
      setCardMonth(monthValue);
      setErrorCardMonth(true);
    }

    if (monthValue.length > 0) {
      setEmptyCardMonth(false);
    }
    if (monthValue.length === 2) {
      setIncompleteCardNumber(false);
    }
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const yearValue = event.target.value.trim();

    if (!isNaN(Number(yearValue))) {
      setCardYear(yearValue);
      setErrorCardYear(false);
    } else {
      setCardYear(yearValue);
      setErrorCardYear(true);
    }

    if (yearValue.length > 0) {
      setEmptyCardYear(false);
    }

    if (yearValue.length === 2) {
      setIncompleteCardYear(false);
    }
  };

  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cvcValue = event.target.value.trim();

    if (!isNaN(Number(cvcValue))) {
      setCardCvc(cvcValue);
      setErrorCardCvc(false);
    } else {
      setCardCvc(cvcValue);
      setErrorCardCvc(true);
    }

    if (cvcValue.length > 0) {
      setEmptyCardCvc(false);
    }

    if (cvcValue.length === 3) {
      setIncompleteCardCvc(false);
    }
  };

  const onButtonClick = () => {
    if (cardName.length === 0) {
      setEmptyCardName(true);
    }

    if (cardNumber.length === 0) {
      setEmptyCardNumber(true);
    }
    if (cardMonth.length === 0) {
      setEmptyCardMonth(true);
    }
    if (cardCvc.length === 0) {
      setEmptyCardCvc(true);
    }
    if (cardYear.length === 0) {
      setEmptyCardYear(true);
    }

    if (cardNumber.length < 16 && cardNumber.length > 0) {
      setIncompleteCardNumber(true);
    }

    if (cardMonth.length < 2 && cardMonth.length > 0) {
      setIncompleteCardMonth(true);
    }

    if (cardYear.length < 2 && cardYear.length > 0) {
      setIncompleteCardYear(true);
    }

    if (cardCvc.length < 3 && cardCvc.length > 0) {
      setIncompleteCardCvc(true);
    }

    if (
      cardName.length > 0 &&
      cardNumber.length === 16 &&
      cardMonth.length === 2 &&
      cardCvc.length === 3 &&
      cardYear.length === 2
    ) {
      setShowCardConfirm(true);
    }
  };

  return (
    <div className="personal-details">
      <label>CARDHOLDER NAME</label>
      <input
        onChange={handleNameChange}
        type="text"
        placeholder="e.g. Jane Appleseed"
      />
      {emptyCardName && <p className="error-message">Can’t be blank</p>}
      <br />
      <label>CARD NUMBER</label>
      <input
        onChange={handleNumberChange}
        value={cardNumber}
        type="text"
        placeholder="Card Number"
        maxLength={16}
      />
      {errorCardNumber && (
        <p className="error-message ">Wrong format, numbers only</p>
      )}
      {emptyCardNumber && <p className="error-message">Can’t be blank</p>}
      {incompleteCardNumber && (
        <p className="error-message">
          Incomplete, Card number must contain 16 numbers, you entered{" "}
          {cardNumber.length}
        </p>
      )}
      <br />
      <div>
        <div className="month-year-cvc-labels">
          <label>EXP. DATE (MM/YY)</label>
          <label>CVC</label>
        </div>
        <div className="month-year-cvc-inputs">
          <input
            maxLength={2}
            onChange={handleMonthChange}
            type="text"
            placeholder="MM"
          />
          <input
            maxLength={2}
            onChange={handleYearChange}
            type="text"
            placeholder="YY"
          />
          <input
            maxLength={3}
            onChange={handleCvcChange}
            type="text"
            placeholder="CVC"
          />
        </div>
        <div className="date-cvc-errors">
          {(errorCardMonth || errorCardYear) && (
            <p className="error-message ">Wrong format, numbers only</p>
          )}
          {(emptyCardMonth || emptyCardYear) && (
            <p className="error-message">Can’t be blank</p>
          )}
          {(incompleteCardMonth || incompleteCardYear) && (
            <p className="error-message">Incomplete</p>
          )}
          {errorCardCvc && (
            <p className="error-message ">Wrong format, numbers only</p>
          )}
          {emptyCardCvc && <p className="error-message">Can’t be blank</p>}
          {incompleteCardCvc && (
            <p className="error-message">Incomplete, Cvc contains 3 numbers</p>
          )}
        </div>
      </div>
      <button onClick={onButtonClick} className="btn-confirm">
        Confirm
      </button>
    </div>
  );
}
