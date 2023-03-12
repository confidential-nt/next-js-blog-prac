import Head from "next/head";
import Layout from "@/components/layout";
import { getAllSortedPosts } from "@/utils/posts";
import styles from "../styles/MyPosts.module.css";

export default function MyPosts({ posts }) {
  return (
    <Layout>
      <Head>My Posts</Head>
      <ul className={styles.postItems}>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/my-posts/${post.id}`}>
              <span>{post.title}</span>
              <span>{post.date}</span>
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllSortedPosts("dsc");

  return {
    props: {
      posts,
    },
  };
}
