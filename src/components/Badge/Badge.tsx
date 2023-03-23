import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

import styles from './Badge.module.css'

type BadgeProps = ComponentPropsWithoutRef<'div'> & {
  text: string
  type?: 'success' | 'danger' | 'warning'
}

export const Badge = ({ text, type = 'warning', className, ...props }: BadgeProps) => {
  return (
    <div className={clsx(styles.badge, className, styles[type])} {...props}>
      {text}
    </div>
  )
}
