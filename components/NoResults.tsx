import React from 'react'
import { MdOutlineVideocamOff } from 'react-icons/md';
import { BiCommentX } from 'react-icons/bi';

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
  <div className='flex flex-col justify-center items-center h-full w-full'>
    <p className='text-6xl'>
      {text === 'Be First to Comment!' 
    ? <BiCommentX className='text-gray-400 text-1xl' />
     : <MdOutlineVideocamOff className='text-gray-400' />
      }
    </p>
  <p className='text-1xl text-center'>{text}</p>
</div>
  )
}

export default NoResults