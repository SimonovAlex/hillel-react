import {Component} from "react";


class MyP extends Component {

    constructor(props) {
      super(props)
    }

    render() {
     return (
      <p>{this.props.desc}</p>
      )
    }
}

export default MyP;