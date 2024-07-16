import React from 'react';

const Post = React.memo(({ post, onEdit, onDelete }) => {
  console.log('Rendering Post:', post.id);
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </li>
  );
});

export default Post;
