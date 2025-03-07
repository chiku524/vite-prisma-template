// app/utils/auth.server.ts

import type { RegisterForm, LoginForm } from './types.server'
import bcrypt from 'bcryptjs'
import { prisma } from './prisma.server'
import { redirect, createCookieSessionStorage } from '@remix-run/node'
import { createUser } from './user.server'


const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'portal-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function createUserSession(userId: string, redirectTo: string) {
    const session = await storage.getSession()
    session.set('userId', userId)
    return redirect(redirectTo, {
      headers: {
        'Set-Cookie': await storage.commitSession(session),
      },
    })
}

export async function register(user: RegisterForm) {
  const exists = await prisma.user.count({ where: { email: user.email } })
  if (exists) {
    return { error: `User already exists with that email` }
  }

  const newUser = await createUser(user)
  if (!newUser) {
    return { error: `Something went wrong trying to create a new user.`, fields: { email: user.email, password: user.password }}
  }

  return createUserSession(newUser.id, '/profile');
}

export async function login({ email, password }: LoginForm) {
    // 2
    const user = await prisma.user.findUnique({
      where: { email },
    })
  
    // 3
    if (!user || !(await bcrypt.compare(password, user.password)))
      return { error: `Incorrect login` }
  
    // 4
    return createUserSession(user.id, "/profile");
}

export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).pathname) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
    throw redirect(`/login?${searchParams}`)
  }
  return userId
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'))
}

async function getUserId(request: Request) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') return null
  return userId
}

export async function getUser(request: Request) {
  const userId = await getUserId(request)
  if (typeof userId !== 'string') {
    return null
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, username: true, profile: true },
    })
    return user
  } catch {
    throw logout(request)
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request)
  return redirect('/login', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  })
}