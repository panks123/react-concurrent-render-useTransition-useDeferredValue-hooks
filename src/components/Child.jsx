import { useDeferredValue, useMemo } from "react";

const Child = ({input}) => {
    const deferredInput = useDeferredValue(input);
    // const list = useMemo(() => {
    //     let list = [];
    //     for(let i=0; i<30000; i++) {
    //         list.push(<div>{input + " " + i}</div>);
    //     }
    //     return list;
    // }, [input]);
    const list = useMemo(() => {
        let list = [];
        for(let i=0; i<30000; i++) {
            list.push(<div>{deferredInput + " " + i}</div>);
        }
        return list;
    }, [deferredInput]);

    console.log("list:::::", { input, deferredInput });
    return list;
}

export default Child;
