import React from 'react';

function HeavyComponent() {
    console.log("HeavyComponent rendered");
     
    let total =0;
    for (let i=0; i<1_000_000;i++) {
        total +=i;

    }
  return (
    <div>
      <h2>Heavy Component</h2>
      <p>This Component is Expensive to render.</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
