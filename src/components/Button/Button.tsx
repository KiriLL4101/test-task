import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Button.module.css'

type ButtonProps =
  | {
      typeBtn: 'link'
      variant?: never
      fluid?: never
      children: ReactNode
    }
  | {
      typeBtn: 'button'
      variant?: 'default' | 'success' | 'danger'
      fluid?: boolean
      children: ReactNode
    }

export const Button = (props: ButtonProps & ComponentPropsWithoutRef<'button'>): JSX.Element => {
  const { variant, typeBtn, fluid = false, children, className, ...otherProps } = props

  return (
    <button
      className={clsx(styles[typeBtn], className, variant && styles[variant], styles, {
        [styles.fluid]: fluid,
      })}
      {...otherProps}>
      {children}
    </button>
  )
}
