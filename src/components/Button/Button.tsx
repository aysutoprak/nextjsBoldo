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
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
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
				<Icon />
				<span className="sr-only">{iconLabel}</span>
			</button>
		);
	}

    return (
      <button
        ref={ref}
        className={clsx(
          'rounded-md px-5 min-w-[10.4375rem] flex justify-center text-center',
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
            'py-0.725rem h-10 px-3.25rem p-2.375rem  text-base leading-.8': size === 'medium' && isLoading === false,
            'py-2 h-10': size === 'medium' && isLoading === true,
            'py-5 h-14 px-12 text-base leading-none ': size === 'large' && isLoading === false,
            'py-3 h-14': size === 'large'&& isLoading === true,
          },
          className
        )}
        {...props}
      >
        {isLoading && size === 'small' ? <Spinner spinnerSize="small" fill="light" /> :
        isLoading && size === 'medium' ? <Spinner spinnerSize="medium" fill="light" /> :
        isLoading && size === 'large' ? <Spinner spinnerSize="large" fill="light" /> :
        buttonText}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
