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
        setModal(state: any, action: PayloadAction<{type: string, post: PostProps} | null>){
            state.modal = action.payload
        },
        
    }
})

export const {setData, setModal} = slice.actions

export const userLogin = (username: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    localStorage.setItem('username', username)
}

export const getPosts = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    try {
        const response = await api.get('')
        const {data, status} = response
        if (status !== 200) {}
        dispatch(setData(data.results))
    } catch (error) {}
}
export const createPost = (post: {title: string, content: string}): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const {data, username} = getState().posts
    const payload = {username, ...post}
    try {
        const response = await api.post('', payload)
        //if (response.status !== 200) {}
        dispatch(setData([response.data, ...data]))
    } catch (error) {}
}
export const editPost = (post: {title: string, content: string}): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const { modal, data} = getState().posts
    const ID = (modal as any)?.post?.id
    try {
        const response = await api.patch(`${ID}/`, post)
        const {status} = response
        if (status !== 200) {}
        const updatedList = (data as PostProps[]).map(item => {
            if (item.id === ID) return {...item, ...post}
            return item
        })
        dispatch(setData(updatedList))
    } catch (error) {}
    finally {
        dispatch(setModal(null))
    }
}
export const deletePost = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const {modal, data} = getState().posts
    const ID = (modal as any)?.post?.id
    try {
        await api.delete(`${ID}/`)
        const filteredData = (data as PostProps[]).filter(item => item.id !== ID)
        dispatch(setData(filteredData))
    } catch (error) {}
    finally {
        dispatch(setModal(null))
    }
}


export default slice.reducer