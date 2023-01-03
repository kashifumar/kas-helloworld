'use client';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function DisplaySoccer(){
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push('soccer/players')}>Players</button>
      <ul>
      <li><Link href="/chelsea">Chelsea</Link></li>
      <li><Link href="/real-madrid">Real Madrid</Link></li>
      <li><Link href="/">Home</Link></li>
      </ul>
    </div>
  );
}