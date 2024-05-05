import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Mailing = () => {
  return (
    <div className='w-full min-h-[250px]'>
        <div className='w-[50vw] m-auto'>
            <div><h1 className='m-auto text-2xl text-center'>Join Our Mailing List</h1></div>
            <div>
                <div className='py-2'>
                <Label className='py-2'>Email</Label>
                </div>
                <div>
                <Input placeholder='Enter Your Email'/>
                </div>
                <div className='py-4'>
                <Button variant={'default'}>Submit</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mailing