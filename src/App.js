import { Component } from "react";
import MyArticle from "./components/MyArticle";
import MyInput from "./components/MyInput";

class App extends Component {

  constructor(){
    super();
    this.state = {
      articles: ['asd', 'qwe']
    }
  }

  // handleChange = (value) => this.setState({...this.state})
  handleChange = (value) => {
      this.setState({...this.state, articles: [...this.state.articles, value]})
  }


  render(){
    return (
      <>
        <MyInput onChange={this.handleChange} />
        {this.state.articles.map((a, i) => <MyArticle key={a} title={a} />)}
      </>
    );
  }
}

export default App;
