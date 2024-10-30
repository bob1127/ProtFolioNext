import axios from "axios";

export default function Post({ post }) {
  if (!post) {
    return <div>No post found.</div>;
  }

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await axios.get(
    "https://zensorrd.com/portfolio/wp-json/wp/v2/posts"
  );
  const posts = res.data;

  // 创建路径
  const paths = posts.map((post) => ({
    params: { slug: post.slug }, // 确保 slug 正确
  }));

  return {
    paths,
    fallback: true, // 允许动态生成未预渲染的页面
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const res = await axios.get(
      `https://zensorrd.com/portfolio/wp-json/wp/v2/posts?slug=${slug}`
    );
    const post = res.data[0]; // 获取返回的第一篇帖子

    return {
      props: {
        post: post || null, // 如果未找到帖子，返回 null
      },
      revalidate: 10, // 每 10 秒重新验证
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      props: {
        post: null, // 返回 null 以处理未找到的情况
      },
    };
  }
}
