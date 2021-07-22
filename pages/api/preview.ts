import { getBibleMetadata } from "@lib/api"
import { NextApiRequest, NextApiResponse } from "next"

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { apiKey, bibleId } = req.query

  if (apiKey !== process.env.BIBLE_API_KEY || !bibleId) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `bibleId` exists
  const data = await getBibleMetadata(bibleId as string)

  // If the bibleId doesn't exist prevent preview mode from being enabled
  if (!data) {
    return res.status(401).json({ message: 'Invalid bibleId' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  res.json(data);

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/posts/${post.slug}` })
  // const url = `/posts/${post.slug}`
  // res.write(
  //   `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
  //   <script>window.location.href = '${url}'</script>
  //   </head>`
  // )
  // res.end()
}
