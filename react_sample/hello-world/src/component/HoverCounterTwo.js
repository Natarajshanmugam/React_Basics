import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
  render() {
    //   const {count} = this.state

    // 2.method
      const {count,incrementCount} = this.props
    return (
    //  <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
    //  2.Method 
    <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    )
  }
}

export default HoverCounterTwo
