import React from 'react'
import style from './statistics.module.css'

export function Statistics({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {

    // const labels = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    // const test = [1, 2, 5, 1, 2, 3, 4]

    const classNames = [className, style.today].join(' ')
    return (
        <div className={classNames} {...props} >
            stats
            {/* react-chartjs-2? */}
            {/* chartjs ,,?? */}
        </div>
    )
}
