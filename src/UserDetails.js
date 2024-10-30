import React, { Component } from 'react'

class UserDetails extends Component {
  render() {
    console.log(this.props.inputEmailValue)
    return (
      <div style={{textAlign: 'center'}}>
        <h5>Email address {this.props.inputEmailValue}</h5>
        <h5>Phone number {this.props.inputEmailValue}</h5>
        <h5>Name {this.props.inputEmailValue}</h5>
        <h5>Age {this.props.inputEmailValue}</h5>
      </div>
    )
  }
}
export default UserDetails;
