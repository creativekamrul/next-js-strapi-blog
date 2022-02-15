import React from "react";
import styles from "@/Styles/SinglePost.module.css";
import Layout from "@/Components/Layout";
import { API_BASE_URL } from "@/config/index";
export default function SinglePost({ postData }) {
  const { Title, PublishDate, Image, Content } = postData.attributes;
  return (
    <Layout>
      <div className="container">
        <div
          className={styles.hero}
          style={{
            backgroundImage: `url(${Image.data.attributes.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2>{Title}</h2>
            <h3>Publish Date: {PublishDate}</h3>
          </div>
        </div>
        <div className={styles.content}>
          <p>{Content}</p>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await fetch(`${API_BASE_URL}/api/blog-posts?populate=%2A`);
  const posts = await res.json();
  const paths = posts.data.map((post) => ({
    params: { slug: `${post.id}` },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(
    `${API_BASE_URL}/api/blog-posts/${slug}?populate=%2A`
  );

  const posts = await res.json();
  return {
    props: {
      postData: posts.data,
    },
  };
}
