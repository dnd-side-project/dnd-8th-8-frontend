import { Fragment } from 'react'

import { Text } from '@/components'

import { Divider, Layout, MenuItem, MenuLayout } from './Menu.styled'

interface MenuItem {
  label: string
  onClick: () => void
}

export interface MenuProps {
  items: MenuItem[]
}

const Menu = ({ items }: MenuProps) => {
  return (
    <Layout>
      <MenuLayout>
        {items.map(({ label, onClick }, idx) => (
          <Fragment key={idx}>
            <MenuItem onClick={onClick}>
              <Text as="t3">{label}</Text>
            </MenuItem>
            {idx < items.length - 1 && <Divider />}
          </Fragment>
        ))}
      </MenuLayout>
    </Layout>
  )
}

export default Menu
