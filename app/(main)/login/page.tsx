"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full'>
        <div className='w-[50vw] h-full m-auto'>
            <div>
              <div>
                <h1 className=' py-4 text-xl'>Login to your account </h1>
              </div>
                <div>
                <Label>Email</Label>
                <Input placeholder='someone@domain.com'/>
                </div>
                <div className='py-4'>
                <Label>Password</Label>
                <Input placeholder='Enter a Password'/>
                </div>
                <div className='py-4'><Button variant={'default'}>Login</Button></div>
            </div>
        </div>
    </div>
  )
}

export default Login