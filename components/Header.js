import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import openseaLogo from '../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
    wrapper: `sticky top-0 z-50  bg-[#0f172a] opacity-100 w-screen px-[5rem] py-[0.55rem] flex justify-center `,
    logoContainer: `flex items-center hover:text-white cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-thin text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#0000] rounded-[0.8rem] `,
    searchIcon: `text-[#18181b] mx-3 font-thin text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-white px-4 font-thin text-[white] hover:text-white cursor-pointer`,
    headerIcon: `text-[#f8fafc] text-2xl font-black px-4 hover:text-white cursor-pointer`,
  }

const Header = () => {
  return (
    <div className={style.wrapper}>
        <Link href="/">
            <div className={style.logoContainer}>
                <Image className='h-[4rem] rounded-full' src={openseaLogo} height={40} width={40} />
                <div className={style.logoText}></div>
            </div>
        </Link>
        
        <div className={style.headerItems}>
                <Link   href="/collections/0x250284DA9e24d3a2dc5c520AB7D31E1C369Ab6D9">
                    <div className={style.headerItem}> Collection </div>
                </Link>
            <div className={style.headerItem}> Stats </div>
            <div className={style.headerItem}> Resources </div>
            <div className={style.headerItem}> Create </div>
            <div className={style.headerIcon}>
                <CgProfile />
            </div>
            <div className={style.headerIcon}>
                <MdOutlineAccountBalanceWallet />
            </div>
        </div>
    </div>
  )
}

export default Header