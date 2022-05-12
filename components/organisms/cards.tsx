import Link from "next/link";
import React from "react";

interface IProps {
  cta: string;
  theme?: string;
  items: {
    title: string;
    tags: string[];
    url: string;
    image: string;
    description: string;
  }[];
}

/**
 *
 * @param theme - This should be a tailwindcss className for changing the colour of the tags.
 * @param cta - This is the text for the link in the card footer
 */
export const Cards = ({ items, cta, theme = "" }: IProps) => {
  return (
    <ul className="cards">
      {items.map(({ title, url, tags, image, description }) => (
        <li className="card">
          <article className="card__container">
            <img className="card__image" src={image} alt={title} />
            <div className="card__header">
              <h2 className="card__title">{title}</h2>
              <h3 className="card__subtitle">{description}</h3>
              <small className={`card__section ${theme}`}>
                {tags.join(", ")}
              </small>
            </div>
            <div className="card__footer">
              <Link href={url}>
                <a>
                  {cta}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </Link>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};
