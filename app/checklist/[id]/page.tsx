import { ParamsProps } from '@/types/param'

const DetailChecklist = ({ params: { id } }: ParamsProps) => {
  console.log(id)
  return <div>checklist page</div>
}

export default DetailChecklist
