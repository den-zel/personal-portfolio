import FaqsSection from '@/components/FaqsSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { socialLinks } from '@/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata ={
    title: 'Contact - Denzel Obeng'
}

const page = () => {
  return (
    <>
    <div>
        <Header />
    </div>
    <section className='max-width section-padding' data-aos='fade-down' data-aos-delay='200'>
      <div className='box text-center flex flex-col items-center gap-3'>
        <div className='w-16 h-16 rounded bg-blue flex items-center justify-center flex-shrink-0'>
            <Image src={'images/chat.svg'} alt='icon' width={35} height={35} />
        </div>
        <h2 className='text-grey-700'>I would love to hear from you</h2>
        <p className='text-grey-700'>
            Tell me what your dream is, and I&apos;ll bring it into reality.
        </p>
      </div>
    </section>

    <section className='max-width section-padding flex max-tablet:flex-col gap-16'>
        <div className='tablet:max-w-md w-full' data-aos='fade-right' data-aos-delay='300'>
            <div className='space-y-4'>
                <div className='box !p-6'>
                    <p className='text-grey-600'>You can Email me here</p>
                    <h6 className='text-grey-700'>denzelobeng421@gmail.com</h6>
                </div>
                <div className='space-y-4'>
                <div className='box !p-6'>
                    <p className='text-grey-600'>Give Me a Call On</p>
                    <h6 className='text-grey-700'>(233)532 778 933</h6>
                </div>
            </div>
            <div className='space-y-4'>
                <div className='box !p-6'>
                    <p className='text-grey-600'>Location</p>
                    <h6 className='text-grey-700'>Kumasi, Ghana</h6>
                </div>
            </div>
            </div>
            <h6 className='mt-10 mb-3 text-grey-700 max-tablet:text-center' data-aos='fade-up' data-aos-delay='300'>
                My Social Profiles
            </h6>
            <div className='flex gap-3 box !p-6 w-max max-tablet:mx-auto'>
                {socialLinks.map((link, index) => (
                    <a
                    href={link.url}
                    key={index}
                    className='w-10 h-10 bg-blue text-peach flex items-center justify-center rounded'
                    >
                        <link.icon strokeWidth={0} fill='currentColor' />
                    </a>
                ))}
            </div>
        </div>
        <div className='box w-full' 
        data-aos='fade-up' 
        data-aos-delay='400'>
            <form action='' className='space-y-5'>
                <div className='flex gap-5 max-tablet:flex-col'>
                    <input type='text' placeholder='First Name' />
                    <input type='text' placeholder='Last Name' />
                </div>
                <div className='flex gap-5 max-tablet:flex-col'>
                    <input type='text' placeholder='Email' />
                    <input type='text' placeholder='Phone' />
                </div>
                <textarea 
                placeholder='Message'
                className='min-h-[200px]'
                ></textarea>
                <button type='submit' className='btn btn-primary'>
                    Send
                </button>
            </form>
        </div>
    </section>

    <FaqsSection />
    <div>
    <Footer />
    </div>
    </>
  )
}

export default page
