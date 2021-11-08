import { createStore, combineReducers } from 'redux'
import calculatorReducer from './Calculator/Calculator.reducer'

const rootReducer = combineReducers({
    // reducers
    calculator: calculatorReducer,
})

const store = createStore(rootReducer)
export default store