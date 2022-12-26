import { Component, createContext } from "react";
import MyArticle from "./components/MyArticle";
import MyInput from "./components/MyInput";

import ThemeContext from "./context/ThemeContext";

// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       value: ''
//       // articles: ['asd', 'qwe']
//     }
//   }

//   // handleChange = (value) => this.setState({...this.state})
//   handleChange = (value) => {
//       this.setState({...this.state,})
//   }

//   render(){
//     // console.log('themeContext',ThemeContext);
//     return (
//       <ThemeContext.Provider value={{
//         color: 'white',
//         size: '16px',
//       }}>
//         <MyInput onChange={this.handleChange} value={this.value} />
//         {/* {this.state.articles.map((a, i) => <MyArticle key={a} title={a} />)} */}
//       </ThemeContext.Provider>
//     );
//   }
// }

function App() {
  return (
    <ThemeContext.Provider
      value={{
        color: "white",
        size: "16px",
      }}
    >
      <MyInput onChange={() => {}} value={''} />
    </ThemeContext.Provider>
  );
}

export default App;
