import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, fetchUsersById} from "./CounterSlice";

  
function Counter() {
    const value = useSelector((state) => state.number.value);
    const dispatch = useDispatch();

    return (
      <div>
        <button onClick={() => dispatch(increment())}>
            +
        </button>
        value: {value}
        <button onClick={() => dispatch(decrement())}>
            -
        </button>
        <button onClick={() => dispatch(fetchUsersById({userId: value}))}>
            get Users
        </button>
        </div>
    );
  }


  export default Counter;
