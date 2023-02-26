import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Text } from '@/components'

import { Border, Layout, TabLabelSection, TabLayout } from './Tab.styled'

interface TabItem {
  label: string
  path: string
}

export interface TabProps {
  tabs: TabItem[]
}

const Tab = ({ tabs }: TabProps) => {
  const pathname = usePathname()

  const isActive = (url: string) => !!pathname?.includes(url)

  return (
    <Layout>
      {tabs.map(({ label, path }) => (
        <TabLayout key={path} active={isActive(path)}>
          <Link href={path}>
            <TabLabelSection>
              <Text
                as="h5"
                color={isActive(path) ? 'neutral800' : 'neutral300'}
              >
                {label}
              </Text>

              {isActive(path) && <Border />}
            </TabLabelSection>
          </Link>
        </TabLayout>
      ))}
    </Layout>
  )
}

export default Tab
