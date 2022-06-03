import React, { Component } from 'react'

export default class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.increment = () => this.setState({ counter: this.state.counter + 1 })
    this.decrement = () => this.setState({ counter: this.state.counter - 1 })
  }

  // handlers
  handleIncrement = () => {
    this.increment()
  }

  handleDecrement = () => {
    this.decrement()
  }

  // invoked right after render
  componentDidMount = () => {
    console.log("Component did mount")
  }

  // like memo() to memoizes a component, and updates only when the following logic returns true
  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.propToIgnore && this.props.propToIgnore !== nextProps.propToIgnore) {
      console.log("Should component update - no render")
      return false
    }

    console.log("Should component update - render")
    return true
  }

  render = () => {
    console.log("render")

    return (
      < div className="App" >
        Counter: {this.state.counter}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        {this.props.propToIgnore}
      </ div>
    )
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("Component did update, the prev state is", prevState,)
    console.log("Component did update, the prev props is", prevProps,)
  }

  componentWillUnmount = () => {
    console.log("Component will unmount")
  }
}