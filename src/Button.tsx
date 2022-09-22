import React, {HTMLAttributes, ReactNode} from 'react'


export interface Props extends HTMLAttributes<HTMLButtonElement>
{
    children : ReactNode;
    type : 'primary' | 'secondary' | 'inline';
}

const style = {
    
    primary : `bg-[#00df9a] w-[200px] rounded font-medium my-4 mx-auto py-2 text-black`,

    secondary : `bg-[#000300] w-[200px] rounded font-medium my-3 md:mx-0 mx-auto py-2 text-[#00df9a]`,
}

const Button: React.FC<Props>  = ({children, type = 'primary', ...props}) => {
    return (
        <button className={` ${type === 'primary' ? style.primary : style.secondary} `} {...props}>
            {children}
        </button>
    )
}

export default Button
