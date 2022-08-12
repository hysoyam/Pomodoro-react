import React, { FormEvent, useState } from 'react'
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../store/store'
import { tasksSlice } from '../../../../store/tasksSlice'
import { Button } from '../../../ui/Button'
import { Input } from '../../../ui/Input'
import { Task } from './Task/Task'
import style from './tasks.module.css'
import { TasksDuration } from './TasksDuration'

export function Tasks() {

    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    const [taskTitle, setTaskTitle] = useState('')
    const dispatch = useDispatch()
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        dispatch(tasksSlice.actions.add({
            id: uniqid(),
            pomodoros: 1,
            title: taskTitle
        }))
    }

    return (
        <div className={style.tasks}>
            <form onSubmit={onSubmit} className={style.add}>
                <Input value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }} />
                <Button >Добавить</Button>
            </form>
            {
                tasks && <ul className={style.tasks}>
                    {tasks.map(task =>
                        <Task key={task.id} task={task} />
                    )}
                </ul>
            }
            <TasksDuration />
        </div >
    )
}
