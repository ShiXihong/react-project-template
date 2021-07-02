import { Component } from 'react';

export default class About extends Component<{}, {}>{

  render()
  {
    console.log("About", this.props)
    return (
      <div>
        About
      </div>
    )
  }
}
