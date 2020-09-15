import React from 'react'
class Welcome extends React.Component{
    render(){
        return <h1>Hello {this.props.name} </h1>;
    }
}

// class Welcome extends React.Component{
//     render(){
//         const {name} = this.props // Syntax => const {state1,state2} = this.state
//         return (
//         <h1>Hello {name} </h1>
//         )
//     }
// }
export default Welcome;