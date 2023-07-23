'use client';

import useSound from 'use-sound';
import { Button } from './components/Button';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMute, setIsMute] = useState(true);
  const [playBgm, { sound }] = useSound('/assets/audio/catch-it.mp3', { volume: isMute ? 0 : 1, loop: true });

  const toggleMute = () => {
    if (!sound.playing()) {
      playBgm();
    }
    setIsMute(!isMute);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12 bg-orange-50">
      <Button onClick={() => toggleMute}>BGM</Button>
      <div className="flex flex-1 flex-col items-center justify-center w-full h-full bg-orange-400 border-black border-4 rounded-[4rem]">
        <span className="font-serif text-8xl font-medium">
          {"What's that"} <i className="italic underline decoration-4">word?</i>
        </span>
        <Link href={'/play'}>
          <Button>Play</Button>
        </Link>
      </div>
    </main>
  );
}
