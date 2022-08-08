import React from 'react'
import style from './button.css'


interface props {
    text: string
}
export function Button({ text }: props) {
    return (
        <button className={style.button}>
            {text}
        </button>
    )
}
