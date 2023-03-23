import type { ComponentProps } from 'react'
import Image from 'next/image'

import { Button } from '../Button/Button'
import { Badge } from '../Badge/Badge'

import StarSvg from './star.svg'

import styles from './Card.module.css'
import { priceRu } from '@/helpers'

type CardProps = {
  id: string
  imageUrl: string
  badge?: ComponentProps<typeof Badge>
  count: number
  type: string
  price: number
}

export const Card = ({ imageUrl, badge, count, type, price }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {badge && <Badge {...badge} />}
        <div style={{ flex: 1 }} />
        <StarSvg />
      </div>
      <Image src={imageUrl} alt="brick" width={145} height={86} />
      <div className={styles.description}>
        <span className={styles.title}>Кирпич облицовочный M95 Воткинский</span>
        <div>
          <div className={styles.count}>Кол-во на поддоне, шт. - {count}</div>
          <div className={styles.type}>{type}</div>
        </div>
        <div className={styles.links}>
          <Button typeBtn="link">бесплатная доставка</Button>
          <Button typeBtn="link">в наличии</Button>
        </div>
        <div className={styles.price}>
          {priceRu(price)} <small>/ шт</small>
        </div>
        <Button typeBtn="button" variant="default" fluid>
          Купить в 1 клик
        </Button>
      </div>
    </div>
  )
}
