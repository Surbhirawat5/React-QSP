import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import Counter from "./Counter";


//! STEP 2: create a slice
const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        incre: (prevState, action) => {
            return prevState + 1;
        },
        decre: (prevState, action) => {
            return prevState - 1;
        },
        reset: (prevState, action) => {
            return (prevState = 0);
        },
    },
});

//! STEP 1: create a store
const myStore = configureStore({
    reducer : {
        Counter : counterSlice.reducer,
        // todo : todoSlice.reducer                             // for multiple feature we add like this
    },
});



const ReduxCounter = () => {
  return <Provider store={myStore}>

    <Counter/>
  </Provider>
};

export default ReduxCounter;