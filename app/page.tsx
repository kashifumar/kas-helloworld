// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link';

export default function Home() {
  return (
    <div>My First NextJS App
      <ul>
      <li>
        <Link href="/name">My Name</Link>
        </li>
        <li>
        <Link href="/soccer">Soccer</Link>
        </li>
      </ul>
          
    </div>
    
)
}
