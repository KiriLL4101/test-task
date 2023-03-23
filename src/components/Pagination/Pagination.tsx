import clsx from 'clsx'

import ArrowLeftSvg from './arrow-left.svg'
import ArrowRightSvg from './arrow-right.svg'

import styles from './Pagination.module.css'
import { useState } from 'react'

type PaginationProps = {
  pages: number
  page: number
  goPage: (num: number) => void
}

export const Pagination = ({ page = 2, pages = 5, goPage = () => null }: PaginationProps) => {
  const [activePage, setActivePage] = useState<number>(page)

  const onNextPage = (num: number) => {
    if (num > pages || num < 1) return
    setActivePage(num)
    goPage(num)
  }

  return (
    <div className={styles.pagination}>
      <span className={styles.arrow} onClick={() => onNextPage(activePage - 1)}>
        <ArrowLeftSvg />
      </span>
      {[...new Array(pages)].map((_, idx) => (
        <button
          key={idx}
          className={clsx({ [styles.active]: activePage === idx + 1 })}
          onClick={() => onNextPage(idx + 1)}>
          {idx + 1}
        </button>
      ))}
      <span className={styles.arrow} onClick={() => onNextPage(activePage + 1)}>
        <ArrowRightSvg />
      </span>
    </div>
  )
}
