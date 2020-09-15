import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
      super(props)
    //    1.Create Ref Foucusing input elements
      this.inputRef = React.createRef()
    //   2.Call back Refs 
      this.cbRef = null
      this.setCbRef = (element) => {
          this.cbRef = element
      }
    }
    // 1.Method
      componentDidMount(){
          this.inputRef.current.focus()
          console.log(this.inputRef)

        // 2.Method 
        // if(this.cbRef){
        //     this.cbRef.focus()
        // }
      }
      ClickHandler = () => {
          alert(this.inputRef.current.value)
      }
  render() {
    return (
      <div>
          {/* 1.Method */}
        <input type="text" ref={this.inputRef} />
        {/* 2.Method  */}
        {/* <input type="text" ref={this.setCbRef} /> */}
        <button onClick={this.ClickHandler}>Clickme</button>
      </div>
    )
  }
}
