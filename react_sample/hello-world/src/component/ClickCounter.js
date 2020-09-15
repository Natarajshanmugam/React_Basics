import React, { Component, PureComponent } from 'react'
import WithCounter from './WithCounter'

export class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // increment = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }
  render() {
    //   const {count} = this.state
      const {count,increment} = this.props
        // const {name,increment} = this.props
      console.log("Click")
    return (
        <button onClick={increment}>{this.props.name} Clicked {count} times</button>
        // <button onClick={increment}> Clicked {name} times</button>
  
    )
  }
}

export default WithCounter(ClickCounter,5)
