import Link from 'next/link'

const routes = [
  { name: 'server', path: '/server' },
  { name: 'client', path: '/client' },
  { name: 'static', path: '/static' },
]

const Navbar = () => {
  return (
    <>
      {routes.map((route) => (
        <Link key={route.name} href={route.path}>
          {route.name}{' '}
        </Link>
      ))}
    </>
  )
}

export default Navbar
