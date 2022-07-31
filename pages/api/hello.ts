// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const baseURL = 'https://cnodejs.org/api/v1'

export const getTopics = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { tab, page, limit = 20 } = req.query;
  const data = await fetch(`${baseURL}/topics?tab=${tab}&page=${page}&limit=${limit}`)
  res.status(200).json(data)
}
