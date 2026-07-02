import type { ReactNode } from 'react'
import styles from './Button.module.css'

export function ButtonIcon({
  position,
  children,
}: {
  position: 'left' | 'right'
  children: ReactNode
}) {
  return (
    <span className={position === 'left' ? styles.iconLeft : styles.iconRight}>
      <span className={styles.icon}>{children}</span>
    </span>
  )
}
