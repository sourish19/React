import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";
import Swap from "./components/Swap.jsx";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  const handleSwap = ()=>{
    setConvertedAmount(amount)
    setAmount(convertedAmount)
    setFrom(to)
    setTo(from)
  }

  return (
    <div className="flex h-screen w-full justify-center items-center bg-slate-950 text-neutral-50 ">
      <div className="flex flex-col gap-y-5 items-center py-10 h-8/12 w-1/2 bg-slate-800 rounded-2xl relative">
        <h1 className="w-full text-center text-3xl">Currency Converter</h1>
        <Input
          label={"From"}
          currencies={Object.keys(currencyInfo)}
          amount={amount}
          value={from}
          changeValue={setFrom}
          changeAmount={setAmount}
        />
        <Input
          label={"To"}
          currencies={Object.keys(currencyInfo)}
          amount={convertedAmount}
          value={to}
          changeValue={setTo}
          disabled={true}
        />
        <Button handleClick={convert} from={from} to={to} />
      <Swap handleSwap={handleSwap} />
      </div>
    </div>
  );
};

export default App;
