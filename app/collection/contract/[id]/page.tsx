/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Button, Header, Icon, Input, Text } from '@/components'
import { Select } from '@/components/Select'
import { optionType } from '@/components/Select/Select.type'
import { Textarea } from '@/components/Textarea'
import { useGetSelectedContractInfo } from '@/queries/contract/useGetSelectedContract'
import { ContractItemType, ContractStatusType } from '@/types/api/contract'
import { imageInfoType } from '@/types/contract'
import { ParamsProps } from '@/types/param'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import {
  AttachedFileSection,
  ButtonSection,
  DateWrapper,
  FormSection,
  ImageSection,
  InfoSection,
  Layout,
  SingleRow,
} from '../contract.styled'

export const CONTRACT_STATUS: optionType[] = [
  { value: 'COMPLETE', label: '계약완료' },
  { value: 'IN_PROGRESS', label: '계약중' },
  { value: 'PROVISIONAL', label: '가계약' },
  { value: 'VERBAL', label: '구두계약' },
]

const DetailContract = ({ params: { id } }: ParamsProps) => {
  const { data } = useGetSelectedContractInfo(id)
  const router = useRouter()
  const fileRef = useRef<HTMLInputElement>(null)
  const [imgInfo, setImgInfo] = useState<imageInfoType>({ name: '', url: '' })
  const [file, setFile] = useState<Blob | string>('')
  const [contractInfo, setContractInfo] = useState<
    Omit<ContractItemType, 'file' | 'id'>
  >({
    title: '',
    contractDate: '',
    contractStatus: '',
    contents: '',
    memo: '',
  })
  const formData = new FormData()
  const handleInputFileBtnClick = () => {
    fileRef.current?.click()
  }
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length) {
      const selectedFile = e.currentTarget.files[0]
      if (selectedFile) {
        setFile(selectedFile)
      }
      const reader = new FileReader()
      reader.readAsDataURL(selectedFile)
      reader.onloadend = () => {
        setImgInfo({ url: reader.result, name: selectedFile.name })
      }
    }
  }

  const handleDeleteImgBtnClick = () => {
    setImgInfo({ name: '', url: '' })
  }

  const handleEditContractBtnClick = () => {
    formData.append('file', file)
    formData.append(
      'data',
      new Blob([JSON.stringify(contractInfo)], {
        type: 'application/json',
      }),
    )
  }
  return (
    <Layout>
      <Header
        title="계약서 수정"
        handleBackBtnClick={() => router.push('/collection/contract')}
      />
      <InfoSection>
        <FormSection>
          <div
            style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}
          >
            <SingleRow>
              <Text as="t3" color="secondary400">
                제목
              </Text>
              <Input
                handleChange={(evt) =>
                  setContractInfo({
                    ...contractInfo,
                    title: evt.currentTarget.value,
                  })
                }
                placeholder="제목을 입력해주세요."
              />
            </SingleRow>
            <SingleRow>
              <Text as="t3" color="secondary400">
                내용
              </Text>
              <Input
                handleChange={(evt) =>
                  setContractInfo({
                    ...contractInfo,
                    contents: evt.currentTarget.value,
                  })
                }
                placeholder="내용을 입력해주세요."
              />
            </SingleRow>
            <SingleRow>
              <Text as="t3" color="secondary400">
                계약날짜
              </Text>
              <DateWrapper>
                <Text as="t3" color="secondary900">
                  {contractInfo.contractDate ? contractInfo.contractDate : ''}
                </Text>
                <Icon name="calendar" color="neutral800" />
              </DateWrapper>
            </SingleRow>
            <SingleRow>
              <Text as="t3" color="secondary400">
                계약상태
              </Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingRight: '0.5rem',
                }}
              >
                <Select
                  options={CONTRACT_STATUS}
                  handleChange={(value) =>
                    setContractInfo({
                      ...contractInfo,
                      contractStatus: value as ContractStatusType,
                    })
                  }
                  selectedValue={contractInfo.contractStatus}
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
          </div>
          <div>
            <Textarea
              placeholder="메모 추가 (100자 이하 작성 가능)"
              handleChange={(evt) =>
                setContractInfo({
                  ...contractInfo,
                  memo: evt.currentTarget.value,
                })
              }
              style={{ height: '15rem' }}
            />
            <ButtonSection style={{ display: 'flex', columnGap: '2rem' }}>
              <Button
                height="5rem"
                fullWidth
                backgroundColor="secondary100"
                onClick={() => console.log('삭제')}
              >
                <Text as="h5" color="secondary900">
                  삭제
                </Text>
              </Button>
              <Button
                height="5rem"
                fullWidth
                onClick={() => console.log('확인')}
              >
                <Text as="h5" color="neutral0">
                  확인
                </Text>
              </Button>
            </ButtonSection>
          </div>
        </FormSection>
      </InfoSection>
    </Layout>
  )
}

export default DetailContract
