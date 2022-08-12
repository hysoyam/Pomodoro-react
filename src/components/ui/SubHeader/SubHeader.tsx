import React from 'react'
import style from './subheader.module.css'

export function SubHeader({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) {

    const classNames = [style.subheader, className].join(' ')

    return (
        <h2 className={classNames}>
            {children}
        </h2>
    )
}
