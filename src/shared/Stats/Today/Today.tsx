import React from 'react'
import style from './today.css'

export function Today() {

    const timeAtWork = 0
    const dayOfWeek = ''

    return (
        <div className={style.today}>
            <p>{dayOfWeek}</p>
            Вы работали над задачами в течение<span className={style.time}>{timeAtWork}</span>
        </div>
    )
}
