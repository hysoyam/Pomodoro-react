import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimerState {
    timeLeft: Date
    isOnPause: boolean
    activeTaskId?: string
}
const exMS = 25 * 60 * 1000
const time = new Date(exMS)

const initialState: TimerState = {
    timeLeft: time,
    isOnPause: true,
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        start: (state, action: PayloadAction) => {
            state.isOnPause = false
        },
        pause: (state, action: PayloadAction) => {
            state.isOnPause = true
        },
        stop: (state, action: PayloadAction) => {
            state.isOnPause = true
            state.timeLeft = time
        },
        reset: (state, action: PayloadAction) => {
            state.isOnPause = true
        },
        continue: (state, action: PayloadAction) => {
            state.isOnPause = false
        },
        update: (state, action: PayloadAction<Date>) => {
            state.timeLeft = action.payload
        },
        setActiveTaskId: (state, action: PayloadAction<string>) => {
            state.activeTaskId = action.payload
        },

    }


})