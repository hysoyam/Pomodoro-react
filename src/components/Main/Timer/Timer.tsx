import React from 'react'
import { Button } from '../../ui/Button'
import { IconSvg } from '../../ui/IconSvg'
import style from './timer.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store'


export function Timer() {

    const timer = useSelector((state: RootState) => state.timer)
    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    let currentTask = tasks.find(el => el.id === timer.activeTaskId)
    if (!currentTask) {
        currentTask = tasks[0]
    }

    const pomidorCount = currentTask?.pomodoros || 1
    const taskTitle = currentTask?.title || 'не добавили'
    const taskNumber = 1
    const currentTimeMinutes = timer.timeLeft.getMinutes() || '00'
    const currentTimeSeconds = timer.timeLeft.getSeconds() || '00'

    return (
        <div className={style.timer}>
            <div className={style.header}>
                <span>{taskTitle}</span>
                <span>Помидор {pomidorCount}</span>
            </div>
            <div className={style.clockBody}>
                <div className={style.clock}>
                    <div className={style.time}>{currentTimeMinutes}:{currentTimeSeconds}</div>
                    <Button className={style.add}><IconSvg IconName='PlusIcon' /></Button>
                    {/* <div className={style.add}><IconSvg IconName='PlusIcon' /></div> */}
                </div>
                <div className={style.title}>
                    <span className={style.taskNumber}>Задача {taskNumber} - </span>{taskTitle}
                </div>
                <div className={style.actions}>
                    <Button>Старт</Button>
                    <Button secondary>Стоп</Button>
                </div>
            </div>
        </div>
    )
}
