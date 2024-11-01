// pages/blog.js
import React from 'react';

export async function getStaticProps() {
  const res = await fetch('https://zensorrd.com/portfolio/wp-json/wp/v2/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10, // 每隔10秒重新生成
  };
}

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
