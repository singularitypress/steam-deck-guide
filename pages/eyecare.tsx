import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";

// Import the generated Lists API and types from Keystone
import Head from "next/head";
import { useEffect, useState } from "react";

type THero = {
  id: string;
  title: string;
  subTitle?: string;
  ctaText?: string;
  ctaURL?: string;
  bgLight?: {
    publicUrlTransformed: string;
  };
  bgDark?: {
    publicUrlTransformed: string;
  };
  slug: string;
};

// Home receives a `posts` prop from `getStaticProps` below
export default ({ hero }: { hero: THero }) => {
  const defaultScreenTime = 900;
  const startIcon = "https://i.imgur.com/uxjKHdL.png";
  const endIcon = "https://i.imgur.com/kzzntlY.png";

  const [isEnabled, setIsEnabled] = useState(false);
  const [focus, setFocus] = useState<"screen" | "relax">("screen");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [time, setTime] = useState(defaultScreenTime);

  const toggle = () => {
    setIsEnabled(!isEnabled);
  };

  const update = () => {
    setTime((time) => time - 1);
  };

  const startTimer = () => {
    if (isEnabled) {
      setIntervalId(setInterval(update, 1000));
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIntervalId(undefined);
  };

  useEffect(() => {
    if (isEnabled) {
      if (focus === "screen" && time === 0) {
        setFocus("relax");
        new Notification("Relax time start", {
          body: "Will conclude in 20 seconds",
          icon: endIcon,
        });
      } else if (focus === "relax" && time === 0) {
        setFocus("screen");
        new Notification("Screen time start", {
          body: `Will conclude in ${defaultScreenTime / 60} minutes`,
          icon: startIcon,
        });
      }
    }
  }, [time]);

  useEffect(() => {
    if (isEnabled) {
      stopTimer();

      setTime(focus === "screen" ? defaultScreenTime : 20);

      startTimer();
    }
  }, [focus]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
    if (isEnabled) {
      Notification.requestPermission().then((result) => {
        if (result === "granted") {
          startTimer();
        }
      });
    } else {
      stopTimer();
      setTime(defaultScreenTime);
    }
  }, [isEnabled]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="w-full pt-8">
        <div className="container mx-auto">
          <h1 className="font-bold text-6xl">
            {isEnabled ? "Press End to stop" : "Press Start to begin"}
          </h1>
          <button
            className="px-8 py-2 border-4 font-bold rounded-full mt-4 border-eerie-black hover:bg-eerie-black hover:text-isabelline dark:border-isabelline hover:dark:bg-isabelline hover:dark:text-eerie-black"
            onClick={toggle}
          >
            {isEnabled ? "End" : "Start"}
          </button>
          {isEnabled && (
            <h1
              className={
                focus === "screen"
                  ? "text-6xl font-bold mt-6 px-16 py-8 rounded-md bg-fiery-rose"
                  : "text-6xl font-bold mt-6 px-16 py-8 rounded-md bg-medium-state-blue"
              }
            >
              {`${focus} -> ${time}`}
            </h1>
          )}
        </div>
      </main>
    </>
  );
};
