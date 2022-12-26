// import {Component, createRef} from "react";
// import { createPortal } from "react-dom";
// import { ReactComponent as KiviSvg } from "../image/kiwi.svg";
// import UniqJpg from "../image/u.jpg";

// import ThemeContext from "../context/ThemeContext";

// class MyInput extends Component {

//   static contextType = ThemeContext;

//     constructor(props) {
//       // console.log("props", props);
//       super(props);
//       // this.divRef = createRef();
//       this.state = {
//         value: 'asd',
//       }
//     }

//     // shouldComponentUpdate()

//     handleClick = () => {
//       this.props.onChange(this.state.value);
//     }

//     handleChange = (e) => {
//       this.setState({...this.state, value: e.target.value})
//     }

//     render() {
//       console.log('this.context', this.context);
      // return createPortal(
      //   <div>
      //     <input ref={this.divRef} placeholder="type me" onChange={this.handleChange} value={this.state.value} />
      //     <button onClick={this.handleClick}>change art</button>
      //     {/* <KiviSvg color="#ffffff" /> */}
      //     {/* <img src={UniqJpg} /> */}
      //     {/* <UniqJpg />  */}
      //   </div>,
      //   document.querySelector('#root')
      // )
//     }
// }

// export default MyInput;

import React from "react";

function MyInput ({onChange, value}) {

  // todo value to state 

    const handleClick = () => {
      // onChange(this.state.value);
      onChange();
    }

    const handleChange = (e) => {
      // todo state 
      // this.setState({...this.state, value: e.target.value})
    }

  return (<div>
      <input placeholder="type me" onChange={handleChange}  />
      <button onClick={handleClick}>change art</button>
      {/* <KiviSvg color="#ffffff" /> */}
      {/* <img src={UniqJpg} /> */}
      {/* <UniqJpg />  */}
    </div>)
}

export default MyInput;