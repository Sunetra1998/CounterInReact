import "./styles.css";

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }

  Increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  Decrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  Multiplication() {
    this.setState((prevstate) => {
      return {
        count: prevstate.count * 2
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment}>Increment!</button>
        <button onClick={this.Decrement}>Decrement!</button>
      </div>
    );
  }
}
export default App;
