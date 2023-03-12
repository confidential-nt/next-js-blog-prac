import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import Head from "next/head";
import { CONSTANTS } from "@/constants/constants";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="나의 첫 next.js 블로그 앱" />
        <meta name="og:title" content={CONSTANTS.siteName} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Image
          className={styles.profileImage}
          src="/images/cat.jpg"
          alt="profile image"
          width={45}
          height={50}
          priority
        />
        <div className={styles.headerRight}>
          <h1 className={styles.title}>
            <Link href="/">confidential-nt's blog</Link>
          </h1>
          <Link className={styles.myPostsLink} href="/my-posts">
            My Posts
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <span>contact: abcd@efg.com</span>
      </footer>
    </div>
  );
}
