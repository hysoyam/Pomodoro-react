import React from 'react'
import style from './stats.module.css'
import { SubHeader } from './../ui/SubHeader';
import { StatsBlock } from './StatsBlock';
import { Today } from './Today';
import { Pomodoros } from './Pomodoros';
import { Statistics } from './Statistics';

export function Stats() {
    return (
        <>
            <div className={style.stats}>
                <div className={style.header}>
                    <SubHeader>Ваша активность</SubHeader>
                    <div className={style.sort}>
                        <li>Эта неделя</li>
                        <li>Прошедшая неделя</li>
                        <li>2 недели назад</li>
                    </div>
                </div>

                <div className={style.activity}>
                    <Today className={style.today} />
                    <Statistics className={style.statistics} />
                    <Pomodoros className={style.pomodoros} />
                    <StatsBlock className={[style.statsBlock, style.statFocus].join(' ')} lable={'Фокус'} value={'27%'} Icon={'FocusBg'} />
                    <StatsBlock className={[style.statsBlock, style.statPause].join(' ')} lable={'Время на паузе'} value={'2ч 30м'} Icon={'ClockBg'} />
                    <StatsBlock className={[style.statsBlock, style.statStops].join(' ')} lable={'Остановки'} value={'14'} Icon={'StopsBg'} />
                </div>
            </div>
        </>
    )
}
