import React, { ReactNode } from 'react'
import './_style.scss'
type TButton = {
    children: ReactNode;
    className: string
}
const Button: React.FC<TButton> = ({ children, className = '' }) => {
  return (
    <button
      className={`btn-radial gradient-border-btn text-white rounded-md h-[34px] text-center items-center w-[130px] text-[65%]  ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
