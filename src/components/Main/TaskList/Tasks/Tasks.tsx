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
    const [error, setError] = useState({ isError: false, message: '' })

    const dispatch = useDispatch()
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!taskTitle) {
            setError({
                isError: true,
                message: 'Введите название дела'
            })
            return
        }

        dispatch(tasksSlice.actions.add({
            id: uniqid(),
            done: false,
            pomodoros: 1,
            title: taskTitle,
            active: false
        }))
    }

    //  TODO непрезентативный компонетн, очень много логики внутри компонента, может быть както вынести наружу?
    return (
        <div className={style.tasks}>
            <form onSubmit={onSubmit} className={style.add}>
                <Input value={taskTitle} onChange={(e) => {
                    // strange behavior
                    setError({
                        isError: false,
                        message: ''
                    })
                    setTaskTitle(e.target.value)
                }} />
                {error.isError && <div className={style.error}> {error.message}</div>}
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
