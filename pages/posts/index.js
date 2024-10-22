import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://zensorrd.com/taiwan/wp-json/wp/v2/posts');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>WordPress 文章列表</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
