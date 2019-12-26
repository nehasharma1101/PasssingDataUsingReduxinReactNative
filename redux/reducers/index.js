// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers

import employeeDetailReducer from "./employeeDetailReducer"

// Redux: Root Reducer
const rootReducer = combineReducers({
  
  employeeDetailReducer:employeeDetailReducer
});

// Exports
export default rootReducer;