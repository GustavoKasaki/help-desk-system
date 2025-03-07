'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function logout() {
  ;(await cookies()).delete('auth_token')
  redirect('/login') // redirect to login after logout
}
