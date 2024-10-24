"use client";

import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@nextui-org/react';

export default function LogoutButton() {
  return (
    <Button onClick = {() => signOut()}>Logout</Button>
  )
}