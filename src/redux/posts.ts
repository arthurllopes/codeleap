import { AnyAction, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { PostProps } from "../components/postItem";
import api from "../services/api";
import { RootState } from "./store";

const slice = createSlice({
    name: 'posts',
    initialState: {
        username: localStorage.getItem('username') || '',
        data: [],
        modal: null
    },
    reducers: {
        setData(state: any, action: PayloadAction<PostProps[]>){
            state.data = action.payload
        },
        setModal(state: any, action: PayloadAction<{type: string, post: PostProps}>){
            state.modal = action.payload
        },
        
    }
})

export const {setData, setModal} = slice.actions

export const userLogin = (username: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    localStorage.setItem('username', username)
}

export const getData = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    try {
        const response = await api.get('')
        const {data, status} = response
        if (status !== 200) {}
        dispatch(setData(data.results))
    } catch (error) {}
}
export const createPost = (post: {title: string, content: string}): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const postList = getState().posts.data
    try {
        const response = await api.post('', )
        const {data, status} = response
        if (status !== 200) {}
        dispatch(setData([data, ...postList]))
    } catch (error) {}
}
export const editPost = (post: {title: string, content: string}): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const {username, modal, data} = getState().posts
    const ID = (modal as any)?.item?.id
    const payload = {username, ...post}
    try {
        const response = await api.put(`${ID}`, payload)
        const {status} = response
        if (status !== 200) {}
        const updatedList = (data as PostProps[]).map(item => {
            if (item.id === ID) return {...item, ...post}
            return item
        })
        dispatch(setData(updatedList))
    } catch (error) {}
}
export const deletePost = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const {modal, data} = getState().posts
    const ID = (modal as any)?.item?.id
    try {
        await api.delete(`${ID}`)
        const filteredData = (data as PostProps[]).filter(item => item.id !== ID)
        dispatch(setData(filteredData))
    } catch (error) {}
}


export default slice.reducer