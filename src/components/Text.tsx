import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';
export interface TextProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode;
  asChiled?: boolean;

}
export function Text({ size = 'md', children, asChiled }: TextProps) {
  const Comp = asChiled ? Slot : 'h2'
  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg'
        }
      )}
    >
      {children}
    </Comp>
  )
}