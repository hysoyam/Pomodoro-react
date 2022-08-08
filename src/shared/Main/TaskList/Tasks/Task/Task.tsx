import React, { useRef } from 'react'
import { Dropdown } from '../../../../ui/Dropdown'
import { IconSvg } from '../../../../ui/IconSvg'
import style from './task.css'


const actions = [
    {
        icon: <IconSvg />,
        text: 'Увеличить',
        action: () => { }
    },
    {
        icon: <IconSvg />,
        text: 'Уменьшить',
        action: () => { }
    },
    {
        icon: <IconSvg />,
        text: 'Редактировать',
        action: () => { }
    },
    {
        icon: <IconSvg />,
        text: 'Удалить',
        action: () => { }
    },
]

export function Task() {

    const dropdownRoot = useRef(null)
    const taskTitle = ''
    const taskAttempst = 0
    return (
        <li className={style.task}>
            <p>{taskAttempst}</p>
            <p>{taskTitle}</p>
            <button ref={dropdownRoot}>
                <IconSvg />
                <Dropdown root={dropdownRoot} actions={actions} />
            </button>
        </li>
    )
}
