import { Text } from '@/components'
import styled from 'styled-components'

interface ContentBoxProps {
  title: string
  content?: string
  placeholder?: string
  rightSection?: React.ReactNode
}

const ContentBox = ({
  title,
  content,
  placeholder,
  rightSection,
}: ContentBoxProps) => {
  return (
    <Layout>
      <TitleBox>
        <Text as="t3" color="neutral800">
          {title}
        </Text>
      </TitleBox>

      {content && (
        <Text as="t3" color="neutral800">
          {content}
        </Text>
      )}

      {placeholder && (
        <Text as="t3" color="neutral500">
          {placeholder}
        </Text>
      )}

      {rightSection}
    </Layout>
  )
}

export default ContentBox

const Layout = styled.div`
  display: flex;
  gap: 1rem;
`

const TitleBox = styled.div`
  min-width: 10rem;
`
