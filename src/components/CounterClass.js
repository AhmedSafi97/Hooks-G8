import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      count: 0,
    }
    this.countUp = this.countUp.bind(this);
  }

  countUp(){
    this.setState(state=> ({count: state.count + 1}) )
  }

  render(){
    return (
			<button
				className="ml-5 btn btn-primary"
				onClick={this.countUp}
			>
				Class Count Up {this.state.count}
			</button>
		);
  }

}

export default Counter;