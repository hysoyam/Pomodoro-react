import React, { ChangeEvent } from 'react'
import style from './input.module.css'


interface props {
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
export function Input({ value = '', onChange }: props) {
    return (
        <input className={style.input} value={value} onChange={onChange} placeholder='Название задачи' />
    )
}
