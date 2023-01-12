import Link from 'next/link'
import { use } from 'react'

const getCharacters = async () =>
  await (
    await fetch('https://rickandmortyapi.com/api/character', {
      cache: 'no-store',
    })
  ).json()

const ServerPage = () => {
  const Characters = use(getCharacters())

  return (
    <div>
      <h1>ServerPage</h1>

      {Characters.results.map((char: any) => (
        <ul key={char.id}>
          <Link href={`/server/${char.id}`.replace(/\s+/g, '-').toLowerCase()}>
            <li>{char.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  )
}

export default ServerPage
