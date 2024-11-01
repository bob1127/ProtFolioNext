// pages/blog/index.jsx
import React from "react";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://zensorrd.com/portfolio/wp-json/wp/v2/posts");
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
      {/* <ul>
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`}>
            <li key={post.id}>
              <h2>
                <a>{post.title.rendered}</a>
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </li>
          </Link>
        ))}
      </ul> */}
    </div>
  );
};

export default Blog;
