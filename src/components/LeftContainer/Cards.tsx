import "./cards.css";
type CardsProps = {
  cardNumber: string;
  cardName: string;
  cardMonth: string;
  cardYear: string;
  cardCvc: string;
};
export default function Cards({
  cardNumber,
  cardName,
  cardMonth,
  cardYear,
  cardCvc,
}: CardsProps) {
  const stringNumb = cardNumber.toString();
  let cardNumbers: string = "";
  for (let i = 0; i < stringNumb.length; i = i + 4) {
    cardNumbers = cardNumbers + stringNumb.slice(i, i + 4) + " ";
  }

  return (
    <div className="cards-container">
      <div className="front-card-container">
        <img
          className="circles"
          src="./images/card-logo.svg"
          alt="two circle"
        />
        <img src="./images/bg-card-front.png" alt="Front side of card" />
        <div className="personal-card-details">
          <p>{cardNumber ? cardNumbers : "0000 0000 0000 0000"}</p>
          <div>
            <p>{cardName ? cardName : "JANE APPLESEED"}</p>
            <div className="month-year">
              <span>{cardMonth ? cardMonth + "/" : "00/"}</span>
              <span>{cardYear ? cardYear : "00"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="back-card-container">
        <img
          className="back-card"
          src="./images/bg-card-back.png"
          alt="Back side of card"
        />
        <span className="cvc">{cardCvc ? cardCvc : "000"}</span>
      </div>
    </div>
  );
}
