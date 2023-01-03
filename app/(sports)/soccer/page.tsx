'use client';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function DisplaySoccer(){
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push('soccer/players')}></button>
      <ul>
        <li><Link href="/">Home</Link></li>
      </ul>
    </div>
  );
}