const Input = ({
  label,
  currencies,
  amount,
  changeAmount,
  changeValue,
  value,
  disabled = false,
}) => {
  return (
    <div className="bg-red-100 text-slate-700 h-1/4 w-11/12 gap-5 mx-auto px-3 py-2 flex justify-center items-center">
      <div className="flex flex-col flex-1">
        <div className="">
          <span>{label}</span>
        </div>
        <div className="py-2">
          <input
            type="number"
            onChange={(e) => {
              changeAmount && changeAmount(Number(e.target.value));
            }}
            value={amount}
            disabled={disabled}
            className="outline-none w-full text-neutral-950"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span>Currency Type</span>
        </div>
        <div>
          <select
            name="Currency"
            value={value}
            onChange={(e) => changeValue && changeValue(e.target.value)}
          >
            {currencies?.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;
