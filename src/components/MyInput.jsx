import React, { useState, useEffect, useRef, useMemo, useCallback, useContext, useLayoutEffect } from "react";
import {ThemeContext} from "../App";
import {useTestedHook} from "./UseTestedHook";

// class MyInput extends Component {

//     constructor(props) {
//       console.log("props", props);
//       super(props);
//       // this.divRef = createRef();
//       this.state = {
//         value: 'asd'
//       }
//     }

//     handleClick = () => {
//       // console.log('handleChange', this.divRef);
//       // this.props.onChange(this.divRef.current.value);
//       this.props.onChange(this.state.value);
    
//     }

//     handleChange = (e) => {
//       this.setState({...this.state, value: e.target.value})
//     }

//     render() {

//       return (
        // <div>
        //   <input ref={this.divRef} placeholder="type me" onChange={this.handleChange} value={this.state.value} />
        //   <button onClick={this.handleClick}>change art</button>
        // </div>
//       )
//     }
// }

// export default MyInput;


export default function MyInput ({onChange}) {
  // const [value, setValue] = useState('asd');
  const [value2, setValue2 ] = useState(1);
  const c = useContext(ThemeContext);


  const {value, setValue, fakeApi} = useTestedHook(123);

  // console.log('c', c)

  const ref = useRef(12);

  // useEffect(() => {
  //   fakeApi();
    
  // }, [])

  useEffect(() => {
    console.log('value', value)
  }, [value])

  // useEffect(() => {
    // setValue2(value2 + 3)
  // }, [value2])

  // useEffect(() => {
  //   return () =>console.log('value, value2', value, value2)
  // }, [value, value2])

  // useEffect(() => {
  //   return () =>console.log('null')
  // })


  const handleChange = useCallback((e, d) => {
    // console.log('handleChange', e, d )
    setValue(e.target.value);
  }, [])

  const handleClick = useCallback(() => {
    console.log(ref);

    setValue2(value2 + 3);
    // onChange(value);
    // return value + 3 
  }, [value2])


  // const memoizedArr = useMemo(() => {
  //   return [sdaf,qwe,qwe,qwe]
  // }, [])

  return(
    
    <div>
    
      {/* {console.log('render')} */}
    <input placeholder="type me" onChange={(e) => handleChange(e, 'asd')} value={value} />
    <p>count: {value2}</p>
    <button onClick={handleClick}>change art</button>
  </div>
  )
}