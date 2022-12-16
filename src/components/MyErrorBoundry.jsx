import {Component} from "react";


class MyErrorBoundry extends Component {

    constructor(props) {
      console.log("constructor MyErrorBoundry");
      super(props);
      this.state = {
        hasError: false,
      }
    }

    componentDidMount(){
      console.log("componentDidMount MyErrorBoundry");

    }

    render() {
      console.log("render MyErrorBoundry");

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
          }
      
          return this.props.children; 
    }
}


export default MyErrorBoundry;