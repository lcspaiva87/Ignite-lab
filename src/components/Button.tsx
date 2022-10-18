import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';
export interface ButtonProps {
  children: ReactNode;
  asChiled?: boolean;

}
export function Button({ children, asChiled }: ButtonProps) {
  const Comp = asChiled ? Slot : 'button'
  return (
    <Comp
      className={clsx(
        'py-4 PX-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 focus:ring-2 white',
      )}
    >
      {children}
    </Comp>
  )
}