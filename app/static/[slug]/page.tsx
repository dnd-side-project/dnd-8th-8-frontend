const getCharacters = async () =>
  await (await fetch('https://rickandmortyapi.com/api/character')).json()

export const generateStaticParams = async () => {
  const characters = await getCharacters()

  return characters?.results.map((c) => ({
    slug: c?.name.replace(/\s+/g, '-').toLowerCase(),
  }))
}

const SlugPage = ({ params }: any) => {
  return (
    <>
      <h1>The character name is: {params.slug}</h1>
    </>
  )
}

export default SlugPage
