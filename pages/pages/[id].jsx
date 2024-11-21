import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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
  const router = useRouter();
  const [lightboxDescriptions, setLightboxDescriptions] = useState([]);

  useEffect(() => {
    if (post.content && post.content.rendered) {
      // 將返回的內容解析成 DOM 並提取目標資訊
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content.rendered, "text/html");
      const lightboxElements = doc.querySelectorAll(
        "[data-elementor-lightbox-description]"
      );

      const descriptions = Array.from(lightboxElements).map((element) =>
        element.getAttribute("data-elementor-lightbox-description")
      );

      setLightboxDescriptions(descriptions);
    }
  }, [post.content]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex p-[100px] border border-green-600 justify-center"></div>
  );
};

export default Post;
