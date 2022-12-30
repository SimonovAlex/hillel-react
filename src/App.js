// import { Component } from "react";
import React,{ useState } from "react";
import MyArticle from "./components/MyArticle";
import MyInput from "./components/MyInput";
import {useModalController} from "./components/useModalController"

// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       articles: ['asd', 'qwe']
//     }
//   }

//   // handleChange = (value) => this.setState({...this.state})
//   handleChange = (value) => {
//       this.setState({...this.state, articles: [...this.state.articles, value]})
//   }


//   render(){
    // return (
    //   <>
    //     <MyInput onChange={this.handleChange} />
    //     {this.state.articles.map((a, i) => <MyArticle key={a} title={a} />)}
    //   </>
    // );
//   }
// }

// export default App;

export const ThemeContext = React.createContext('light');

export default function App () {
  const [show, setShow] = useState(true);
  const modal1 = useModalController();
  const modal2 = useModalController();
  const modal3 = useModalController();


  console.log(modal1.isOpen, modal2.isOpen, modal3.isOpen)

  const [articles, setArticles] = useState(['asd', 'qwe']);


   const handleChange = (value) => {
    setArticles([...articles, value])
  }

  return (
    <>
    <ThemeContext.Provider value="dark">
      {show? <MyInput onChange={handleChange} /> : null}
      <button onClick={modal1.toggle}>click</button>
      {articles.map((a, i) => <MyArticle key={a} title={a} />)}
      </ThemeContext.Provider>
    </>
  );
}