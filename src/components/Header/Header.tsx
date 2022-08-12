import React from 'react'
import { Link } from 'react-router-dom'
import { IconSvg } from '../ui/IconSvg'
import style from './header.module.css'

export function Header() {
    return (
        <div className={style.header}>
            <Link to="/" className={style.logo}>
                {/* logo */}
                <IconSvg IconName='Logo' />
                pomodoro_box
            </Link>

            <nav className={style.nav}>
                <Link to="/stats" className={style.link}>
                    {/* stats */}
                    <IconSvg IconName='StatsIcon' />
                    Статистика
                </Link>
            </nav>
        </div>
    )
}
