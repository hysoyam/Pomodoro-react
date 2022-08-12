import React from 'react'
import style from './today.module.css'
import { SubHeader } from './../../ui/SubHeader/SubHeader';

export function Today({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {

    const timeAtWork = 52
    const dayOfWeek = 'Понедельник'


    const classNames = [style.today, className].join(' ')
    return (
        <div className={classNames} {...props}>
            <SubHeader className={style.header}>{dayOfWeek}</SubHeader>
            <p className={style.text}>
                Вы работали над задачами<br /> в течение <span className={style.time}>{timeAtWork} минут</span>
            </p>
        </div>
    )
}
