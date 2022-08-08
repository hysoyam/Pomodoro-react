import React from 'react'
import { Button } from '../../../ui/Button'
import { Input } from '../../../ui/Input'
import { Task } from './Task/Task'
import style from './tasks.css'
import { TasksDuration } from './TasksDuration'

export function Tasks() {

    return (
        <div className={style.tasks}>
            <Input />
            <Button />
            <ul>
                <Task />
            </ul>
            <TasksDuration />
        </div>
    )
}
