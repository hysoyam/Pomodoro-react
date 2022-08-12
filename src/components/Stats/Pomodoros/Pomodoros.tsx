import React from 'react'
import { IconSvg } from '../../ui/IconSvg'
import style from './pomodoros.module.css'

export function Pomodoros({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    const pomodorosTotal = 0
    const classNames = [className, style.pomodoros].join(' ')

    return (
        <div className={classNames} {...props}>

            {pomodorosTotal > 0 ?
                <IconSvg IconName='Pomodoro' />
                :
                <>
                    <div className={style.image} >
                        <IconSvg IconName='PomodoroSm' /><span className={style.text}> x {pomodorosTotal}</span>
                    </div>
                    <div className={style.footer} >
                        {pomodorosTotal} помидора
                    </div>
                </>
            }

        </div>
    )
}
