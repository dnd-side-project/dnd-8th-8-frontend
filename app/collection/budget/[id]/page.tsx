import { ParamsProps } from '@/types/param'

const DetailBudget = ({ params: { id } }: ParamsProps) => {
  console.log(id)
  return <div>detail budget page</div>
}

export default DetailBudget
