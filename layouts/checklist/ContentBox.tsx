import { Text } from '@/components'
import styled from 'styled-components'

interface ContentBoxProps {
  title: string
  input?: string
  content?: React.ReactNode
  placeholder?: string
  iconSection?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ContentBox = ({
  title,
  input,
  content,
  placeholder,
  iconSection,
  onChange,
}: ContentBoxProps) => {
  return (
    <Layout>
      <TitleBox>
        <Text as="t3" color="neutral800">
          {title}
        </Text>
      </TitleBox>

      <ContentSection>
        {(input || placeholder) && (
          <Input placeholder={placeholder} value={input} onChange={onChange} />
        )}

        {content && content}
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

const Input = styled.input`
  padding: 0.5rem 0;
  margin-top: -0.25rem;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 0.4rem;

  ::placeholder {
    color: ${({ theme }) => theme.color.neutral500};
  }

  :focus {
    border-color: blue;
    outline: 1px solid ${({ theme }) => theme.color.neutral300};
  }
`

const IconSection = styled.div`
  margin-left: 1.4rem;
`
