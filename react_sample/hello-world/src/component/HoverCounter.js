import React, { Component } from 'react'
import WithCounter from './WithCounter'

export class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   increment = () => {
    //       this.setState(prevState => {
    //           return {count: prevState.count + 1}
    //       })
    //     }
  render() {
    console.log("Hover COunter")
    //   const {count} = this.state
    const {count,increment} = this.props
    return (
      <div>
        <h2 onMouseOver={increment}> -Hovered {count} times</h2>
      </div>
    )
  }
}

export default  WithCounter(HoverCounter,10)
