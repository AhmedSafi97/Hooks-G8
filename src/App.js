import React from 'react';
import CounterFunctional from './components/CounterFunctional';
import CounterClass from './components/CounterClass';
import './App.css';

function App() {
  return (
		<div className="container text-center pt-5">
			<CounterFunctional />
			<CounterClass />
		</div>
	);
}

export default App;
