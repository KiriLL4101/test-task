// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import mock from '../../assets/mock.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<Card[]>) {
  res.status(200).json(mock as Card[])
}
