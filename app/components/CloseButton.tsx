import { useRouter } from 'next/navigation';
import React from 'react'

interface ICloseButton {
  route: string;
}

const CloseButton = ({ route }: ICloseButton ) => {
  const router = useRouter();
  return (
    <div className='flex justify-end'>
      <button className='text-[#FF4579] text-2xl' onClick={() => router.push(route ? '/' + route : '/')}>X</button>
    </div>
  )
}

export default CloseButton