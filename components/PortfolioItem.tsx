import { portfolios } from '@/constants';
import Image from 'next/image';
import React from 'react'

const PortfolioItem = ({ 
    portfolio, 
}: {
    portfolio: (typeof portfolios)[0];
}) => {
  return (
    <div className='box'>
      <h4 className='mb-5'>{portfolio.title}</h4>
      <div className='relative:w-full h-80 rounded-lg overflow-hidden group cursor-pointer mb-5'>
        <Image
        src={portfolio.images[0]}
        alt={portfolio.title}
        fill
        className='object-cover'
        />
      </div>
    </div>
  )
}

export default PortfolioItem
