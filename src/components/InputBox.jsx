import { useRef } from "react";

function InputBox({
  lable = "from",
  amount = 0,
  onAmountChng,
  disabled = false,
  currOptions = [],
  defaultOption = "",
  onCurrencyChng,
  className,
}) {
  const selectCurr = useRef(null);

  return (
    <>
      <div className=" max-[430px]:w-[280px] max-[500px]:w-[380px]   w-[500px] bg-yellow-100 flex justify-between p-3 rounded-lg border-2 mb-4 shadow-md shadow-orange-600">
        <div className="">
          <label htmlFor="amount" className="font-semibold">
            {lable}
          </label>
          <br />
          <textarea
            id="amount"
            className={`max-[430px]:max-w-[100px] max-[430px]:text-base bg-transparent outline-none ${className}`}
            type="number"
            value={amount}
            disabled={disabled}
            onChange={(e) => onAmountChng(Number(e.target.value))}
          ></textarea>
        </div>
        <div>
          <lable htmlFor="currency" className="font-semibold">
            Currency
          </lable>
          <br />
          <select
            id="currency"
            className="bg-transparent border rounded-md font-semibold uppercase"
            ref={selectCurr}
            onChange={(e) => onCurrencyChng(e.target.value)}
            value={defaultOption}
          >
            {currOptions.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
