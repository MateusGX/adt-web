import Head from "next/head";
import styles from "../styles/HistoryPage.module.css";
import Link from "next/link";
import absoluteUrl from "next-absolute-url";

export default function Slug({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aratuba do Terror - As histórias de uma pequena cidade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <div className={styles.title}>
          <Link href="/">
            <a>
              <h1>Aratuba do Terror</h1>
            </a>
          </Link>
          <h4>As histórias de uma pequena cidade</h4>
        </div>
        <div className={styles.titleHistory}>
          <h3>{data ? data.title : ""}</h3>
        </div>
        <section className={styles.sectionHist}>
          {data ? (
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          ) : (
            <></>
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="https://mateus-am.web.app/">
          <a>Copyright © 2021 Aratuba do Terror</a>
        </Link>
      </footer>
    </div>
  );
}

export async function getServerSideProps({ req, query }) {
  const { protocol, host } = absoluteUrl(req);
  const { slug } = query;
  const res = await fetch(`${protocol}//${host}/api/history/${slug}`);
  const data = await res.json();
  return { props: { data } };
}
