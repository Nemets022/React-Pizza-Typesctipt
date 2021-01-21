import React from "react"

type ButtonToProps = {
    type?: string
    children: React.ReactNode
}
export const Button: React.FC<ButtonToProps> = ({children, type}) => {
    const cls = ['button']
    switch (type?.toLowerCase()) {
        case 'outline':
            cls.push('button--outline')
            break
        case 'black':
            cls.push('button--black')
            break
        case 'circle':
            cls.push('button--circle')
            break
        case 'add':
            cls.push('button--add')
            break
        case 'cart':
            cls.push('button--cart')
            break
    }

    return <button className={cls.join(' ')}>{children}</button>

}