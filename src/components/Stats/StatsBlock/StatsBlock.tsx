import React from 'react'
import style from './statsblock.module.css'
import { IconNames, IconSvg } from './../../ui/IconSvg/IconSvg';
import { SubHeader } from '../../ui/SubHeader';


interface props extends React.HTMLAttributes<HTMLDivElement> {
    lable: string
    value: string
    Icon: IconNames
}
export function StatsBlock({ className, lable, value, Icon, ...props }: props) {

    const classNames = [className, style.statsblock].join(' ')

    return (
        <div className={classNames} {...props}>
            <div className={style.text}>
                <SubHeader>{lable}</SubHeader>
                <p className={style.time}> {value}</p>
            </div>
            <IconSvg IconName={Icon} />
        </div>
    )
}
