import React from 'react';
import { actions } from '../store/reducers';
import { connect } from 'react-redux';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       foo: 'bar'
//     };
//   }

//   handleChange = () => {
//     this.setState({ foo: Math.random() });
//   };

//   render() {
//     return <div onClick={this.handleChange}>{this.state.foo}</div>;
//   }
// }

// export default App;

class App extends React.Component {
  render() {
    return (
      <div onClick={this.props.handleChange()}>{this.props.someStuff.foo}</div>
    );
  }
}

const mapStateToProps = state => ({
  someStuff: state.foo
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: num => dispatch(actions.changeName(num)),
  handleReset: () => dispatch(actions.resetName())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
