import "./cardConfirm.css";

interface cardProps {
  setShowCardConfirm: (value: boolean) => void;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  setCardMonth: React.Dispatch<React.SetStateAction<string>>;
  setCardYear: React.Dispatch<React.SetStateAction<string>>;
  setCardCvc: React.Dispatch<React.SetStateAction<string>>;
}

export default function CardConfirm({
  setShowCardConfirm,
  setCardNumber,
  setCardName,
  setCardMonth,
  setCardYear,
  setCardCvc,
}: cardProps) {
  const onContinueClick = () => {
    setShowCardConfirm(false);
    setCardName("");
    setCardMonth("");
    setCardCvc("");
    setCardYear("");
    setCardNumber("");
  };

  return (
    <div className="confirm-container">
      <img src="./images/icon-complete.svg" alt="complete logo" />
      <div>
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
      </div>
      <button onClick={onContinueClick} className="btn-continue">
        Continue
      </button>
    </div>
  );
}
