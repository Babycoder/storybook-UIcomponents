import React, {HTMLAttributes, ReactNode} from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement>{

    children : ReactNode;

    variant : 'primary' | 'secondary';

}

const Button: React.FC<Props>  = ({children, ...props}) => {
    return (
        <button {...props}>
            
        </button>
    )
}

export default Button;
 