import React, { useEffect, useState } from 'react'
import style from './dropdown.module.css'


interface props {
    // root: RefObject<JsxElement> // ???
    // root: React.MutableRefObject<null> // ???
    // root: HTMLButtonElement | null  // ???
    root: React.RefObject<HTMLButtonElement>  // ???
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


    return (
        isOpen ? <ul className={style.dropdown}>
            {actions.map((action) => {
                return <li key={action.text} className={style.item}><button onClick={action.action}>{action.text}</button></li>
            })}
        </ul>
            :
            null)
}
