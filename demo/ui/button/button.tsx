import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Set the danger status of the button
   */
  danger: boolean | undefined,

  /**
   * Set the disabled state of the button
   */
  disabled: boolean | undefined,

  /**
   * Can be set to `primary` `default` or `link`
   */
  type?: 'primary' | 'default' | 'link'
};

export function Button({ danger = false, type = 'default', disabled = false, children, ...rest }) {

  const classes = cx('button', { 'button-dangerous': !!danger, 'button-default': type === 'default' });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
