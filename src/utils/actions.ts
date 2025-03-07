'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// fetch display name from cookies
export async function getDisplayName() {
  return (await cookies()).get('displayName')?.value || 'usuario'
}

// redirect to dashboard
export async function goToDashboard() {
  redirect('/dashboard')
}

// redirect to tickets
export async function goToChamados() {
  redirect('/dashboard/tickets')
}
