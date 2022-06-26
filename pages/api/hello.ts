// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const baseURL = 'https://cnodejs.org/api/v1'

export const getTopics = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const data = await fetch(`${baseURL}/topics`)
  res.status(200).json(data)
}
