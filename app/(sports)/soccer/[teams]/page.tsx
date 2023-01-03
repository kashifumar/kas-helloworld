import Link from 'next/link';
export default function DisplayTeam({params, searchParams}:{
  params:{name:string},
  searchParams: { id: string },
}){
  return (
    <div>
      This is the page for the Team {params.name}
      <ul>
        <li>
        <Link href="/soccer">Soccer</Link>
        </li>
        <li>
        <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}