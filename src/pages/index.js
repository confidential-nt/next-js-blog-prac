import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { CONSTANTS } from "@/constants/constants";
import Layout from "@/components/layout";

export default function Home({}) {
  return (
    <Layout>
      <Head>
        <title>{CONSTANTS.siteName}</title>
      </Head>
      <div className={styles.content}>
        <Image
          className={styles.mainImage}
          src="/images/cat.jpg"
          alt="main image"
          width={270}
          height={300}
          priority
        />
        <p className={styles.introduce}>
          안녕하세요? <br />
          이것은 <br />
          <span className={styles.highlight}>제</span>
          <br />
          <span className={styles.highlight}>블로그</span> 입니다.
        </p>
      </div>
    </Layout>
  );
}
