import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
    id: string
    pomodoros?: number
    title?: string
}

interface ITaskState {
    tasks: ITask[] | any[]
    totalDuration: number
    currentTaskId?: string
}

const initialState: ITaskState = {
    totalDuration: 0, tasks: [
        {
            id: 'testID',
            pomodoros: 2,
            title: 'Тестовое задание'
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
        },

        decreaseTimerById: (state: ITaskState, action: PayloadAction<string>) => {
            const foundIndex = state.tasks.findIndex(task => task.id === action.payload)

            if (state.tasks[foundIndex].pomodoros > 1) {
                state.tasks[foundIndex].pomodoros -= 1
            }
        },

        editById: (state: ITaskState, action: PayloadAction<{
            id: string,
            value: {
                pomodoros?: number,
                title?: string
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
        }
    }
})

