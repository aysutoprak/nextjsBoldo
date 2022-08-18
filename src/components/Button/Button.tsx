import React from 'react';
import clsx from 'clsx';
import Spinner from '../Spinner';

export type ButtonVariant = 'primary' | 'ghost' | 'text' |'icon';
export type ButtonColor = 'default' | 'red' | 'blue';
export type SpinnerIsLoading = true | false;
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  buttonText?: string;
  isLoading?: boolean;
  size?: ButtonSize;
  icon?: React.ReactElement;
  iconLabel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      color = 'default',
      buttonText,
      isLoading = false,
      size = 'medium',
      icon: Icon,
      iconLabel = '',
      className,
      ...props
    },
    ref
  ) => {

    if (variant === 'icon' && Icon !== undefined) {
		return (
      <button>
        {Icon}
				<span data-testid="icon-label" className="sr-only">{iconLabel}</span>
			</button>
		);
	}

    return (
      <button
        ref={ref}
        className={clsx(
          'rounded-md px-5 min-w-[10.4375rem] flex justify-center group',
          {
            'disabled:bg-gray-400 disabled:text-gray-600 disabled:border-gray-600' : variant === 'primary',
            'disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-400' : variant === 'ghost',
            'disabled:text-gray-600' : variant === 'text',
          },
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
          {
            'border hover:bg-staples-grey hover:text-white border-staples-grey text-staples-grey': variant === 'icon' && color === 'default',
            'border hover:bg-staples-red hover:text-white border-staples-red text-staples-red': variant === 'icon' && color === 'red',
            'border hover:bg-staples-blue hover:text-white border-staples-blue text-staples-blue': variant === 'icon' && color === 'blue',
          },
          {
            'p-1.5 h-6 text-xs leading-3': size === 'small',
            'py-2 px-12 h-10 text-base': size === 'medium',
            'py-5 h-16 px-12 text-xl leading-none ': size === 'large'
          },
          className
        )}
        {...props}
      >
        {!isLoading && buttonText}
        {isLoading && <Spinner
          size={size}
          fill={variant === 'primary' ? 'light' : 'dark'}
        />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
