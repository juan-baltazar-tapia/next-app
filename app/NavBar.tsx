import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex'>
        <Link href='/' className='mr-5'>Home</Link>
        <Link href='/users'>Users</Link>
    </div>
  )
}

export default NavBar