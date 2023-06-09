import React from 'react'
import { useRouter } from 'next/router'
import {toast} from 'react-toastify'

const ShareButton = () => {
    const router = useRouter();
    const copyLink = () =>{
        navigator.clipboard.writeText(`http://example.com/${router.query.handle}`);
        toast('Copied to clipboard');
    }
  return (
    <>
    <div className='absolute cursor-pointer top-20 left-10 bg-indigo-200 p-2 rounded-md z-10 shadow-md border-2 border-indigo-400' onClick={copyLink}>
        <img className='w-5' src="/svg/shareButton.svg"  alt="Share"/> 
    </div>
    </>
  )
}

export default ShareButton