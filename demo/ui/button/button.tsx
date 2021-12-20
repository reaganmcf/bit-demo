import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export type ButtonProps = {
  /**
   * Set the danger status of the button
   */
  danger?: boolean;

  /**
   * Set the disabled state of the button
   */
  disabled?: boolean;

  /**
   * Can be set to `default` `primary` `text` or `link`
   */
  type?: 'default' | 'primary' | 'text' | 'link';

  /**
   * Callback when the button is clicked
   */
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  danger = false,
  type = 'default',
  disabled = false,
  children,
}) => {
  const classes = cx('button', {
    [`button-${type}`]: type,
    [`button-${type}-dangerous`]: danger
  });

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
