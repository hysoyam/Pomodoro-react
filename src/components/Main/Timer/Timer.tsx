import React, { useState } from 'react'
import { Button } from '../../ui/Button'
import { IconSvg } from '../../ui/IconSvg'
import style from './timer.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store'
import { ClassDeclaration } from 'typescript';


class Clock {
    private time: number = 0;
    interval: NodeJS.Timer | undefined;

    constructor(time: number) {
        this.time = time


        // как избавиться?
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.pause = this.pause.bind(this)
        this.tick = this.tick.bind(this)
    }

    start() {
        clearInterval(this.interval)
        this.interval = setInterval(this.tick, 1000)
        console.log('start');

    }

    stop() {
        clearInterval(this.interval)
        this.time = 0
    }

    pause() {
        clearInterval(this.interval)
    }

    tick() {
        console.log('tick');

        this.time = this.time - 1
        if (this.time <= 0) {
            this.stop()
        }
    }

    set _time(time: number) {
        this.time = time
    }
    get _time() {
        return this.time
    }
}


export function Timer() {

    const timer = useSelector((state: RootState) => state.timer)
    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    let currentTask = tasks.find(el => el.id === timer.activeTaskId)

    if (!currentTask) {
        currentTask = tasks[0]
    }

    const pomidorCount = currentTask?.pomodoros || 1
    const taskTitle = currentTask?.title || 'не добавили'
    const taskNumber = 1
    const currentTimeMinutes = timer.timeLeft.getMinutes() || 0
    const currentTimeSeconds = timer.timeLeft.getSeconds() || 0

    const [mins, setMins] = useState(currentTimeMinutes)
    const [secs, setSecs] = useState(currentTimeSeconds)






    const clock1 = new Clock(180)
    console.log(clock1);


    return (
        <div className={style.timer}>
            <div className={style.header}>
                <span>{taskTitle}</span>
                <span>Помидор {pomidorCount}</span>
            </div>
            <div className={style.clockBody}>
                <div className={style.clock}>
                    <div className={style.time}>{mins}:{secs}</div>
                    <Button className={style.add}><IconSvg IconName='PlusIcon' /></Button>
                    {/* <div className={style.add}><IconSvg IconName='PlusIcon' /></div> */}
                </div>
                <div className={style.title}>
                    <span className={style.taskNumber}>Задача {taskNumber} - </span>{taskTitle}
                </div>
                <div className={style.actions}>
                    <Button onClick={clock1.start}>Старт</Button>
                    <Button onClick={clock1.pause} secondary>Стоп</Button>
                </div>
            </div>
        </div>
    )
}
