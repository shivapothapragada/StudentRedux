import {createStore} from 'redux'
import { Reducers } from '../reducer/Reducers'

const store = createStore(Reducers)

export default store;