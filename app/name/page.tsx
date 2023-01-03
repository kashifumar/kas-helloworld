'use client';

import { useRouter } from 'next/navigation';

export default function GiveName(){
  const router = useRouter();
  return (
    <h1>My Name Is Kashif Umar

<br/>
            <button type="button" onClick={() => router.push('/name/address')}>
              Get Address
            </button>
    </h1>
  )
}