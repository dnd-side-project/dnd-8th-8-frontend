'use client'

import { Button, Header, Icon, Input, Text } from '@/components'
import { Select } from '@/components/Select'
import { optionType } from '@/components/Select/Select.type'
import { Textarea } from '@/components/Textarea'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import styled from 'styled-components'

const CONTRACT_STATUS: optionType[] = [
  { value: 1, label: '계약완료' },
  { value: 2, label: '계약중' },
  { value: 3, label: '가계약' },
  { value: 4, label: '구두계약' },
]

interface imageInfoType {
  name: string
  url: string | ArrayBuffer | null
}

const CreateContract = () => {
  const fileRef = useRef<HTMLInputElement>(null)
  const [value, selectedValue] = useState<string | number>('')
  const [imgInfo, setImgInfo] = useState<imageInfoType>({ name: '', url: '' })
  const router = useRouter()
  const handleChange = () => {
    console.log('typing...')
  }

  const handleInputFileBtnClick = () => {
    fileRef.current?.click()
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length) {
      const file = e.currentTarget.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImgInfo({ url: reader.result, name: file.name })
      }
    }
  }

  const handleDeleteImgBtnClick = () => {
    setImgInfo({ name: '', url: '' })
  }

  return (
    <Layout>
      <Header
        title="계약서 생성"
        handleBackBtnClick={() => router.push('/collection/contract')}
      />
      <InfoSection>
        <SingleRow>
          <Text as="t3" color="secondary400">
            제목
          </Text>
          <Input
            handleChange={(e) => console.log(e.currentTarget.value)}
            placeholder="제목을 입력해주세요."
          />
        </SingleRow>
        <SingleRow>
          <Text as="t3" color="secondary400">
            내용
          </Text>
          <Input
            handleChange={(e) => console.log(e.currentTarget.value)}
            placeholder="내용을 입력해주세요."
          />
        </SingleRow>
        <SingleRow>
          <Text as="t3" color="secondary400">
            계약상태
          </Text>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Select
              options={CONTRACT_STATUS}
              handleChange={(value) => selectedValue(value)}
              selectedValue={value}
            />
          </div>
        </SingleRow>
        <AttachedFileSection>
          <div>
            <Text as="t3" color="secondary400">
              첨부 파일
            </Text>
            <Text as="t5" color="neutral500">
              500MB이하의 jpg, pdf 파일만 업로드 가능해요.
            </Text>
            {imgInfo.url && (
              <ImageSection>
                <Image
                  alt="image preview"
                  src={imgInfo.url as string}
                  width={90}
                  height={90}
                />

                <Text as="t5" color="neutral800">
                  {imgInfo.name}
                </Text>
                <div onClick={handleDeleteImgBtnClick}>
                  <Icon name="delete" />
                </div>
              </ImageSection>
            )}
          </div>
          <Button
            height="1.5rem"
            backgroundColor="neutral0"
            onClick={handleInputFileBtnClick}
          >
            <Icon name="file" />
          </Button>
          <input
            type="file"
            style={{ display: 'none' }}
            ref={fileRef}
            onChange={handleFileInputChange}
          />
        </AttachedFileSection>
        <Textarea
          placeholder="메모 추가 (100자 이하 작성 가능)"
          handleChange={handleChange}
          style={{ height: '15rem' }}
        />
        <ButtonSection>
          <Button height="5rem" backgroundColor="secondary100">
            <Text as="h5" color="secondary900">
              삭제
            </Text>
          </Button>
          <Button height="5rem">
            <Text as="h5" color="neutral0">
              확인
            </Text>
          </Button>
        </ButtonSection>
      </InfoSection>
    </Layout>
  )
}

export default CreateContract

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
`

const InfoSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  height: 100%;
  margin-top: 2rem;
`

const AttachedFileSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15rem;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
`

const ImageSection = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: flex-end;

  div {
    width: 1.6rem;
    height: 1.6rem;
  }
`

const ButtonSection = styled.div`
  position: absolute;
  bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  width: 100%;
  padding: 2rem 0;
`

const SingleRow = styled.div`
  display: grid;
  grid-template-columns: 10rem 14rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
