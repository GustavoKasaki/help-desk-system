'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import loginData from '@/data/loginData'

export async function login(data: FormData) {
  const username = data.get('username') as string // save username as variable
  const password = data.get('password') as string // save password as variable
  const cookieStore = cookies() // save cookies as variable

  // search username in 'data/loginData.ts'
  const user = loginData.find(
    (user) => user.username === username && user.password === password
  )
  console.log(user)

  if (!user) {
    return { error: 'Invalid username or password!' }
  } else {
    // save serverside auth token
    ;(await cookieStore).set('auth_token', 'TOKEN_TESTE', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })

    // save display name for clientside
    ;(await cookieStore).set('displayName', user.displayName, {
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })

    // redirect using absolute url
    redirect(`/dashboard`)
  }
}
