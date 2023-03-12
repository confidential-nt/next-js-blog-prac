import Layout from "@/components/layout";
import Head from "next/head";
import { CONSTANTS } from "@/constants/constants";
import { findPostByID, getAllPostIDs } from "@/utils/posts";

export default function Post({ content }) {
  return (
    <Layout>
      <Head>
        <title>{CONSTANTS.siteName}</title>
      </Head>
      <article>{content}</article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIDs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = findPostByID(params.id);
  return {
    props: {
      content: post.content,
    },
  };
}
