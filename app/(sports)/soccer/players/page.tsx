import Link from 'next/link';

export default function DisplayPlayers(){
  return(
    <div>
    <h2>PLAYERS</h2>
    <ul>
    <li>Ronaldo</li>
    <li>Benzema</li>
    <li><Link href="/soccer">Soccer</Link></li>
    <li><Link href="/">Home</Link></li>
    </ul>
    </div>
  );
}