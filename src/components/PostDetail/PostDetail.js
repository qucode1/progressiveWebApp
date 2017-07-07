import React from 'react'
import Post from '../Post/Post'

import posts from '../../blog-posts.json'

const PostDetail = function (props, { match }) {
  const matchingPost = posts.posts.find((post) => post.slug === props.match.params.slug)
  return (
    <div>
      <Post {...matchingPost} details />
    </div>
  )
}
export default PostDetail
