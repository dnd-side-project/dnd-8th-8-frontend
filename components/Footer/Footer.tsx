import Link from 'next/link'

import { Icon, IconName, Text } from '@/components'

import { useRouter } from 'next/router'
import { ItemBox, Layout } from './Footer.styled'

interface FooterItem {
  title: string
  url: string
  icon: {
    active: IconName
    inactive: IconName
  }
}

const Footer = () => {
  const footerItem: FooterItem[] = [
    {
      title: '체크리스트',
      url: 'checklist',
      icon: {
        active: 'w-checklist',
        inactive: 'w-checklist-disable',
      },
    },
    {
      title: '서랍함',
      url: 'budget',
      icon: {
        active: 'w-collection',
        inactive: 'w-collection-disable',
      },
    },
    {
      title: '홈',
      url: 'home',
      icon: {
        active: 'w-home',
        inactive: 'w-home-disable',
      },
    },
    {
      title: '커뮤니티',
      url: 'community',
      icon: {
        active: 'w-community',
        inactive: 'w-community-disable',
      },
    },
    {
      title: '설정',
      url: 'my-page',
      icon: {
        active: 'w-my-page',
        inactive: 'w-my-page-disable',
      },
    },
  ]

  const router = useRouter()
  const isRouteActive = (url: string) => router.asPath === url

  return (
    <Layout>
      {footerItem.map((item) => {
        return (
          <Link href={item.url} key={item.title}>
            <ItemBox>
              <Icon
                as={
                  isRouteActive(item.url)
                    ? item.icon.active
                    : item.icon.inactive
                }
              />
              <Text
                as="t6"
                color={isRouteActive(item.url) ? 'secondary500' : 'neutral500'}
              >
                {item.title}
              </Text>
            </ItemBox>
          </Link>
        )
      })}
    </Layout>
  )
}

export default Footer
