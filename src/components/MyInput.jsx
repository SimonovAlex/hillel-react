import {Component} from "react";
import styles from "./input.module.css";


class MyInput extends Component {

    constructor(props) {
      // console.log("constructor");
      super(props);
      // this.divRef = createRef();
      this.state = {
        todos: [],
        isLoading: true,
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

    componentDidMount(){
      // console.log('componentDidMount');
      // fetch('https://jsonplaceholder.typicode.com/users/3/todos')
      // .then(resp => resp.json())
      // .then(data => {
      //   console.log('data', data)
      //   return data
      // })
      // .then(data => this.setState((state) => ({...state, todos: [...data]})))
      // .catch(e => console.log('e', e))
      // .finally(() => {
      //   console.log('state', this.state);
      //   this.setState((state) => ({...state, isLoading: false}))
      // })
    }

    render() {
      console.log('render', styles);

      return (
        <div className={styles.wrapper}>
          {/* <input ref={this.divRef} placeholder="type me" onChange={this.handleChange} value={this.state.value} />
          <button onClick={this.handleClick}>change art</button> */}
          {this.state.isLoading? 'loading...' : <ul>{this.state.todos.map((t) => <li>{t.title}</li>)}</ul>}

        </div>
      )
    }
}


export default MyInput;