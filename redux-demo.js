const redux = require('redux')


const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          counter: state.counter + 1
        };
      case 'DECREMENT':
        return {
          counter: state.counter - 1
        };
      default:
        return state;
    }
  };
const store = redux.createStore(counterReducer)

const counterSubscriber = ()=>{
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({type : 'INCREMENT'})