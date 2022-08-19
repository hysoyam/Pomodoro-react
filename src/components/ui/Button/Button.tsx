import React from 'react'
import style from './button.module.css'

interface props extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    secondary?: boolean
    reference?: any
}
export function Button({ reference: customRef, secondary, children, ...props }: props) {

    const classes = []

    // onlyText ? classes.push(style.buttonText) : classes.push(style.button)
    classes.push(style.button)
    secondary ? classes.push(style.buttonSecondary) : classes.push(style.buttonPrimary)

    // const classes = secondary ? `${style.button} ${style.buttonSecondary}` : `${style.button} ${style.buttonPrimary}`

    const classList = classes.join(' ')
    return (
        <button className={classList} {...props} ref={customRef}>
            {children}
        </button>
    )
} 