import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Nataraj'
      }
      console.log('LifecycleB a constructor')
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleB a getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log("LifeCycleB componentDidmount")
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
  render() {
    console.log("LifeCycleB Rendered")
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
