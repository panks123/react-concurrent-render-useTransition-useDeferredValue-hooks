import { useDeferredValue, useMemo, useState } from "react";
// import Child from "./Child";

const Parent = () => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    let list = [];
    for (let i = 0; i < 30000; i++) {
      list.push(<div>{deferredInput + " " + i}</div>);
    }
    return list;
  }, [deferredInput]);

  console.log("Values::::", { input, deferredInput})
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {
        list
      }
      {/* <Child input={input} /> */}
    </div>
  );
};

export default Parent;
