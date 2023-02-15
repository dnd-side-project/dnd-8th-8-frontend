import { ParamsProps } from '@/types/param'

const DetailContract = ({ params: { id } }: ParamsProps) => {
  console.log(id)

  return <div>detail contract page</div>
}

export default DetailContract
