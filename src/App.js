import { Component } from "react";
import MyInput from "./components/MyInput";
import MyErrorBoundry from "./components/MyErrorBoundry";
import styles from "./index.module.css";

// const style = {backgroundColor: 'white'}
class App extends Component {

  constructor(){
    super();
  }



  render(){
    console.log('styles main', styles)
    return (
      <div className={styles.wrapper}>
      {/* <MyErrorBoundry> */}
        <MyInput/>
        {/* {this.state.articles.map((a, i) => <MyArticle key={a} title={a} />)} */}
        <p>
          asdasdasd
          asdasdasdasdd
          asdasd
        </p>
      {/* </MyErrorBoundry> */}
      </div>
    );
  }
}

export default App;
