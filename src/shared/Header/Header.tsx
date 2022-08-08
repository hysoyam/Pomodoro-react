import React from 'react'
import { IconSvg } from '../ui/IconSvg'
import style from './header.css'

export function Header() {
    return (
        <div className={style.header}>
            <a href="/">
                {/* logo */}
                <IconSvg />
                pomodoro_box
            </a>

            <nav>
                <a href="/stats">
                    {/* stats */}
                    <IconSvg />
                    Статистика
                </a>
            </nav>
        </div>
    )
}
