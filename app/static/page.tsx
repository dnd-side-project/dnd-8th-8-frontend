import Link from 'next/link'
import { use } from 'react'

const getCharacters = async () =>
  await (await fetch('https://rickandmortyapi.com/api/character')).json()

const StaticPage = () => {
  const Characters = use(getCharacters())

  return (
    <div>
      <h1>StaticPage</h1>

      {Characters.results.map((char: any) => (
        <ul key={char.id}>
          <Link
            href={`/static/${char.name}`.replace(/\s+/g, '-').toLowerCase()}
          >
            <li>{char.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  )
}

export default StaticPage
