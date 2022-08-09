import React from 'react';
import clsx from 'clsx';
import Spinner from '../Spinner';

export type ButtonVariant = 'primary' | 'ghost' | 'text';
export type ButtonColor = 'default' | 'red' | 'blue' | 'green' | 'yellow';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  buttonText: string;
  isLoading: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      color = 'default',
      buttonText,
      isLoading,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'rounded-md py-1 px-4',
          {
            'bg-staples-grey': variant === 'primary' && color === 'default',
            'bg-staples-blue': variant === 'primary' && color === 'blue',
            'bg-staples-red': variant === 'primary' && color === 'red',
            'bg-green-200': variant === 'primary' && color === 'green',
            'bg-yellow-200': variant === 'primary' && color === 'yellow',
          },
          {
            'border border-staples-grey':
              variant === 'ghost' && color === 'default',
            'border border-yellow-500':
              variant === 'ghost' && color === 'yellow',
            'border border-staples-red': variant === 'ghost' && color === 'red',
            'border border-staples-blue':
              variant === 'ghost' && color === 'blue',
            'border border-green-500': variant === 'ghost' && color === 'green',
          },
          {
            'bg-transparent': variant === 'text',
            'hover:bg-staples-grey': variant === 'text' && color === 'default',
            'hover:bg-staples-blue': variant === 'text' && color === 'blue',
            'hover:bg-staples-red': variant === 'text' && color === 'red',
            'hover:bg-green-200': variant === 'text' && color === 'green',
            'hover:bg-yellow-200': variant === 'text' && color === 'yellow',
          },
          className
        )}
        {...props}
      >
        {isLoading ? <Spinner /> : buttonText}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
