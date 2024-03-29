import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout } from '@react-oauth/google'

import useAuthStore from '../store/authStore';
import { IUser } from '../types';
import Logo from '../utils/tiktik-logo.png';
import { createOrGetUser } from '../utils';


const Navbar = () => {
  const [user, setUser] = useState<IUser | null>();  
  const router = useRouter(); 
  const { userProfile, addUser, removeUser } = useAuthStore();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]); 

const handleSearch = (e: { preventDefault: () => void }) => {
e.preventDefault();

if(searchValue) {
  router.push(`/search/${searchValue}`);
 }
};

return (
<div className='flex items-center justify-between w-full px-4 py-2 border-b-2 border-gray-200'>
    <Link href='/'>
        <div className='w-[50px] md:w-[49px] md:h-[50px] h-[48px]'>
      <Image
      className='cursor-pointer'
      src={Logo}
      alt='logo' 
      layout='responsive'
       />
</div>
</Link>

<div  className='relative hidden md:block'>
<form 
  onSubmit={handleSearch}
  className='absolute bg-white md:static top-10 -left-20' 
>
<input
type='text'
placeholder='Search videos & users'
value={searchValue}
onChange={(e) => setSearchValue(e.target.value)}
className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-1 focus:border-gray-200 w-[300px] md:w-[350px] rounded-full  md:top-0'
/>
<button
  onClick={handleSearch}
  className='absolute pl-4 text-2xl text-gray-300 border-l-2 border-gray-300 md:right-5 right-6 top-4'
  >
<BiSearch />
</button>
</form>
</div>
<div>
  {user ? (
<div className='flex gap-5 md:gap-10'>
  <Link href='/upload'>
  <button className='flex items-center gap-2 px-2 font-semibold border-2 md:px-4 text-md'>
<IoMdAdd className='text-xl' />{' '}
  <span className='hidden md:block'>Upload Video</span>
              </button>
              </Link>
              {user.image && (
              <Link href='/upload'>
                <div>
                  <Image
                    className='rounded-full cursor-pointer'
                    src={user.image}
                    alt='user'
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            )}
            <button
                type='button'
                className='p-2 border-2 rounded-full shadow-md outline-none cursor-pointer '
                onClick={() => {
                googleLogout();
                 removeUser();
                }}
              >
                <AiOutlineLogout color='red' fontSize={21} />
              </button>

              </div>
          ) : (
            <GoogleLogin 
           onSuccess={(response) => createOrGetUser(response, addUser)}
           onError={() => console.log('Login error')}
            />
          )}
        </div>
    </div>
  )
}

export default Navbar