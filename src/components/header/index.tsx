import React from 'react'
import NavigationLink from '../NavigationLink'
import { useTranslations } from 'next-intl'
import LocalSwitcherComponent from '../select-component'
import Button from '@/ui/button'
import Image from 'next/image'

const Header = () => {
  const t = useTranslations("Header")
  return (
    <header className='h-[99px] w-full   flex items-center z-10 absolute'>
      <div className="container mx-auto flex items-center justify-between px-[70px]">
        <div className="flex items-center gap-1">
          <Image src='/assets/icons/Vector.svg' alt='Icon' width={22} height={28}/>
          <h1 className='text-white font-light text-[29px] p-0 m-o leading-0'><strong>Noventer</strong></h1>
        </div>
        <nav>
          <ul className='flex items-center gap-3'>
            <NavigationLink href="/">{t('navLink1')}</NavigationLink>
            <NavigationLink href="/portfolio">{t('navLink2')}</NavigationLink>
            <NavigationLink href="/service">{t('navLink3')}</NavigationLink>
            <NavigationLink href="/contact">{t('navLink4')}</NavigationLink>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
         <LocalSwitcherComponent/>
          <Button>{t("navLinkBtn")}</Button>
        </div>
      </div>
    </header>  
  )
}

export default Header
