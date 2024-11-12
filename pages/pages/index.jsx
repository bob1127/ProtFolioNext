// pages/blog/index.jsx
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export async function getStaticProps() {
  const postsRes = await fetch(
    "https://zensorrd.com/portfolio/wp-json/wp/v2/posts?_embed"
  );
  const categoriesRes = await fetch(
    "https://zensorrd.com/portfolio/wp-json/wp/v2/categories"
  );
  const tagsRes = await fetch(
    "https://zensorrd.com/portfolio/wp-json/wp/v2/tags"
  );

  const posts = await postsRes.json();
  const categories = await categoriesRes.json();
  const tags = await tagsRes.json(); // 獲取標籤數據

  return {
    props: {
      posts,
      categories,
      tags, // 將標籤傳遞給組件
    },
    revalidate: 10, // 每隔10秒重新生成
  };
}

const Blog = ({ posts, categories, tags }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  return (
    <div className=" flex border border-black justify-center w-full flex-col">
      <section className="section_Hero overflow-hidden relative">
        <div className="cover absolute top-0 left-0  w-full h-full bg-black z-[999] opacity-50"></div>
        <Image
          src="/images/精選案例-極客網頁設計.png"
          alt=""
          loading="eager"
          width={2000}
          height={1080}
        ></Image>
        <div className="txt absolute z-[999999999999] left-[10%] top-[20%] ">
          <h1 className="text-white">精選專案</h1>
          <div className="btn-wrap">
            <button className="bg-white">Clik Me</button>
          </div>
        </div>
      </section>

      <section className="section_projects_content flex md:flex-row flex-col mt-10">
        <div className="side_tabs p-10 w-full md:w-[20%]">
          {/* Category Tabs */}
          <div className="border-b-2 py-3 mb-3 border-black">
            <b className="text-[24px]">分類項目</b>
          </div>
          <div className="tabs flex flex-col overflow-scroll">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`tab ${selectedCategory === null ? "active" : ""}`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`tab ${
                  selectedCategory === category.id ? "active" : ""
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="projects pt-10 pl-3 pr-8 w-full md:w-[80%]">
          <div className="border-b-2 py-3 mb-3 border-black">
            <b className="text-[24px]">專案項目 / 精選網頁設計</b>
          </div>
          <ul className=" flex flex-wrap  w-full ">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <div className=" w-[400px] md:w-[330px]">
                  <Link href={`/blog/${post.id}`}>
                    <motion.li
                      key={post.id}
                      className=" scale-100 p-4  hover:scale-105 rounded-xl h-[400px]  "
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      {post._embedded?.["wp:featuredmedia"]?.[0]
                        ?.source_url && (
                        <div className="w-full h-[200px]  overflow-hidden">
                          <img
                            src={
                              post._embedded["wp:featuredmedia"][0].source_url
                            }
                            alt={post.title.rendered}
                            className="  duration-700 hover:scale-105"
                          />
                        </div>
                      )}
                      <p className="text-[18px] mt-3">{post.title.rendered}</p>
                      {/* Show Tags */}
                      <p className="tag">
                        {post.tags?.map((tagId) => {
                          const tag = tags.find((t) => t.id === tagId);
                          return tag ? (
                            <span key={tag.id} className="tag-item">
                              {tag.name}
                            </span>
                          ) : null;
                        })}
                      </p>
                    </motion.li>
                  </Link>
                </div>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </section>

      {/* Posts Gallery with Animation */}

      {/* Styles for Tabs and Gallery */}
      <style jsx>{`
        .tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .tab {
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
          background-color: #f1f1f1;
        }
        .tab.active {
          background-color: #333;
          color: #fff;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        .gallery-item {
          border: 1px solid #ccc;
          padding: 1rem;
          border-radius: 5px;
          background-color: #fff;
          overflow: hidden;
        }
        .featured-image {
          width: 100%;
          height: auto;
          border-radius: 5px;
          margin-bottom: 1rem;
        }
        .tag {
          margin-top: 0.5rem;
          color: #666;
        }
        .tag-item {
          display: inline-block;
          margin-right: 0.5rem;
          padding: 0.2rem 0.5rem;
          border: 1px solid #ccc;
          border-radius: 3px;
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
};

export default Blog;
