"use client";

import useSound from "use-sound";
import { Button } from "./components/Button";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMute, setIsMute] = useState(true);
  const [playBgm, { sound }] = useSound("/assets/audio/catch-it.mp3", {
    volume: isMute ? 0 : 1,
    loop: true,
  });

  const toggleMute = () => {
    if (!sound.playing()) {
      playBgm();
    }
    setIsMute(!isMute);
  };

  return (
    <main className="flex flex-col align-middle items-center">
      <span className="font-serif text-8xl font-medium">
        {"What's that"} <i className="italic underline decoration-4">word?</i>
      </span>
      <Link href={"/play"}>
        <Button>Play</Button>
      </Link>
    </main>
  );
}
