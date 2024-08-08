"use client";

import React from 'react'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'

export default function LogoutButton() {
  return (
    <LogoutLink>Logout</LogoutLink>
  )
}