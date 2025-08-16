import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variantClasses = {
      primary:
        'bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600',
      secondary:
        'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus-visible:outline-secondary-600',
      outline:
        'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:outline-gray-600',
      ghost: 'text-gray-900 hover:bg-gray-100 focus-visible:outline-gray-600',
      danger:
        'bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600',
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          widthClass,
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && <LoadingSpinner size="sm" className="mr-2" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
