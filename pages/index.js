import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Next Js blog Application</title>
        <meta name="description" content="This is next js blog app" />
      </Head>
      <main>
        <h1>Next JS Blog Application 🎇</h1>
        <ul>
          <li>
            <Link href="/posts/first-post">First Post</Link>
          </li>
          <li>
            <Link href="/posts/second-post">Second Post</Link>
          </li>
          <li>
            <Link href="/posts/third-post">Third Post</Link>
          </li>
          <li>
            <Link href="/posts/fourth-post">Fourth Post</Link>
          </li>
        </ul>
        <style jsx>
          {`
            li {
              margin: 10px 0;
            }
          `}
        </style>
      </main>
    </>
  );
}

export default Home;
