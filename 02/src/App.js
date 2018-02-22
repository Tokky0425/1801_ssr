import React from 'react';

export default () => <h1>Hello, SSR!</h1>;

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//     this.countUp = this.countUp.bind(this);
//   }
//   countUp() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   render() {
//     return (
//       <div>
//         <p>
//           {this.state.count}
//         </p>
//         <button onClick={this.countUp}>Count Up</button>
//       </div>
//     )
//   }
// }
