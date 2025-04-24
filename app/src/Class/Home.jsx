import { Component } from "react";

const color = ["red", "green", "blue"];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('Component Start');
  }
  componentDidUpdate() {
    console.log('Component updated');
  }
  componentWillUnmount() {
    console.log('Component End');
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <>
        <div align="center" style={{ marginTop: "50px" }}>
          <h1>Welcome to the Home Page</h1>
          <h3>This is the home page of our application.</h3>
        </div>
        <div align="center" style={{ marginTop: "20px" }}>
          <h2>Counter App</h2>
          <h3>Count : {this.state.count}</h3>
          <button onClick={this.increment}>Plus</button>
          <button disabled={this.state.count == 0} onClick={this.decrement}>Minus</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <div align="center" style={{ marginTop: "20px" }}>
          <h1>Colors</h1>
          <h3>
            {
              color.map((c) => {
                return (
                  <p style={{ color: c }} key={c}>{c}</p>
                )
              })
            }
          </h3>
        </div>
      </>
    );
  }
}
export default Home;