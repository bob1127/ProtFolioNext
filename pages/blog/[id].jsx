// pages/blog/[id].jsx
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await fetch("https://zensorrd.com/portfolio/wp-json/wp/v2/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://zensorrd.com/portfolio/wp-json/wp/v2/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: { post },
    revalidate: 10,
  };
}

const Post = ({ post }) => {
  return (
    <div className="w-[80%] mx-auto">
      <div>f</div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default Post;
