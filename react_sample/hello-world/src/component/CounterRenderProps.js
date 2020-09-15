import React, { Component } from 'react'

class CounterRenderProps extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
 
      incrementCount = () => {
          this.setState(prevState => {
              return { count:prevState.count + 1}
          })
      }
  render() {
      console.log(this.state.count," ",this.state.incrementCount)
    return (
      <div>
        {this.props.children(this.state.count,this.state.incrementCount)}
      </div>
    )
  }
}

export default CounterRenderProps
