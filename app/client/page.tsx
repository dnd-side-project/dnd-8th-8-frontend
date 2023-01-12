'use client'

// import useSWR from 'swr'

// const fetcher = (path: string) =>
//   fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json())

const ClientPage = () => {
  // const characters = useSWR('api/character', fetcher)
  return (
    <div>
      <h2>Client Fetching</h2>
      {/* {characters?.data?.results?.map((char) => (
        <ul key={char.id}>
          <Link
            href={`/static/${char.name}`.replace(/\s+/g, '-').toLowerCase()}
          >
            <li>{char.name}</li>
          </Link>
        </ul>
      ))} */}
    </div>
  )
}

export default ClientPage
