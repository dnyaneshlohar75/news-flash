import React from 'react'
import LoginForm from '@/app/_components/LoginForm'
import "@/app/globals.css"
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';

export default async function page() {

  const session = await getServerSession();

  if(session) return redirect('/user/dashboard');
  
  return (
    <div className='relative login-bg w-full h-screen'>
        <LoginForm />
    </div>
  )
}
