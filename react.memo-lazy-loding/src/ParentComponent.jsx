import React,{useState,Suspense,lazy} from "react";
 

const HeavyComponent = lazy(()=> import("./HeavyComponent"));

function ParentComponent(){
    const [count,setCount]=useState(0);
    return(
        <div style={{padding:"20px"}}>
            <h1>React.memo And Lazy Loading Demo </h1>
            <h2>Counter :{ count}</h2>
            <button onClick={() => setCount(count +1)}>
                Increment
            </button>
            <hr/>
            <Suspense fallback={<p>Loading Heavy Component..... </p>}>
            <HeavyComponent/>
            
            </Suspense>
        </div>
    );
};
export default ParentComponent;