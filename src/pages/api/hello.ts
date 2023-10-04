// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@/lib/GQLClient'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {data} = await client({
    query: GET_CV_URL
  })
  return
}
