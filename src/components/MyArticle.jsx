import {Component} from "react";


class MyArticle extends Component {

    constructor(props) {
      console.log("props", props);
      super(props);
    }

    render() {

      return (
        <div>
          <h1>{this.props.title}</h1>;
        </div>
      )
    }
}

export default MyArticle;