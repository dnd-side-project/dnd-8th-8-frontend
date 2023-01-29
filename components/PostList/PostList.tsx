import { useState } from 'react'

import { usePosts } from '@/queries/usePosts'

import { PostListProps } from './PostList.types'

const PostList = ({ children }: PostListProps) => {
  const [postCount, setPostCount] = useState(10)
  const { data, isLoading, isFetching } = usePosts(postCount)

  if (isLoading) return <div>Loading</div>

  return (
    <>
      {isFetching ? 'Loading...' : 'Show More'}

      <ul>
        {data?.map((post, index) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href="#">{post.title}</a>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setPostCount(postCount + 10)}
        disabled={isFetching}
      >
        {isFetching ? 'Loading...' : 'Show More'}
      </button>

      {children}
    </>
  )
}

export default PostList
