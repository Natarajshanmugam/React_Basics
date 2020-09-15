import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
  render() {
    //   2-method
      const {count,incrementCount} = this.props
      console.log(count,incrementCount)
    return (
    //   <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>
        // 2.method
      <button onClick={incrementCount}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterTwo
