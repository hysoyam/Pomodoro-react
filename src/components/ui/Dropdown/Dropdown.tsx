import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import style from './dropdown.module.css'

interface props {
    root: React.RefObject<any>
    actions: Array<{
        icon: JSX.Element
        text: string
        action: () => any
        hide?: boolean
    }>
}

export function Dropdown({ root, actions }: props) {

    function handleClickOutside(e: MouseEvent) {
        if (root.current && !root.current.contains(e.target)) {
            SetIsOpen(false)
        }
    }

    const [isOpen, SetIsOpen] = useState(false)

    useEffect(() => {
        root.current && root.current.addEventListener('click', onClick)
        document.addEventListener('click', handleClickOutside)
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

    return isOpen ? el : null
}
