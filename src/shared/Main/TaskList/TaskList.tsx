import React from 'react'
import style from './tasklist.css'

export function TaskList() {
    return (
        <div className={style.tasklist}>
            <h2 className={style.header}>Ура! Теперь можно начать работать:</h2>
            <ul className={style.list}>
                <li className={style.item}>
                    Выберите категорию и напишите название текущей задачи
                </li>
                <li className={style.item}>
                    Запустите таймер («помидор»)
                </li>
                <li className={style.item}>
                    Работайте пока «помидор» не прозвонит
                </li>
                <li className={style.item}>
                    Сделайте короткий перерыв (3-5 минут)
                </li>
                <li className={style.item}>
                    Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
                </li>
            </ul>
            
        </div>
    )
}


