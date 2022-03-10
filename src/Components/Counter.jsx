import React, { useState } from "react";

const Counter = () => {
	// компонент в функциональном стиле

	const [count, setCount] = useState(0);

	function increment() { // функция по увеличению счетчика
		setCount(count + 1)
	}

	function decrement() {// функция по уменьшению счетчика
		setCount(count - 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Increment</button>
		</div>
	)
}

export default Counter;