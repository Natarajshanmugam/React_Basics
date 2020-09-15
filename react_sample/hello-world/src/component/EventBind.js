import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'Hello'
        }
        // 3 ->> 
        // this.clickHandler = this.clickHandler.bind(this)
    }
  //  1,2 ->> 
  //  clickHandler(){
  //       this.setState({
  //           message:'Good Bye'
  //       })
  //   }
  //  4 ->>
    // clickHandler = () => {
    //     this.setState({
    //         message:'Good Bye'
    //     })
    // }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1->>>  */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> Worst */}
      {/* 2 ->>>   */}
      {/* <button onClick={() => this.clickHandler()}>Click</button> Worst */}
        {/* 3 ->>> */}
         {/* <button onClick={this.clickHandler}>Click</button> Best */}
       {/* 4 ->>>  */}
       {/* <button onClick={this.clickHandler}>Click</button> Best */}
      </div>
    )
  }
}

export default EventBind
