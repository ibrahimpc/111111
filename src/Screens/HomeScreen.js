import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../reduxToolKit/counterSlice';
const HomeScreen = () => {
  const count = useSelector(state => state.counter.value);
  const name = useSelector(state => state.counter.name);
  console.log({count});
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Minus</Text>
      </TouchableOpacity>
      <Text> {count} </Text>
      {/*<Text> {name} </Text>*/}
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(incrementByAmount(5))}>
        <Text>Add 5</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
//
// const {createStore} = require('redux');
// const initialState = {
//   value: 0,
// };
// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return {value: state.value + 1};
//     case 'counter/decremented':
//       return {value: state.value - 1};
//     default:
//       return state;
//   }
// }
//
// let store = createStore(counterReducer);
//
// store.subscribe(() => console.log(store.getState()));
//
// store.dispatch({type: 'counter/incremented'});
// // {value: 1}
// store.dispatch({type: 'counter/incremented'});
// // {value: 2}
// store.dispatch({type: 'counter/incremented'});
// // {value: 2}
// store.dispatch({type: 'counter/incremented'});
// // {value: 2}
// // store.dispatch({type: 'counter/decremented'});
// // {value: 1}
