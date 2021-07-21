import Head from "next/head";
import styles from "../styles/Home.module.css";
import History from "../components/history";
import Link from "next/link";
import absoluteUrl from "next-absolute-url";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aratuba do Terror - As histórias de uma pequena cidade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Aratuba do Terror</h1>
          <h4>As histórias de uma pequena cidade</h4>
        </div>
        <section className={styles.sectionHist}>
          {data && Array.isArray(data) ? (
            data.map((item) => {
              return (
                <History
                  title={item.title}
                  key={item._id}
                  excerpt={[item.excerpt]}
                  slug={item._id}
                />
              );
            })
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

export async function getServerSideProps({ req }) {
  const { protocol, host } = absoluteUrl(req);
  const res = await fetch(`${protocol}//${host}/api/stories`);
  const data = await res.json();
  return { props: { data } };
}
