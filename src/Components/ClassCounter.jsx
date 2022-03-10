import { Component } from "react";

class ClassCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		}
	}

	increment = () => { // функция по увеличению счетчика
		this.setState({ count: this.state.count + 1 })
	}

	decrement = () => {// функция по уменьшению счетчика
		this.setState({ count: this.state.count - 1 })
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</div>
		)
	}
}
export default ClassCounter;