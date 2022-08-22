import React, { useState } from 'react'
import { Button } from '../../ui/Button'
import { IconSvg } from '../../ui/IconSvg'
import style from './timer.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, store } from '../../../store/store'
import { tasksSlice } from '../../../store/tasksSlice';

export function Timer() {

    const dispatch = useDispatch()
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

    const [isStoped, setIsStoped] = useState(false)
    const [isEnded, setIsEnded] = useState(false)
    const [isTouched, setIsTouched] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const [isBreak, setIsBreak] = useState(false)
    const [isAnyTasks, setIsAnyTasks] = useState(false)

    const [mins, setMins] = useState(currentTimeMinutes)
    const [secs, setSecs] = useState(currentTimeSeconds)
    const [nameInterval, setNameInterval] = useState<NodeJS.Timer | null>(null)

    function start() {
        if (nameInterval) return
        setIsPause(false)
        setIsTouched(true)
        setNameInterval(setInterval(tick, 10))
    }

    function stop() {
        nameInterval && clearInterval(nameInterval)
        setNameInterval(null)
        setIsTouched(false)
        reset()
    }

    function pause() {
        setIsPause(true)
        nameInterval && clearInterval(nameInterval)
        setNameInterval(null)
    }

    function tick() {
        setSecs(secs => secs - 1)
    }
    function continueTimer() {
        start()
    }

    function skip() {
        // сбросить перерыв установить таймер заново

        stop()
        setIsBreak(false)
        setIsTouched(false)
    }

    function done() {
        // установить таймер заново
        // взять новое дело?
        stop()
        setIsTouched(false)
    }

    function reset() {
        setMins(25)
        setSecs(0)
    }

    function onEnd() {
        stop()
        console.log('timer end');
        setIsEnded(true)
        setIsTouched(false)
        setIsBreak(isBreak => !isBreak)
        !isBreak && currentTask && dispatch(tasksSlice.actions.decreaseTimerById(currentTask.id))
    }

    function onDownStoped() {
        setIsStoped(true)
    }
    function onUpStoped() {
        setIsStoped(false)
    }
    function addMins() {
        setMins(mins => mins + 1)
    }

    function formatToTwoDigits(number: number): string {
        return number < 10 ? '0' + number : number.toString()
    }

    React.useEffect(() => {
        if (secs < 0) {
            setMins(mins => mins - 1)
            setSecs(10)
        }
        if (mins < 0) {
            setMins(0)
        }

        if (mins <= 0 && secs <= 0) {
            onEnd()
        }

    }, [secs, mins])

    React.useEffect(() => {
        if (isBreak) {
            // set timer to 5-00
            setMins(5)
            setSecs(0)

        } else {
            setMins(25)
            setSecs(0)
        }
    }, [isBreak])

    const timeClasses = `${style.time} ${isTouched && !isPause ? style.timePause : ''} ${isBreak && !isPause ? style.timeBreak : ''} ${isStoped ? style.timeStop : ''}`
    const headerClasses = `${style.header} ${isTouched ? style.headerPause : ''} ${isBreak ? style.headerBreak : ''} ${isStoped ? style.headerStoped : ''}`

    return (
        <div className={style.timer}>
            <div className={headerClasses}>
                <span>{taskTitle}</span>
                <span>Помидор {pomidorCount}</span>
            </div>
            <div className={style.clockBody}>
                <div className={style.clock}>
                    <div className={timeClasses}>
                        <span className={style.timeNumberMins}>{formatToTwoDigits(mins)}</span>
                        <span className={style.timeDevider}>:</span>
                        <span className={style.timeNumberSecs}>{formatToTwoDigits(secs)}</span>
                    </div>
                    <Button className={style.add} onClick={addMins}><IconSvg IconName='PlusIcon' /></Button>
                </div>
                <div className={style.title}>
                    <span className={style.taskNumber}>Задача {taskNumber} - </span>{taskTitle}
                </div>
                {!isBreak ?
                    <div className={style.actions}>
                        {(!isTouched) || isPause ? <Button onClick={start}>Старт</Button> : <Button onClick={pause}>Пауза</Button>}
                        {(!isTouched) || !isPause ?
                            <Button disabled={!isTouched} onClick={stop} onMouseDown={onDownStoped} onMouseUp={onUpStoped} secondary>Стоп</Button>
                            :
                            <Button onClick={done} secondary>Сделано</Button>
                        }
                    </div>
                    :
                    <div className={style.actions}>
                        {(!isTouched) || isPause ? <Button onClick={start}>Старт</Button> : <Button onClick={pause}>Пауза</Button>}
                        <Button onClick={skip} secondary>Пропустить</Button>
                    </div>}
            </div>
        </div>
    )
} 
