import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './button.module.scss'

export const Button = ({ children, type = 'primary', href = '#', withIcon = null }) => {
  return (
    <>
    {withIcon ? (
      <Link href={href}>
        <div className={styles['button-container']}>
          <a className={classNames(styles['button'], styles[`button-${type}`])}>
            {withIcon}
            {children}
          </a>
        </div>
      </Link>
    ) : (
      <Link href={href}>
        <a className={classNames(styles['button'], styles[`button-${type}`])}>{children}</a>
      </Link>
      )
    }
    </>
  )
}
