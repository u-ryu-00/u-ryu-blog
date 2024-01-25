import { cn } from '@/utils/style';
import { ComponentPropsWithoutRef, FC } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

const Button: FC<ButtonProps> = ({ onClick, className, children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full rounded-md bg-gray-800 py-2 text-white transition-all hover:bg-gray-900',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
