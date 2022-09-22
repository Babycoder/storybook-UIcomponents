import React, {HTMLAttributes, ReactNode} from 'react'


export interface Props extends HTMLAttributes<HTMLButtonElement>
{
    children : ReactNode;
    ability : boolean;
    type : 'primary' | 'secondary';
}

const style = {
    
    primary : `hover:border-b p-4 `,

    secondary : `hover:border-b p-4 text-white`,

}


const InlineButton: React.FC<Props>  = ({children, type = 'primary', ability = true, ...props}) => {
    return (
        <button className={` ${type === 'primary' ? style.primary : style.secondary} ${ability ? '' : 'cursor-not-allowed'}`} {...props}>
            {children}
        </button>
    )
}

export default InlineButton;
