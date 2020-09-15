import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Nataraj'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log("LifeCycleA componentDidmount")
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("LifeCycle A getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycle A componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'CodeEvolution'
        })
    }
  render() {
    console.log("LifeCycleA Rendered")
    return (
      <div>
       <div> LifeCycleA</div>
       <button onClick={this.changeState}>Change State</button>
       <LifeCycleB />
      </div>

    )
  }
}

export default LifeCycleA
