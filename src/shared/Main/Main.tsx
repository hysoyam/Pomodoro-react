import React from 'react'
import { Header } from '../Header';
import style from './main.css'
import { TaskList } from './TaskList/TaskList';
import { Timer } from './Timer';

export function Main() {
    return (
        <>
            <Header />
            <div className={style.main}>
                <TaskList />
                <Timer />
            </div>
        </>
    )
}
