import React from 'react'
import { Header } from '../Header'
import style from './stats.css'
import { SubHeader } from './../ui/SubHeader';
import { StatsBlock } from './StatsBlock';
import { Today } from './Today';
import { Pomodoros } from './Pomodoros';
import { Statistics } from './Statistics';

export function Stats() {
    return (
        <>
            <Header />
            <div className={style.stats}>
                <div className={style.header}>
                    <SubHeader text='Ваша активность' />
                    <div className={style.sort}>
                        <li>Эта неделя</li>
                        <li>Прошедшая неделя</li>
                        <li>2 недели назад</li>
                    </div>
                </div>

                <div className={style.activity}>
                <Today/>
                <Pomodoros/>
                <Statistics/>
                <StatsBlock lable={'Фокус'} value={'27%'} icon={''}/>
                <StatsBlock lable={'Время на паузе'} value={'2ч 30м'} icon={''}/>
                <StatsBlock lable={'Остановки'} value={'14'} icon={''}/>
                

                </div>
                <div className={style.stats}></div>
            </div>
        </>
    )
}
