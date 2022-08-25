import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import posts from './posts'

const reducer = combineReducers({posts})
const store = configureStore({reducer})

export type RootState = ReturnType<typeof reducer>;

export type TypedDispatch = typeof store.dispatch
export const useTypedDispatch: () => TypedDispatch = useDispatch 

export default store;