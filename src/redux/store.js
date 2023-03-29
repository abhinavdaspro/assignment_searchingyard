import { configureStore } from '@reduxjs/toolkit'

import { AllUsers, SingleUser } from "./user/userReducer"

export const store = configureStore({
    reducer: {
        AllUsers: AllUsers.reducer,
        SingleUser: SingleUser.reducer
    },
})