"use client";

import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

export default function Play() {
  const [counterText, setCounterText] = useState("3");
  const [playCountdown, { sound }] = useSound("/assets/audio/countdown2.wav", {
    volume: 1,
    playbackRate: 2.25,
  });

  const i = useRef(2);

  useEffect(() => {
    if (!sound?.playing()) playCountdown();
    setTimeout(function () {
      if (i.current > 0) {
        setCounterText(String(i.current));
      } else {
        setCounterText("GO!");
      }
      i.current--;
    }, 500);
  }, [counterText]);
  return (
    <div className="font-serif text-9xl font-medium h-36 w-fit">
      {counterText}
    </div>
  );
}
