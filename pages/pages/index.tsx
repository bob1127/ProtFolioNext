import Link from "next/link";
import axios from "axios";

export default function Home({ posts }) {
  if (!Array.isArray(posts)) {
    return <div>No posts available.</div>; // 处理非数组情况
  }

  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              <Link href={`/posts/${post.slug}`}>{post.title.rendered}</Link>

              {/* 使用 slug 作为链接 */}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get(
      "https://zensorrd.com/portfolio/wp-json/wp/v2/posts"
    );
    const posts = res.data;

    console.log("Fetched posts:", posts);
    console.log("Posts type:", Array.isArray(posts));

    // 检查 posts 是否为数组
    if (!Array.isArray(posts) || posts.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        posts,
      },
      revalidate: 10, // 每 10 秒重新验证
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [], // 返回空数组以避免 undefined 错误
      },
    };
  }
}
