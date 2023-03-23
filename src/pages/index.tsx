import Head from 'next/head'

import Home from '@/screens/Home/Home'
import type { Card } from '@/helpers/types'

type HomeProps = {
  cards: Card[]
}

export default function HomePage({ cards }: HomeProps) {
  return (
    <>
      <Head>
        <title>Test task</title>
      </Head>
      <Home cards={cards} />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/cards`)

    const data = await response.json()

    return {
      props: { cards: data },
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true,
    }
  }
}
