import React from 'react'
import style from './statsblock.css'


interface props {
    lable: string
    value: string
    icon: string 
}

export function StatsBlock({ lable, value, icon }: props) {

    return (
        <div className={style.statsblock}>
            <p>{lable}</p>
            <p> {value}</p>
            {icon}
        </div>
    )
}
