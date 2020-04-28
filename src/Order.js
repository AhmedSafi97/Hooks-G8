import React, {useState} from 'react';

function Order(){
  const [order, setOrder] = useState({coffee: 1, water: 1});
  const { coffee, water } = order;

  //check what will happen after you clicking on one of the buttons
  const increaseCoffeeOrder = () => {
		setOrder({
      coffee: coffee + 1,
    });
    //we can fix this using the spread operator
    /*
    setOrder({
      ...order,
      coffee: coffee + 1,
    });
    */
	};

  const increaseWaterOrder = ()=>{
    setOrder({
			water: water + 1,
		});
  }

  return (
    <>
		<button className="mr-3 mb-3 btn btn-primary" onClick={increaseCoffeeOrder}>
			+<span role="img" aria-label="coffee">☕</span>
		</button>
		<button className="mb-3 btn btn-primary" onClick={increaseWaterOrder}>
			+<span role="img" aria-label="water">🥤</span>
		</button>
    <br/>
    <h2>Coffee: {coffee} ☕</h2>
    <h2>Water: {water} 🥤</h2>
    <p>{`Coffe: ${coffee} & Water: ${water}`}</p>
    </>
	);
}

export default Order;
