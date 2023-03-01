import { Icon, IconName, Text } from '@/components'

import { PAGE_URL } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
      url: `${PAGE_URL.CHECKLIST}`,
      icon: {
        active: 'w-checklist',
        inactive: 'w-checklist-disable',
      },
    },
    {
      title: '서랍함',
      url: `${PAGE_URL.COLLECTION_BUDGET}`,
      icon: {
        active: 'w-collection',
        inactive: 'w-collection-disable',
      },
    },
    {
      title: '홈',
      url: `${PAGE_URL.HOME}`,
      icon: {
        active: 'w-home',
        inactive: 'w-home-disable',
      },
    },
    {
      title: '커뮤니티',
      url: `${PAGE_URL.COMMUNITY}`,
      icon: {
        active: 'w-community',
        inactive: 'w-community-disable',
      },
    },
    {
      title: '설정',
      url: `${PAGE_URL.MYPAGE}`,
      icon: {
        active: 'w-my-page',
        inactive: 'w-my-page-disable',
      },
    },
  ]

  const pathname = usePathname()

  const isRouteActive = (url: string) => !!pathname?.includes(url)

  return (
    <Layout>
      {footerItem.map((item) => {
        return (
          <Link href={item.url} key={item.title}>
            <ItemBox>
              <Icon
                name={
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
