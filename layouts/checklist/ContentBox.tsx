import { Text } from '@/components'
import styled from 'styled-components'

interface ContentBoxProps {
  title: string
  content?: React.ReactNode
  placeholder?: string
  iconSection?: React.ReactNode
}

const ContentBox = ({
  title,
  content,
  placeholder,
  iconSection,
}: ContentBoxProps) => {
  return (
    <Layout>
      <TitleBox>
        <Text as="t3" color="neutral800">
          {title}
        </Text>
      </TitleBox>

      <ContentSection>
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

        <IconSection>{iconSection}</IconSection>
      </ContentSection>
    </Layout>
  )
}

export default ContentBox

const Layout = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

const TitleBox = styled.div`
  min-width: 10rem;
`

const ContentSection = styled.div`
  display: flex;
  align-items: center;
`

const IconSection = styled.div`
  margin-left: 1.4rem;
`
