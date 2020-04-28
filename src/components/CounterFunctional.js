import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<button
			className="btn btn-primary"
			// no need for binding the function

			onClick={() => setCount(count + 1)}
			/*
				this is another way of calling the variable counter incase the name is too long or if
				you change the name of the variable then you don't have to go and change the variable
				in the rest of your code
				<button className="btn btn-primary" onClick={()=> setCount(c=> c + 1)}>
      */
		>
			{/* we directly call the value count without this or anything like a normal
			variable defined inside a function*/}
			Functional Count Up {count}
		</button>
	);
}

export default Counter;
