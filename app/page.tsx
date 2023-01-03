// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link';

export default function Home() {
  return (
    <div>Hello World
      <br/>
          <Link href="/name">Go to name page</Link>
    </div>
    
)
}
