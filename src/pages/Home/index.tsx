import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component<{}, {}>{

  render()
  {
    console.log("home", this.props)
    return (
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    )
  }
}
