import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<button
			className="btn btn-primary"
			// no need for binding the function

			onClick={() => setCount(count + 1)}
			//or like this
			// onClick={()=>setCount(c=> c+1)}
		>
			{/* we directly call the value count without this or anything like a normal
			variable defined inside a function*/}
			Function Count Up {count}
		</button>
	);
}

export default Counter;
