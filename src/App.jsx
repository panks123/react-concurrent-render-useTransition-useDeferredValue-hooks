import { useState, useTransition } from "react";
import Parent from "./components/Parent";

function App() {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const onInputChange = (val) => {
    setValue(val);
    startTransition(() => {
      let l = [];
      console.log("I run")
      for (let i = 0; i < 20000; i++) {
        // Slow
        l.push(val);
      }
      setList(l);
    });
  };
  return (
    <>
      <div>
        <input value={value} onChange={(e) => onInputChange(e.target.value)} />
      </div>
      <div>
        { isPending ? <div>Loading.....</div> : 
          list.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div>
        <label>Parent Input</label>
        <Parent />
      </div>
    </>
  );
}

export default App;
