interface PageProps {
  params: {
    id: string
  }
}

const Page = ({ params: { id } }: PageProps) => {
  return (
    <div>
      <p>Search Id :</p>
      <h3>{id}</h3>
    </div>
  )
}

export default Page
