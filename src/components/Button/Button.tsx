import React from 'react';
import clsx from 'clsx';
import Spinner from '../Spinner';

export type ButtonVariant = 'primary' | 'ghost' | 'text';
export type ButtonColor = 'default' | 'red' | 'blue';
export type SpinnerIsLoading = true | false;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  buttonText: string;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      color = 'default',
      buttonText,
      isLoading = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'rounded-md py-2.5 px-5 min-w-[10.4375rem] flex justify-center',
          {
            'bg-staples-grey text-white': variant === 'primary' && color === 'default',
            'bg-staples-blue text-white': variant === 'primary' && color === 'blue',
            'bg-staples-red text-white': variant === 'primary' && color === 'red',
          },
          {
            'border hover:bg-staples-grey hover:text-white border-staples-grey text-staples-grey': variant === 'ghost' && color === 'default',
            'border hover:bg-staples-red hover:text-white border-staples-red text-staples-red': variant === 'ghost' && color === 'red',
            'border hover:bg-staples-blue hover:text-white border-staples-blue text-staples-blue': variant === 'ghost' && color === 'blue',
          },
          {
            'bg-transparent': variant === 'text',
            'hover:bg-staples-grey hover:text-white text-staples-grey': variant === 'text' && color === 'default',
            'hover:bg-staples-blue hover:text-white text-staples-blue': variant === 'text' && color === 'blue',
            'hover:bg-staples-red hover:text-white text-staples-red': variant === 'text' && color === 'red',
          },
          className
        )}
        {...props}
      >
        {isLoading ? <Spinner fill="light"/> : buttonText}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
