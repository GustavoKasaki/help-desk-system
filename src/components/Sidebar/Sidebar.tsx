'use client'
import { useEffect, useState } from 'react'
import { FaSignOutAlt, FaAt, FaRegClock, FaRegUser } from 'react-icons/fa'

import { getDisplayName, goToDashboard } from '@/utils/actions'
import { logout } from '@/app/logout/actions'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'

import * as S from './styles'

const Sidebar = () => {
  const [displayName, setDisplayName] = useState('usuario')

  useEffect(() => {
    const fetchDisplayName = async () => {
      const name = await getDisplayName()
      setDisplayName(name)
    }
    fetchDisplayName()
  }, [])

  const botoes = [
    {
      titulo: 'IT Tickets',
      width: '80%',
      icon: FaAt,
      href: '/dashboard/tickets'
    },
    {
      titulo: 'Schedule',
      width: '80%',
      icon: FaRegClock,
      href: ''
    },
    {
      titulo: 'Users Registry',
      width: '80%',
      icon: FaRegUser,
      href: '/dashboard/registry'
    }
  ]

  return (
    <S.SidebarContainer>
      <S.Greetings>
        <div onClick={goToDashboard}>
          <Logo />
        </div>
        <p>Welcome, {displayName}!</p>
      </S.Greetings>
      <S.MenuList>
        {botoes.map(({ href, icon, titulo, width }, index) => (
          <Button
            key={index}
            titulo={titulo}
            width={width}
            icon={icon}
            href={href}
          />
        ))}
      </S.MenuList>
      <form action={logout}>
        <Button
          type="submit"
          titulo={'Logout'}
          width="80%"
          icon={FaSignOutAlt}
        />
      </form>
    </S.SidebarContainer>
  )
}

export default Sidebar
