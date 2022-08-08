import React from 'react'
import { Button } from '../../ui/Button'
import { IconSvg } from '../../ui/IconSvg'
import style from './timer.css'

export function Timer() {

    const taskTitle = ''
    const pomidorCount = 1
    const taskNumber = 1
    const currentTimeMinutes = 20
    const currentTimeSeconds = 20
    // const taskTitle = ''
    return (
        <div className={style.timer}>
            <div className={style.header}>
                <p>{taskTitle}</p>
                <p>{pomidorCount}</p>
            </div>
            <div className={style.clock}>
                <div className={style.time}>{currentTimeMinutes}:{currentTimeSeconds}</div>
                <div className={style.add}><IconSvg /></div>
            </div>
            <div className={style.title}>
                <span className={style.taskNumber}>Задача {taskNumber} - </span>{taskTitle}
            </div>
            <div className={style.actions}>
                <Button text='Старт'/>
                <Button text='Стоп'/>
            </div>
        </div>
    )
}
