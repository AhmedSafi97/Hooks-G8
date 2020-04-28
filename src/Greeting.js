import React, {useState} from 'react';

function Greeting () {
  const [name, setName] = useState("Ahmed");
  const [greeting, setGreeting] = useState("Hello");

  function handleName(e){
    setName(e.target.value);
  }

  function handleGreeting(e) {
    setGreeting(e.target.value);
  }

  return (
		<div className="d-flex flex-column">
			<input
				className="mb-2"
				placeholder="Enter greeting"
				name={greeting}
				onChange={handleGreeting}
			/>

			<input
				className="mb-2"
				placeholder="Enter name"
				name={name}
				onChange={handleName}
			/>

			<p>{`${greeting} ${name}`}</p>
		</div>
	);
}

export default Greeting;