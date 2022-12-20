import Head from "next/head";
import { getPost } from "../../lib/posts";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "first-post" } },
      { params: { slug: "second-post" } },
      { params: { slug: "third-post" } },
      { params: { slug: "fourth-post" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await getPost(slug);

  return {
    props: { post },
    // props: {
    //   post: {
    //     title: "This is first post from next app 🔥",
    //     body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    //   },
    // },
  };
}

function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export default PostPage;
