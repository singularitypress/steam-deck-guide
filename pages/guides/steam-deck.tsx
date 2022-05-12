import { Container } from "@components/atomic";
import { MarkdownApi, markdownToHtml } from "@lib";
import Link from "next/link";
import React from "react";

interface IProps {
  posts: {
    [key: string]: string;
  }[];
}

export default ({ posts }: IProps) => {
  return (
    <Container>
      <h1>Steam Deck Stuff</h1>
      {posts.map((item) => (
        <p>
          <Link href={`/guides/steam-deck/${item.slug}`}>{item.title}</Link>
        </p>
      ))}
    </Container>
  );
};

type Params = {
  params: {
    title: string;
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { getAllPosts } = new MarkdownApi(["steam-deck"]);

  const posts = getAllPosts(["slug", "title"]);

  return {
    props: {
      posts,
    },
  };
};
