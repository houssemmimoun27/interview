import { useCallback, useState, type FC } from 'react'

type PostType = {
  id: number
  userId: number
  title: string
  body: string
}

type PostItemProps = {
  post: PostType
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const { id: PostId } = post
  return (
    <li className="post-card">
      <span>{PostId}</span>
    </li>
  )
}

const Posts: FC = () => {
  const [posts, setPosts] = useState<PostType[]>()
  const [isLoading, setIsLoading] = useState(false)
  const fetchPosts = useCallback((): void => {
    setIsLoading(true)
    try {
      setTimeout(async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        )
        const result = await response.json()
        setPosts(result)
        setIsLoading(false)
      }, 1000)
    } catch (err) {
      console.error(err)
      setIsLoading(false)
    }
  }, [])

  return (
    <div className="posts-container">
      <button onClick={fetchPosts}>Fetch Posts</button>
      {isLoading && <span>Loading...</span>}
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <ul>
        {posts?.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}

export default Posts
