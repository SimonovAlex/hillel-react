import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./CounterSlice";
import { useGetUsersQuery, useLazyGetUsersByIdQuery, useDeleteUserByIdMutation, usePatchUserByIdMutation } from "./UsersApi";
  
import Comp from '@app/components/Comp';

function Counter() {
    const value = useSelector((state) => state.number.value);
    const useGetUsersQueryData = useGetUsersQuery();
    // const [fetch, data] = useLazyGetUsersByIdQuery();
    const [fetch, data] =  usePatchUserByIdMutation();
    const dispatch = useDispatch();
    // console.log(data);
    const clickHandler = () => {
        fetch({id: value, name: 'test puth'})
    }

    return (
      <div>
        <Comp width={100} height={200} />
        <button onClick={() => dispatch(increment())}>
            +
        </button>
        value: {value}
        <button onClick={() => dispatch(decrement())}>
            -
        </button>
        <button onClick={clickHandler}>
            get Users
        </button>

        <ul>
            <button onClick={() => useGetUsersQueryData.refetch()}>refetch all</button>
            {useGetUsersQueryData.isFetching && <li>loading...</li>}
            {!useGetUsersQueryData.isFetching && useGetUsersQueryData.data.map(i => <li>{i.id} + {i.name}</li>)}
        </ul>
        </div>
    );
  }


  export default Counter;
