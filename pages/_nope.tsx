import { useRouter } from 'next/router'

export default function Page () {
  const router = useRouter()
  const { param } = router.query

  return <p>Params: {param}</p>
}
