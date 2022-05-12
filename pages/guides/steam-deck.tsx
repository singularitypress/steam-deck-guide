import { Container } from "@components/atomic";
import { Cards } from "@components/organisms";
import { MarkdownApi, markdownToHtml } from "@lib";
import { IPost } from "@types";
import Link from "next/link";
import React from "react";

interface IProps {
  posts: IPost[];
}

export default ({ posts }: IProps) => {
  return (
    <Container>
      <h1>Steam Deck Guides</h1>
      <br />
      <br />
      <Cards
        cta="View Guides"
        theme="text-medium-state-blue"
        items={posts.map(
          ({ title, slug, section, og: { image, description } }) => ({
            title,
            url: `/guides/steam-deck/${slug}`,
            tags: section.split(","),
            image,
            description,
          }),
        )}
      />
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

  const posts = getAllPosts(["slug", "title", "og", "section"]);

  return {
    props: {
      posts,
    },
  };
};
