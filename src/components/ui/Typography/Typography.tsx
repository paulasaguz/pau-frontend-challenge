import cn from 'classnames';
import s from './Typography.module.css';

import { TypographyInterface } from './types';

const Typography = ({ Tag, variant, children, className }: TypographyInterface): JSX.Element => {
  const heading = 'text-font text-2xl text-center font-medium lg:text-3xl lg:font-normal sm:text-left';
  const body = 'text-base font-medium text-center sm:text-left lg:font-normal';
  const subHeading = 'text-base font-medium';

  return (
    <Tag
      className={cn(
        s.root,
        {
          [heading]: variant === 'heading',
          [body]: variant === 'body',
          [subHeading]: variant === 'subHeading',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
