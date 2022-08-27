import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "./store";

interface TimerState {
    timeLeft: number
    isOnPause: boolean
    activeTaskId?: string
    timers: ITimer[]
}


const initialTimer = {
    duration: 25 * 60 * 1000,// 25 minuts
    isRun: false,
    timepass: 0,
    start: undefined,
    end: undefined
}

const initialTimersState: TimerState = {
    timeLeft: 100,
    isOnPause: true,
    activeTaskId: '',
    timers: [
        {
            taskId: 'testIDDone',
            timepass: 25 * 60 * 1000 + 1,
            duration: 25 * 60 * 1000,// 25 minuts
            isRun: false,
            start: undefined,
            end: undefined
        }, {
            taskId: 'testID',
            duration: 25 * 60 * 1000,// 25 minuts
            isRun: false,
            timepass: 0,
            start: undefined,
            end: undefined
        }, {
            taskId: 'testIDActive',
            duration: 25 * 60 * 1000,// 25 minuts
            timepass: 20 * 60 * 1000,
            start: Date.now() - 5 * 60 * 1000, // started 5 min ago
            end: Date.now() + 20 * 60 * 1000,// end in 25 min 
            isRun: true
        }

    ]
}

const exMS = 25 * 60 * 1000
const time = new Date(exMS)

interface ITimer {
    taskId: string
    duration: number
    isRun: boolean;
    timepass?: number
    start?: number
    end?: number
}

export const timerSlice = createSlice({
    name: 'timer',
    initialTimersState,
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