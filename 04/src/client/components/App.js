import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.countUp = this.countUp.bind(this);
  }
  countUp() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>Top Page</h1>
        <p>
          {this.state.count}
        </p>
        <button onClick={this.countUp}>Count Up</button>
        <div>
          <Link to="/about">To About</Link>
        </div>
      </div>
    )
  }
}

export default App;
