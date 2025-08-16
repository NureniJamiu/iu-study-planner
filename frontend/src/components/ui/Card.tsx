import { cn } from '@/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Content: React.FC<CardContentProps>;
  Footer: React.FC<CardFooterProps>;
} = ({ children, className, padding = 'md' }) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white shadow-sm',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn('mb-4 space-y-1.5', className)}>
      {children}
    </div>
  );
};

const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return <div className={cn('space-y-4', className)}>{children}</div>;
};

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={cn('mt-4 flex items-center justify-end space-x-2', className)}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
