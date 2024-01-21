"use client"
import { buttonTypes } from '@/types/componentstypes'
import React from 'react'

export default function Button(props:buttonTypes) {
    const handler=()=>{
        alert("Welcome")
    }
  return (
    
       <button onClick={handler}  className="bg-red-900 text-white ml-16 w-20 rounded-xl py-2 hover:bg-blue-950">
              {props.title}
            </button>
    
  )
}
