import "./App.css";
import Cards from "./components/LeftContainer/Cards";
import CardConfirm from "./components/RightContainer/CardConfirm/CardConfirm";
import CardForm from "./components/RightContainer/CardForm/CardForm";
import { useState } from "react";

function App() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [cardMonth, setCardMonth] = useState<string>("");
  const [cardYear, setCardYear] = useState<string>("");
  const [cardCvc, setCardCvc] = useState<string>("");
  const [showCardConfirm, setShowCardConfirm] = useState<boolean>(false);

  return (
    <main>
      <Cards
        cardMonth={cardMonth}
        cardName={cardName}
        cardNumber={cardNumber}
        cardYear={cardYear}
        cardCvc={cardCvc}
      />
      {!showCardConfirm ? (
        <CardForm
          setCardName={setCardName}
          cardName={cardName}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardMonth={cardMonth}
          setCardMonth={setCardMonth}
          cardYear={cardYear}
          setCardYear={setCardYear}
          cardCvc={cardCvc}
          setCardCvc={setCardCvc}
          setShowCardConfirm={setShowCardConfirm}
        />
      ) : (
        <CardConfirm
         setShowCardConfirm={setShowCardConfirm}
         setCardNumber = {setCardNumber}
         setCardName = {setCardName}
         setCardMonth = {setCardMonth}
         setCardYear = {setCardYear}
         setCardCvc = {setCardCvc}
         />
      )}
    </main>
  );
}

export default App;
