import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
    id: string
    done: boolean
    active: boolean
    pomodoros: number
    title: string
}

interface ITaskState {
    tasks: ITask[]
    totalDuration: number
    currentTaskId: string | undefined
}

const initialState: ITaskState = {
    totalDuration: 0,
    currentTaskId: 'testIDActive',
    tasks: [
        {
            id: 'testIDDone',
            done: true,
            pomodoros: 1,
            title: 'Готовое задание',
            active: false,           
        },
        {
            id: 'testIDActive',
            done: false,
            pomodoros: 2,
            title: 'Активное задание',
            active: true,        
        },
        {
            id: 'testID',
            done: false,
            pomodoros: 3,
            title: 'Тестовое задание',
            active: false,        
        }
    ]
}
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<ITask>) => {
            state.tasks.push(action.payload)
        },

        increaseTimerById: (state: ITaskState, action: PayloadAction<string>) => {
            const foundIndex = state.tasks.findIndex(task => task.id === action.payload)
            state.tasks[foundIndex].pomodoros += 1
            state.tasks[foundIndex].done = false
        },

        decreaseTimerById: (state: ITaskState, action: PayloadAction<string>) => {
            const foundIndex = state.tasks.findIndex(task => task.id === action.payload)

            if (state.tasks[foundIndex].pomodoros > 1) {
                state.tasks[foundIndex].pomodoros -= 1
            } else {
                state.tasks[foundIndex].pomodoros = 0
                state.tasks[foundIndex].done = true
            }
        },

        markAskDone: (state: ITaskState, action: PayloadAction<string>) => {
            const foundIndex = state.tasks.findIndex(task => task.id === action.payload)
            state.tasks[foundIndex].done = true
            state.tasks[foundIndex].active = false
        },

        editById: (state: ITaskState, action: PayloadAction<{
            id: string,
            value: {
                pomodoros?: number,
                title?: string
                active?: boolean
            }
        }>) => {
            const foundIndex = state.tasks.findIndex(task => task.id === action.payload.id)
            state.tasks[foundIndex] = {
                ...state.tasks[foundIndex],
                ...action.payload.value
            }
        },

        deleteById: (state: ITaskState, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },

        clearAll: (state: ITaskState, action) => {
            state.tasks = []
        },

        setCurrentTask: (state: ITaskState, action: PayloadAction<string>) => {
            state.currentTaskId = action.payload
            state.tasks.forEach((task) => { task.active = task.id === action.payload })
        }

    }
})

