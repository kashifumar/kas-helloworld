import Link from 'next/link';
export default function DisplayTeam({params}:{
  params:{name:string},
}){
  return (
    <div>
      This is the page for the Team {params.name}
      <ul>
        <li>
        <Link href="/soccer">Soccer</Link>
        <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}