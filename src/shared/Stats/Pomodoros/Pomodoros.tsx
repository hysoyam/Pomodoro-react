import React from 'react'
import { IconSvg } from '../../ui/IconSvg'
import style from './pomodoros.css'

export function Pomodoros() {
    const pomodorosTotal = 0
    return (
        <div className={style.pomodoros}>
            <IconSvg /> x {pomodorosTotal}
            <div className={style.total}>
            {pomodorosTotal} помидора
            </div>
        </div>
    )
}
