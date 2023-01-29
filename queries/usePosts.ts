import { useQuery } from '@tanstack/react-query'

interface Post {
  userId: number
  id: number
  title: string
}

const fetchPosts = async (limit = 10) => {
  const parsed: Post[] = await (
    await fetch('https://jsonplaceholder.typicode.com/posts')
  ).json()

  return parsed.filter((x) => x.id <= limit)
}

const usePosts = (limit: number) => {
  return useQuery({
    queryKey: ['posts', limit],
    queryFn: () => fetchPosts(limit),
  })
}

export { fetchPosts, usePosts }
