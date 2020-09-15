import React from 'react'

const WithCounter = (WrappedComponent,incrementNumber) => {
    console.log("With Counter")
    console.log(WrappedComponent)
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
                // name:"Nataraj"
            }
          }
          increment = () => {
              this.setState(prevState => {
                  return {count: prevState.count + incrementNumber}
              })
            }

        render() {
            console.log(this.props.name)
            return <WrappedComponent count={this.state.count} increment={this.increment} {... this.props} />
            // return <WrappedComponent name={this.state.name} increment={this.increment}  />
        }
    }
    return WithCounter
}
export default WithCounter
