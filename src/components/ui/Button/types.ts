import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  active?: boolean;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  label?: string;
  isMobileLayoutAdaptative?: boolean;
  prefetch?: boolean;
  target?: string;
}
