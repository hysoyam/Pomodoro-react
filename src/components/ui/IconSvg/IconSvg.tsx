/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import style from './iconsvg.module.css'

import { ReactComponent as ArrowDownIcon } from '../../../static/images/icons/arrow-down.svg'
import { ReactComponent as ArrowUpIcon } from '../../../static/images/icons/arrow-up.svg'
import { ReactComponent as DeleteIcon } from '../../../static/images/icons/delete.svg'
import { ReactComponent as EditIcon } from '../../../static/images/icons/edit.svg'
import { ReactComponent as PlusIcon } from '../../../static/images/icons/plus.svg'
import { ReactComponent as MoreIcon } from '../../../static/images/icons/more.svg'
import { ReactComponent as StatsIcon } from '../../../static/images/icons/stats.svg'
import { ReactComponent as ZoomInIcon } from '../../../static/images/icons/zoom-in.svg'
import { ReactComponent as ZoomOutIcon } from '../../../static/images/icons/zoom-out.svg'
import { ReactComponent as ClockBg } from '../../../static/images/clock-bg.svg'
import { ReactComponent as FocusBg } from '../../../static/images/focus-bg.svg'
import { ReactComponent as StopsBg } from '../../../static/images/stops-bg.svg'
import { ReactComponent as Logo } from '../../../static/images/logo.svg'
import { ReactComponent as PomodoroSm } from '../../../static/images/pomodoro-sm.svg'
import { ReactComponent as Pomodoro } from '../../../static/images/pomodoro.svg'

const icons = {
    ArrowDownIcon,
    ArrowUpIcon,
    DeleteIcon,
    EditIcon,
    PlusIcon,
    MoreIcon,
    StatsIcon,
    ZoomInIcon,
    ZoomOutIcon,
    ClockBg,
    FocusBg,
    StopsBg,
    Logo,
    PomodoroSm,
    Pomodoro
}

export type IconNames = keyof typeof icons

// enum IconNames {
//     'ArrowDownIcon',
//     'ArrowUpIcon',
//     'DeleteIcon',
//     'EditIcon',
//     'PlusIcon',
//     'MoreIcon',
//     'StatsIcon',
//     'ZoomInIcon',
//     'ZoomOutIcon',
//     'ClockBg',
//     'FocusBg',
//     'StopsBg',
//     'Logo',
//     'PomodoroSm',
//     'Pomodoro',
// }

interface props {
    IconName: IconNames
}
export function IconSvg({ IconName }: props) {

    // TEMP
    // if (!IconName) return null

    const Icon = icons[IconName]
    return (
        <Icon />
    )
} 