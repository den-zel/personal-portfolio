import PortfolioItem from '@/components/PortfolioItem'
import SectionHeading from '@/components/SectionHeading'
import { benefits, portfolios, skills } from '@/constants'
import { ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <>
   {/* hero section */}
   <section className='flex items-center max-width flex-col-reverse tablet:flex-row mb-10'>
      {/* left side*/ }
      <div className='tablet:w-2/3 mt-10 tablet:mt-0'>
        <div className='flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left'>
          <p className='px-4 py-2 bg-peach-500 text-grey-600 w-max rounded hover:font-medium hover:text-black'>
            Hello There
          </p>
          <h1 className='text-grey'>Denzel welcome's you</h1>
          <p className='text-grey-600'>
          Welcome to my portfolio world, my name is Alan. A UI designer 
            with over 3 years of experience in my field.I made this website myself lol, I tried. 
            Anyway Feel free to roam and enjoy my world.
          </p>
        </div>
        <div className='flex gap-5 mt-10 justify-center tablet:justify-start'>
          <Link href={'/contact'} className='btn btn-primary'>
            <div className='text-grey-100 hover:text-white flex items-center gap-2'>
            <Phone />
            Contact now
            </div>
          </Link>
          <Link href={'/contact'} className='btn'>
            <div className='flex items-center gap-1 text-grey-700 hover:text-black hover:font-medium'>
            View Portfolio
            <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </div>
      {/* right side*/ }
      <div className='relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-2xl mt-1 overflow-hidden'>
        <Image 
        src={'/images/black.jpg'} 
        alt='hero' 
        fill className='object-cover' 
        />
      </div>
    </section>
   {/* skills section */}
  <section className='max-width section-padding'>
    <SectionHeading 
      title='Creative Skills'
       subtitle='Explore the range of sevices i have learned'
      />

      {/* skills */}
      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,
        1fr))] gap-3 tablet:gap-6'>
        {skills.map((skill, index) => (
            <div key={index} className='box flex flex-col items-center gap-5'>
              <div className='w-16 h-16 rounded bg-blue flex items-center justify-center flex-shrink-0 mb-2'>
                <Image 
                src={skill.icon} 
                alt={skill.name} 
                width={35} 
                height={35}
                />
              </div>
              <div className='text-center'>
                <h4 className='text-grey-700 mb-2'>{skill.name}</h4>
                <p className='text-grey-600'>{skill.description}</p>
              </div>
            </div>
          ))}
      </div>
     </section>

     {/* benefits section */}
     <section className='max-width section-padding'>
     <SectionHeading
     title='Benefits'
     subtitle='Benefits you will enjoy working with me'
     />
     
     <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,
      1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6'>
        {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className='box'>
              <h5 className='text-grey-700 mb-2'>{benefit.name}</h5>
              <p className='text-grey-600'>{benefit.description}</p>
            </div>
          ))}
     </div>
     <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,
      1fr))] gap-3 tablet:gap-6'>
        {benefits.slice(2).map((benefit, index) => (
            <div key={index} className='box'>
              <h5 className='text-grey-700 mb-2'>{benefit.name}</h5>
              <p className='text-grey-600'>{benefit.description}</p>
            </div>
          ))}
     </div>
     </section>

     {/* portfolio section */}
     <section className='section-padding max-width'>
      <SectionHeading 
      title='My Works'
      subtitle='View the live projects i have worked on.'
      />

     <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,
      1fr))] gap-3 tablet:gap-6'>
        {portfolios.slice(0, 3).map((portfolio, index) => (
            <PortfolioItem key={index} portfolio={portfolio} />
     ))}
     </div>
     </section>
   </>
  )
}

export default page
