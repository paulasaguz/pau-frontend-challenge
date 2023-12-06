import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import s from './Button.module.css';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = props => {
  const {
    href = '',
    className,
    active,
    label,
    type,
    variant = 'primary',
    disabled = false,
    isMobileLayoutAdaptative = false,
    prefetch = false,
    ...rest
  } = props;

  const rootClassName = cn(
    s.root,
    {
      [s.inverted]: variant === 'primary',
      [s.disabled]: disabled,
      [s.isMobileLayoutAdaptative]: isMobileLayoutAdaptative,
    },
    className
  );

  if (href !== '') {
    return (
      <Link href={href} data-variant={variant} className={rootClassName} prefetch={prefetch} target={props.target}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
