import GenerateContext from "./GenerateContext";
import { useState } from "react";
function ContextState(props){
let [isbuyclick ,setbuyclick]=useState(false);
let [issellclick,setsellclick]=useState(false);
let handlebuy=()=>{
    setbuyclick(true);
}
let handlesell=()=>{
    setsellclick(true);
}
let handlebuyunclick=()=>{
    setbuyclick(false);
}
let handlesellunclick=()=>{
    setsellclick(false);
}
return (
    <GenerateContext.Provider value={{isbuyclick,issellclick, handlebuy,handlesell, handlebuyunclick, handlesellunclick}}>
    {props.children}
    </GenerateContext.Provider>
)
}
export default ContextState;