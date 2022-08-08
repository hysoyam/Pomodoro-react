import React from 'react'
import style from './subheader.css'

export function SubHeader({ text = '' }) {
    return (
        <h2 className={style.subheader}>
            {text}
        </h2>
    )
}
