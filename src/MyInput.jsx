import {Component} from "react";


class MyInput extends Component {

    constructor(props) {
        console.log("props", props);
        super(props);
    }

    render() {
      console.log('render', this);
      return (
        <div>

<h1>Hello, {this.props.name} asdf</h1>;
<p>qwer<span >asd</span></p>
<button>
    asdl;k
</button>
        </div>

      )
    }
}

export default MyInput;