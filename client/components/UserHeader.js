import React, {useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import UserContext from '../context/userContext'
import {toast} from 'react-toastify'

const UserHeader = () => {

    // const {name, role, avatar, handle, links} = data;
    const supportURL = process.env.RENDER_URL || 'http://localhost:8080'
    const router = useRouter();
    // const handleLogout = ()=>{
    //     localStorage.removeItem('LinkifyToken');
    //     router.push('/login');
    // }

    const redirect = ()=>{
        router.push('/login');
    }
    
    const { userData, setUserData } = useContext(UserContext)
    const {role, avatar, handle} = userData;

    useEffect(()=>{
        if(!localStorage.getItem('LinkifyToken')) return redirect;
        fetch(`${supportURL}/data/dashboard`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                tokenMail: localStorage.getItem('LinkifyToken')
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.status==='error') return toast.error('Error happened');
            // setData(data.userData);
            setUserData(data.userData);
            localStorage.setItem('userHandle', data.userData.handle);
            // toast.success(data.message);
        }).catch(err=>{
            console.log(err);
        })
    }, [])

    return (
        <>
        <header className='flex flex-row justify-between items-center'>
            <div className='flex flex-col md:flex-row p-5'>
                <Link href='/edit/links'>
                    <button className='inline-flex w-full md:w-auto px-5 py-3 text-purple-500 bg-white font-bold hover:text-purple-700 hover:bg-purple-300 rounded-full mb-3 border-2 border-purple-500'>
                        <img src="/svg/url.svg" className='w-5 mr-3'></img>
                        Edit Links
                    </button>
                </Link>
            </div>
            <Link href={`http://localhost:3000/${handle}`}>
            <div className='flex flex-row'>
                <div className='flex w-120 mr-5 text-right items-center bg-gray-200 px-5 py-2 rounded-md'>
                    <div className='text-xs md:text-md flex flex-col flex-wrap'>
                        <span className='font-bold'>{handle}</span>
                        <span>{role}</span>
                    </div>
                    <div className='user-img'>
                        <img className='w-10 ml-5 rounded-full' src={avatar}/>
                    </div>
                </div>
            {/* <img className='w-6 mr-5 cursor-pointer' src='/svg/notification.svg' alt="" />
            <img className='w-6 mr-5 cursor-pointer' src='/svg/logout.svg' alt=""  onClick={handleLogout} /> */}
            </div>
            </Link>
        </header>
        </>
    )
}

export default UserHeader