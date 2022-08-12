import React from 'react'
import style from './main.module.css'
import { TaskList } from './TaskList/TaskList';
import { Timer } from './Timer';

export function Main() {
    return (
        <div className={style.main}>
            <div className={style.block}>
                <TaskList />
            </div>
            <div className={style.block}>
                <Timer />
            </div>
        </div>
    )
}
