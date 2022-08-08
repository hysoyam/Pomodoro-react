import React, { RefObject } from 'react'
import { JsxElement } from 'typescript'
import style from './dropdown.css'


interface props {
    root: RefObject<JsxElement> // ???
    actions: {
        icon: JsxElement
        text: string
        action: () => void

    }[]
}

export function Dropdown({ root, actions }: props) {


    return (
        <ul className={style.dropdown}>
            <li className={style.item}></li>
        </ul>
    )
}
