import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyData from "./hooks/useCurrencyData";

function App() {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [defaultFrom, setDefaultFrom] = useState("usd");
  const [defaultTo, setDefaultTo] = useState("inr");
  const [from,setfrom] = useState("");
  const [to,setto] = useState("");
  const onFromCurrencyChng = (data) => {setDefaultFrom(data);setfrom(data)};
  const onToCurrencyChng = (data) => {setDefaultTo(data);setto(data)};
  const currencyData = useCurrencyData(defaultFrom);
  const currOptions = Object.keys(currencyData);
  const onAmountChng = (data) => setAmount(data);
  const convert = () => {
    if(from&&to)setResult(amount * currencyData[defaultTo]);
  };
  
  return (
    <div className="w-screen h-screen flex bg-zinc-700 bg-blend-hard-light" style={{backgroundImage: 'url("https://media.istockphoto.com/id/1345912457/photo/financial-stock-market-graph-selective-focus.jpg?s=612x612&w=0&k=20&c=I-XKq4_2c3rOJPezkG5J6DNbl65OVgmGbX4yrp5T7qQ=")',backgroundRepeat: "no-repeat",backgroundSize:"cover",backgroundPosition:'top'}}>
      <div className="mx-auto mt-5 p-3 backdrop-blur-md h-fit border-4 border-double rounded-lg">
      <InputBox
        lable="From"
        amount={amount}
        onAmountChng={onAmountChng}
        currOptions={currOptions}
        onCurrencyChng={onFromCurrencyChng}
      />
      <InputBox
        lable="To"
        amount={result}
        disabled={true}
        currOptions={currOptions}
        onCurrencyChng={onToCurrencyChng}
        className="font-bold text-lg"
      />
      <div className="flex justify-center"><button
        className="bg-orange-500 p-2 text-white font-medium rounded-md shadow-lg shadow-red-600 hover:translate-y-1  ease-in-out border transition-all"
        onClick={convert}
      >
        Convert {from||to?`${from.toUpperCase()} to ${to.toUpperCase()}`:null}
      </button></div>
      </div>
    </div>
  );
}

export default App;
