'use client'

import React from 'react'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { 
    DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import {SunIcon, MoonIcon, SunMoon} from 'lucide-react'

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted)
        return null

    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                { theme === 'system' ? (
                    <SunMoon />
                ): theme === 'dark' ? (
                    <MoonIcon />
                ): (
                    <SunIcon />
                )}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator/>

            {/* <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}> 
                System
            </DropdownMenuCheckboxItem> */}

            <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('light')}> 
              <SunIcon className='mr-2'/>  Light
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('dark')}> 
               <MoonIcon className='mr-2'/> Dark
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle