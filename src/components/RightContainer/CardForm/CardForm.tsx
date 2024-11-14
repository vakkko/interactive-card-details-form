import React, { useState } from "react";
import "./cardForm.css";
import {
  handleNameChange,
  handleNumberChange,
  handleDateChange,
} from "../../../utils/cardUtils";

interface cardProps {
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
}

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

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const trimedName: string = handleNameChange(event);
    setCardName(trimedName);
    if (trimedName.length > 0) {
      setEmptyCardName(false);
    }
  };

  const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { formattedNumber, isValid, length } = handleNumberChange(event);
    setCardNumber(formattedNumber);
    setErrorCardNumber(!isValid);

    if (length > 0) {
      setEmptyCardNumber(false);
    }
    if (length === 16) {
      setIncompleteCardNumber(false);
    }
  };

  const onMonthChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { dateValue, length, isValid } = handleDateChange(event);

    setCardMonth(dateValue);
    setErrorCardMonth(!isValid);

    if (length > 0) {
      setEmptyCardMonth(false);
    }
    if (length === 2) {
      setIncompleteCardNumber(false);
    }
  };

  const onYearChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { dateValue, length, isValid } = handleDateChange(event);

    setCardYear(dateValue);
    setErrorCardYear(!isValid);

    if (length > 0) {
      setEmptyCardYear(false);
    }

    if (length === 2) {
      setIncompleteCardYear(false);
    }
  };

  const onCvcChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { dateValue, isValid, length } = handleDateChange(event);

    setCardCvc(dateValue);
    setErrorCardCvc(!isValid);

    if (length > 0) {
      setEmptyCardCvc(false);
    }

    if (length === 2) {
      setIncompleteCardCvc(false);
    }
  };

  const onButtonClick = (): void => {
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
      cardNumber.length === 19 &&
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
        onChange={onNameChange}
        type="text"
        placeholder="e.g. Jane Appleseed"
        maxLength={22}
      />
      {emptyCardName && <p className="error-message">Can’t be blank</p>}
      <br />
      <label>CARD NUMBER</label>
      <input
        onChange={onNumberChange}
        value={cardNumber}
        type="text"
        placeholder="Card Number"
        maxLength={19}
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
            onChange={onMonthChange}
            type="text"
            placeholder="MM"
          />
          <input
            maxLength={2}
            onChange={onYearChange}
            type="text"
            placeholder="YY"
          />
          <input
            maxLength={3}
            onChange={onCvcChange}
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
