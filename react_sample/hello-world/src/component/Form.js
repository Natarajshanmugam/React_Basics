import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    handleCommentChange = event => {
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event => {
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      event.preventDefault()
    }
  render() {
    // 1 method
    const {username,comments,topic} = this.state
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" 
        value={this.setState.username} 
        // value={username} go to 1 method
        onChange={this.handleUsernameChange} 
        />
      </div>
      <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.handleCommentChange} ></textarea>
          {/* <textarea value={comments} onChange={this.handleCommentChange} ></textarea> got to 1 method */}
      </div>
      <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
          {/* <select value={topic} onChange={this.handleTopicChange}> got to 1 method */}
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="Vue">Vue</option>
          </select>
      </div>
      <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form