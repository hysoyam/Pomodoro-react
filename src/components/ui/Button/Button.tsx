import React from 'react'
import style from './button.module.css'

interface props extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    secondary?: boolean
    ref?: any
}
export function Button({ ref, secondary, children, ...props }: props) {

    const classes = secondary ? `${style.button} ${style.buttonSecondary}` : `${style.button} ${style.buttonPrimary}`

    return (
        <button className={classes} {...props} ref={ref}>
            {children}
        </button>
    )
} 