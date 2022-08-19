import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../Button'
import style from './dropdown.module.css'

interface props {
    // root: RefObject<JsxElement> // ???
    // root: React.MutableRefObject<null> // ???
    // root: HTMLButtonElement | null  // ???
    root: React.RefObject<any>  // ???
    actions: Array<{
        icon: JSX.Element
        text: string
        action: () => any
        hide?: boolean
    }>
}

export function Dropdown({ root, actions }: props) {


    const [isOpen, SetIsOpen] = useState(false)

    useEffect(() => {

        root.current && root.current.addEventListener('click', onClick)

    }, [])

    function onClick(e: MouseEvent) {
        SetIsOpen((isOpen) => !isOpen)
    }

    if (!root.current) return null

    const el = (<ul className={style.dropdown}>
        {actions.map((action) => {
            const Icon = action.icon

            return <li key={action.text} className={style.item}>
                <Button onClick={action.action} className={style.button} >
                    {Icon}
                    <span>{action.text}</span>
                </Button>
            </li>
        })}
    </ul>)

    // const portal = ReactDOM.createPortal(el, root.current)

    return isOpen ?
        el :
        null


}
