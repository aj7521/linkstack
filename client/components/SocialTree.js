import Link from 'next/link';
import React from 'react'

const SocialTree = ({social}) => {
    const {
        facebook,
        twitter,
        instagram,
        youtube,
        linkedin,
        github
    } = social;
    return (
        <>
            <div className="social flex flex-row justify-center my-4">
                <Link className='bg-white rounded-full p-2 hover:bg-black-25 transition-all duration-200 hover:scale-150 shadow border-gray-70 mx-1 selected-none' target='_blank' href={`https://facebook.com/${facebook}`}>
                    <img className='w-6' src='/svg/facebook.svg'/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-black-25 transition-all duration-200 hover:scale-150 shadow border-gray-70 mx-1 selected-none' target='_blank' href={`https://twitter.com/${twitter}`}>
                    <img className='w-6' src='/svg/twitter.svg'/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-black-25 transition-all duration-200 hover:scale-150 shadow border-gray-70 mx-1 selected-none' target='_blank' href={`https://instagram.com/${instagram}`}>
                    <img className='w-6' src='/svg/instagram.svg'/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-black-25 transition-all duration-200 hover:scale-150 shadow border-gray-70 mx-1 selected-none' target='_blank' href={`https://youtube.com/${youtube}`}>
                    <img className='w-6' src='/svg/youtube.svg'/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-black-25 transition-all duration-200 hover:scale-150 shadow border-gray-70 mx-1 selected-none' target='_blank' href={`https://linkedin.com/in/${linkedin}`}>
                    <img className='w-6' src='/svg/linkedin.svg'/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-black-25 transition-all duration-200 hover:scale-150 shadow border-gray-70 mx-1 selected-none' target='_blank' href={`https://github.com/${github}`}>
                    <img className='w-6' src='/svg/github.svg'/>
                </Link>
            </div>
        </>
    )
}

export default SocialTree