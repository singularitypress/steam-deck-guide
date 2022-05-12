import { Container } from "@components/atomic";
import Link from "next/link";
import React, { useState } from "react";

export const Nav = () => {
  const [state, setState] = useState("closed");

  return (
    <>
      <nav className={`nav nav-${state}`}>
        <Container className="nav__container">
          <Link href="/">
            <a className="nav__title">Guides &amp; Documentation</a>
          </Link>
          <i className="fa-solid fa-circle"></i>
          <ul className="nav__list">
            <li>
              <Link href="/guides/steam-deck">Steam Deck</Link>
            </li>
            <li>
              <Link href="/guides/steam-deck">Game Mods</Link>
            </li>
          </ul>
          <ul className="nav__contact">
            <li>
              <Link href="https://github.com/singularitypress/steam-deck-guide">
                <a target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
      <button
        onClick={() => {
          setState(state === "closed" ? "open" : "closed");
        }}
        className={`nav__button nav__button-${state}`}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </>
  );
};
