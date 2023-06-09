import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='fixed top-0 h-[100px] left-0 w-screen bg-blue-900 text-xl text-white flex justify-center items-center gap-10'>
        <Link href="/">
            Home
        </Link>
        <Link href="/blogs">
            Blogs
        </Link>
        <Link href="/categories">
            Categories
        </Link>

    </div>
  )
}

export default Header