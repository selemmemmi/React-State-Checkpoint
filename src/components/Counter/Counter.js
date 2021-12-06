import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ date: this.state.date + 1 });
    }, 1000);
  }
  componentWillUnmount = () => {
    alert(`lifecycle = ${this.state.date}`);
  };
  render() {
    return (
      <>
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          {this.state.date}
        </h3>
      </>
    );
  }
}

export default Counter;
