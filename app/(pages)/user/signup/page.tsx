import React from 'react'
import SignupForm from '@/app/_components/SignupForm'
import "@/app/globals.css"
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default async function page() {

  const session = await getServerSession();

  if(session) return redirect('/user/dashboard');
  
  return (
    <div className='relative login-bg w-full h-screen'>
        <SignupForm />
    </div>
  )
}
