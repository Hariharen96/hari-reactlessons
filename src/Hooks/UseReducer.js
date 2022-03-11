import React, { useReducer } from 'react'

const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state,action){
      switch(action.type){
          case ACTION.INCREMENT: 
               return {count: state.count+1}
          case ACTION.DECREMENT:
              return {count: state.count-1}
          default:
              return state
      }
}

function UseReducer() {
    const [state,dispatch] = useReducer(reducer, {count: 0})
    
    
    function increment(){
        dispatch({ type: ACTION.INCREMENT})
   }
        
    function decrement(){
        dispatch({type: ACTION.DECREMENT})
    }
    return (
        <div>
            <h1>Usereducer hooks</h1>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}


export default UseReducer
