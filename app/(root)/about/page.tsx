import { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import { timeline } from '@/constants';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'About - Denzel Obeng'
};

const AboutPage = () => {
  return (
    <>
      <div>
        <Header />
        <section className='max-width section-padding flex flex-col tablet:flex-row gap-20 items-center'>
          <div className='relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px] rounded-2xl mt-1 overflow-hidden' 
          data-aos='fade-right' 
          data-aos-delay='300'
          >
            <Image 
              src={'/images/XXX.jpg'} 
              fill 
              alt='about img' 
              className='object-cover'
            />
          </div>
          <div className='tablet:w-1/2'>
            <div className='space-y-3 max-tablet:text-center flex flex-col'>
              <p className='px-4 py-2 bg-peach-500 text-grey-600 w-max rounded tablet:w-max max-tablet:mx-auto' 
              data-aos='fade-down'
              data-aos-delay='100'
              >
                Welcome to the world of captivating web design!
              </p>
              <h1 className='text-grey-700' 
              data-aos='fade-down' 
              data-aos-delay='200'>
                I&apos;m Denzel Obeng
                </h1>
              <p className='text-grey-600' 
              data-aos='fade-down' 
              data-aos-delay='300'
              >
                Hello there, I&apos;m Alan a professional and skilled UX/UI designer 
                with over 3 years of experience. I have been working with 
                agencies and individuals. Started working with Adobe XD and later 
                along the line advanced to Figma. I am now learning new technologies, 
                will be done soon.
              </p>
            </div>

            <div className='bg-peach-400 rounded-1g tablet:rounded-none tablet:bg-transparent tablet:border-t-2 
             tablet:border-b-2 tablet:border-blue w-full py-8 px-10 mt-14 tablet:mt-24 gap-12 flex flex-col tablet:flex-row' data-aos='fade-left' data-aos-delay='400'>
              <div className="flex items-center gap-10 justify-center tablet:block">
                <h3 className="text-grey-700">
                  6 <span className="text-blue">+</span>
                </h3>
                <p className="text-grey-600">Projects Completed</p>
              </div>
              <div className="flex items-center gap-10 justify-center tablet:block">
                <h3 className="text-grey-700">
                  256 <span className="text-blue">+</span>
                </h3>
                <p className="text-grey-600">Happy Customers</p>
              </div>
              <div className="flex items-center gap-10 justify-center tablet:block">
                <h3 className="text-grey-700">
                  3 <span className="text-blue">+</span>
                </h3>
                <p className="text-grey-600">Years of experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* milestones section*/}
        <section className='max-width section-padding' 
        data-aos='fade-up' 
        data-aos-delay='200'>
          <SectionHeading 
            title='Milestones of my career'
            subtitle='Below are the milestones i have gone through since i started my UI design journey'
          />

          <div className='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px 
            tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-blue before:bg-opacity-30'>
            {timeline.map((item, index) => (
              <div key={index}
                className='relative flex items-center justify-between tablet:justify-normal tablet:odd:flex-row-reverse group'
              >
                <div 
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1 
                  tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2 
                  group-first:before:absolute group-first:before:w-1 group-first:before:h-20 group-first:before:bottom-full 
                  group-first:before:bg-peach-600 
                  group-last:before:absolute group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full 
                  group-last:before:top-full group-last:before:bg-peach-600' data-aos='fade-down' data-aos-delay='300'
                >
                  <span className='w-3 h-3 bg-blue rounded-full'></span>
                </div>
                <div className='w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box !p-5 tablet:!p-8' data-aos='fade-up' data-aos-delay='500'>
                  <div className='flex items-center justify-between space-x-2 mb-1'>
                    <h6 className='text-grey-700'>{item.title}</h6>
                    <p className='font-semibold text-blue'>{item.duration}</p>
                  </div>
                  <div className='text-grey-600'>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
