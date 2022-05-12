import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { markdownToHtml, MarkdownApi } from "@lib";
import { Container, Markdown } from "@components/atomic";
import { IPost } from "@types";

interface IProps {
  post: IPost;
  morePosts: IPost[];
  preview?: boolean;
}

export default ({ post: { title, og, slug, content, section } }: IProps) => {
  const router = useRouter();
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{title} | Steam Deck Guides</title>
        <meta property="og:image" content={og.image} />
      </Head>
      <Container>
        <div className="article">
          <div className="article__head">
            <ul className="article__tags">
              {section.split(",").map((item) => (
                <li className="article__tag">
                  <small>{item}</small>
                </li>
              ))}
            </ul>
            <div className="article__header">
              <h1>{title}</h1>
              <p>{og.description}</p>
            </div>
            {og.image && <img src={og.image} alt={og.description} />}
          </div>
          <Markdown content={content} />
        </div>
      </Container>
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { getPostBySlug } = new MarkdownApi(["steam-deck"]);
  const post = getPostBySlug(params.slug, [
    "title",
    "link",
    "section",
    "og",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const { getAllPosts } = new MarkdownApi(["steam-deck"]);

  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
