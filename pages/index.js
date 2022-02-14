import styles from "../styles/Home.module.css";
import Layout from "@/Components/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout>
        <div className="container">
          <div className={styles.home_main_div}>
            <h1>Welcome to our Blog</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pulvinar, odio non egestas venenatis, nibh velit mattis turpis,
            </p>
            <button><Link href="/AllPosts">Browse All Posts</Link></button>
          </div>
        </div>
      </Layout>
    </>
  );
}

