import { ComponentProps, useMemo, useState } from 'react'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import { Card, Pagination } from '@/components'

import styles from './Home.module.css'

const inter = Inter({ subsets: ['latin'] })

type HomeProps = {
  cards: ComponentProps<typeof Card>[]
}

const PageSize = 6
const PageCount = 4

const Home = ({ cards }: HomeProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  const currentCards = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return cards.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <main className={clsx(inter.className, styles.main)}>
      <div className={styles.wrapper}>
        {currentCards.length > 0 && currentCards.map((item) => <Card key={item.id} {...item} />)}
      </div>
      <Pagination pages={PageCount} page={currentPage} goPage={setCurrentPage} />
    </main>
  )
}

export default Home
