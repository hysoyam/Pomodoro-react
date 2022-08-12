import { configureStore } from '@reduxjs/toolkit'
import { tasksSlice } from './tasksSlice'
import { timerSlice } from './timerSlice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
        timer: timerSlice.reducer,
    },
})

