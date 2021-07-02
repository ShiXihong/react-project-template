import { Component } from 'react';

export default class Login extends Component<{}, {}>{

  render()
  {
    console.log("Login", this.props)
    return (
      <div>
        Login
      </div>
    )
  }
}
