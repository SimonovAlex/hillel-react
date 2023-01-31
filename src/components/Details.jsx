import {Component} from "react";
import MyP from "@components/MyP";

class Details extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isOpen: true
      }
    }

    handleClick = () => {
        this.setState({...this.state, isOpen: !this.state.isOpen})
    }

    render() {
      return (
        <>
            <h1 onClick={this.handleClick}>
                {this.props.title}
            </h1>
             <MyP desc={this.state.isOpen? this.props.description: 'closed'} />
        </>
      )
    }
}

export default Details;