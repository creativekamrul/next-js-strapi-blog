import Layout from "@/Components/Layout";
import React from "react";
import { API_BASE_URL } from "@/config/index";
import styles from "@/Styles/AllPosts.module.css";
import PostCard from "@/Components/PostCard";
import Link from "next/link";
const PER_PAGE = 3;

export default function index({ posts, pageNumber, pageCount }) {
  const localPage = pageNumber;
  return (
    <Layout>
      <div className="container">
        <h1 style={{ marginBottom: "60px" }}>All Posts</h1>
        <div className={styles.posts_container}>
          {posts.map((post) => {
            return <PostCard key={post.id} postData={post} />;
          })}
        </div>
        <div className={styles.pagination}>
          {pageNumber <= 1 ? (
            ""
          ) : (
            <button>
              <Link href={`/AllPosts?page=${localPage - 1}`}>Previous</Link>
            </button>
          )}
          {pageCount > pageNumber ? (
            <button>
              <Link href={`/AllPosts?page=${localPage + 1}`}>next</Link>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(
    `${API_BASE_URL}/api/blog-posts?populate=%2A&pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}`
  );

  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts: posts.data,
      pageCount: posts.meta.pagination.pageCount,
      pageNumber: posts.meta.pagination.page,
    },
  };
}
