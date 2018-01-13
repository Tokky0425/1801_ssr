import React from 'react';

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
        <p>
          {this.state.count}
        </p>
        <button onClick={this.countUp}>Count Up</button>
      </div>
    )
  }
}

export default App;
