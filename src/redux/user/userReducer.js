import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userList: [],
    singleUser: {},
}

export const AllUsers = createSlice({
    name: 'AllUsers',
    initialState: initialState.userList,
    reducers: {
        set_allUser: (state, action) => {
            state = action.payload;
            return state
        },
    },
})

export const SingleUser = createSlice({
    name: 'SingleUser',
    initialState: initialState.singleUser,
    reducers: {
        set_singleUser: (state, action) => {
            state = { ...state, ...action.payload };
            return state
        },
    },
})

// Action creators are generated for each case reducer function
export const { set_allUser } = AllUsers.actions
export const { set_singleUser } = SingleUser.actions
