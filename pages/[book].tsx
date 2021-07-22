import { getBooksAndChapters } from '@lib/api'
import { useRouter } from 'next/router'

export default function Book ({ params }) {
  const router = useRouter()
  const { book = null } = router.query

  console.log('->', book, params)

  return <p>Book: {book}</p>
}

export async function getStaticProps({ params, preview = false }) {
  // const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      params
      // post: data?.post ?? null,
      // morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const { data } = await getBooksAndChapters()
  return {
    paths: data.map(({ id }) => `/${id}`) ?? [],
    fallback: false,
  }
}
