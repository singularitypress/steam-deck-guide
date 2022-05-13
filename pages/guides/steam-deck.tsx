import { sequentialFadeIn } from "@client";
import { Container } from "@components/atomic";
import { Cards } from "@components/organisms";
import { MarkdownApi } from "@lib";
import { IPost } from "@types";
import React, { useEffect } from "react";

interface IProps {
  posts: IPost[];
}

export default ({ posts }: IProps) => {
  useEffect(() => {
    sequentialFadeIn("load");
  }, []);

  return (
    <Container>
      <h1 className="load load-animate">Steam Deck Guides</h1>
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

export const getStaticProps = async () => {
  const { getAllPosts } = new MarkdownApi(["steam-deck"]);

  const posts = getAllPosts(["slug", "title", "og", "section"]);

  return {
    props: {
      posts,
    },
  };
};
