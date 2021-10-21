// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// import rootReducer from './rootReducer'

// const store = createStore(
//   rootReducer,
//   (applyMiddleware( thunk))
// )

// export default store

// import { createStore ,applyMiddleware } from "redux";
// import marketReducer from './marketReducer';
// import thunk from 'redux-thunk'

// const store = createStore(marketReducer, applyMiddleware(thunk))

// export default store;

// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'



// const store = createStore(
//   rootReducer
//   (applyMiddleware( thunk))
// )

// export default store;

import { createStore ,applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;