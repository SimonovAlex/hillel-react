import {Component, createRef} from "react";


class MyInput extends Component {

    constructor(props) {
      console.log("props", props);
      super(props);
      // this.divRef = createRef();
      this.state = {
        value: 'asd'
      }
    }

    handleClick = () => {
      // console.log('handleChange', this.divRef);
      // this.props.onChange(this.divRef.current.value);
      this.props.onChange(this.state.value);
    
    }

    handleChange = (e) => {
      this.setState({...this.state, value: e.target.value})
    }

    render() {

      return (
        <div>
          <input ref={this.divRef} placeholder="type me" onChange={this.handleChange} value={this.state.value} />
          <button onClick={this.handleClick}>change art</button>
        </div>
      )
    }
}

export default MyInput;