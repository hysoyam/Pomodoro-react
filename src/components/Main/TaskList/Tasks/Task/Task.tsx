import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ITask, tasksSlice } from '../../../../../store/tasksSlice'
import { Button } from '../../../../ui/Button'
import { Dropdown } from '../../../../ui/Dropdown'
import { IconSvg } from '../../../../ui/IconSvg'
import style from './task.module.css'


export function Task({ task }: { task: ITask }) {

    const dispatch = useDispatch()
    const dropdownRoot = useRef<HTMLDivElement>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        setIsEditing(true)
    }

    const actions = [
        {
            icon: <IconSvg IconName='ZoomInIcon' />,
            text: 'Увеличить',
            hide: false,
            action: () => { dispatch(tasksSlice.actions.increaseTimerById(task.id)) }
        },
        {
            icon: <IconSvg IconName='ZoomOutIcon' />,
            text: 'Уменьшить',
            hide: false,
            action: () => { dispatch(tasksSlice.actions.decreaseTimerById(task.id)) }

        },
        {
            // можно заменить текст на инпут и по окончании ввода задиспатчить значение
            icon: <IconSvg IconName='EditIcon' />,
            text: 'Редактировать',
            action: () => { dispatch(tasksSlice.actions.editById({ id: task.id, value: { title: 'значение изменено' } })) }
        },
        {
            icon: <IconSvg IconName='DeleteIcon' />,
            text: 'Удалить',
            action: () => { dispatch(tasksSlice.actions.deleteById(task.id)) }

        },
    ]

    return (
        <li className={`${style.task} ${task.done && style.taskDone}`}>
            {/* можно убрать счетчик если готово  или добавить галочку*/}
            {/* {!task.done && <p className={style.number}>{task.pomodoros}</p>} */}
            <p className={style.number}>{task.pomodoros}</p>
            <p className={style.title}>{task.title}</p>
            {task.done && <p className={style.doneBlock}>
                <Button className={style.doneBtn} onClick={() => { dispatch(tasksSlice.actions.deleteById(task.id)) }} >Задание готово, убрать его?</Button>
            </p>}
            <div className={style.dropdown}>

                {/* <button ref={dropdownRoot} id='test-btn'>Test</button> */}
                <div  >

                    <Button reference={dropdownRoot} className={style.more} >
                        <IconSvg IconName='MoreIcon' />
                    </Button>
                    <Dropdown root={dropdownRoot} actions={actions} />
                </div>

            </div >
            {/* fake input */}
            {isEditing && <input type={'text'} onChange={onChange} value={inputValue} />}

        </li >
    )
}
