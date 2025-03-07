import { Metadata } from 'next'

import Sidebar from '@/components/Sidebar/Sidebar'

export const metadata: Metadata = {
  title: 'Help Desk System - Dashboard'
}

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}
