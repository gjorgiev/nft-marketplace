import React from 'react'
import Link from 'next/link'
import logo from '../assets/logo.png'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex`,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: `text-white font-semibold text-2xl ml-[0.8rem]`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] outline-0 rounded text-lg w-full bg-transparent border-0 text-[#e6e8eb] placeholder:text-[#8a939b] ring-0 px-2 pl-0`,
    headerItems: `flex items-center justify-end`,
    headerItem: `px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`
}

const Header = () => {
  return (
    <div className={style.wrapper}>
        <Link href='/'>
            <div className={style.logoContainer}>
                <Image src={logo} height={40} width={40} />
                <div className={style.logoText}>Metaverse Marketplace</div>
            </div>
        </Link>
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch />
            </div>
            <input 
                className={style.searchInput}
                placeholder="Search items, collections and accounts" />
        </div>
        <div className={style.headerItems}>
            <Link href="/">
                <div className={style.headerItem}>Home</div>
            </Link>
            <Link href="/create-item">
                <div className={style.headerItem}>Sell Digital Asset</div>
            </Link>
            <Link href="/my-assets">
                <div className={style.headerItem}>My Digital Assets</div>
            </Link>
            <Link href="/creator-dashboard">
                <div className={style.headerItem}>Creator Dashboard</div>
            </Link>
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