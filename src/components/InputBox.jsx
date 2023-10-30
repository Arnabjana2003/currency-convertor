import { useState } from "react";

function InputBox({
  lable = "from",
  amount = 0,
  onAmountChng,
  disabled = false,
  currOptions,
  onCurrencyChng,
  className,
}) {
  
  const [drop,setDrop] = useState(false)
  const [dropValue,setDropValue] = useState("Select");

  
  const [options,setOptions] = useState([...currOptions]);
 
  
  const searchCurrency = (val)=>{
    const filter = currOptions.filter((item)=>item.startsWith(val));
    setOptions(filter)
    
  }


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
          <label htmlFor="currency" className="font-semibold">
            Currency
          </label>
          <br />
          {/* <select
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
          </select> */}
          <div className="relative">
            <div className="flex relative" onClick={()=>{setDrop(prev=>!prev)
            }}>
              <div className="w-[100px] border pl-2">{dropValue}</div>
              <img src="https://w7.pngwing.com/pngs/551/108/png-transparent-arrow-illustration-arrow-icon-right-arrow-angle-web-design-internet-thumbnail.png" className={`absolute right-3 top-1 w-[20px] opacity-80 transition-all ease-in ${drop?"rotate-[270deg]":"rotate-90"}`}/>
            </div>
            <div className={`absolute top-8 right-2 z-10 bg-slate-400 rounded-lg overflow-hidden ${drop?"block":"hidden"}`}>
              <div className="rounded-md bg-white p-1 border flex">
                <input type="text" placeholder="Serach" className="px-2 outline-none min-w-[150px]" onKeyUp={(e)=>searchCurrency(e.target.value.toLowerCase())}></input>
                <img className="w-[20px] mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlRbX-oPdQyUnWQLI23pCLC2UqElNtHZf25jl24AIMA&s" />
              </div>
              <div className="h-[200px] overflow-auto mt-3 px-2">
                {options.length==0?"No currency found,Search a correct currency name":""}
                <ul>
                {options.map((item)=>(<li key={item} className="px-3 py-1 hover:bg-slate-300 rounded-md" onClick={(e)=>{
                  setDropValue(e.target.innerText)
                  setDrop(prev=>!prev)
                  onCurrencyChng(e.target.innerText);
                  }}>{item}
                </li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputBox;
