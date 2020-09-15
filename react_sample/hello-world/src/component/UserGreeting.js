import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

//    1 Method - Short circuit method return this.state.isLoggedIn && <div>Welcome Nataraj</div>


    // 2 method - Conditional Operator  return(
    //       this.state.isLoggedIn ? (
    //           <div>Welcome Nataraj</div>
    //       ) : (
    //           <div>Welcome Guest</div>
    //       )
    //   )


    // 3 method - if/else  if(this.state.isLoggedIn){
    //       return(
    //           <div>Welcome Nataraj</div>
    //       )
    //   }
    //   else{
    //       return(
    //           <div>Welcomne Guest</div>
    //       )
    //   }


    // 4-method 
    let message
    if(this.state.isLoggedIn){
        message = <div>Welcome Nataraj</div>
    }
    else{
        message = <div>Welcome Guest</div>
    }
    return <div>{message}</div>

  }
}

export default UserGreeting
