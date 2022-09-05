import React, {HTMLAttributes, ReactNode} from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement>{

    children : ReactNode;

    variant : 'primary' | 'secondary';

}

const Button: React.FC<Props>  = ({children, variant = 'primary', ...props}) => {
    return (
        <button className='bg-gray-400 border rounded' {...props}>
            {children}
        </button>
    )
}

export default Button
 