import FaqsSection from '@/components/FaqsSection';
import PortfolioItem from '@/components/PortfolioItem';
import SectionHeading from '@/components/SectionHeading';
import { benefits, portfolios, skills } from '@/constants';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      {/* hero section */}
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        {/* left side */}
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded hover:font-medium hover:text-black"
            data-aos='fade-down'
            >
              Hello There
            </p>
            <h1 className="text-grey" data-aos='fade-down' data-aos-delay='100'>
              Denzel welcomes you</h1>
            <p className="text-grey-600" 
            data-aos='fade-down' 
            data-aos-delay='200'
            >
              Welcome to my portfolio world, my name is Alan. A UI designer with over 3 years of experience in my field. I
              made this website myself lol, I tried. Anyway, feel free to roam and enjoy my world.
            </p>
          </div>
          <div className="flex gap-5 mt-10 justify-center tablet:justify-start" 
          data-aos='fade-down' 
          data-aos-delay='300'
          >
            <a href="mailto:denzelobeng421@gmail.com" className="btn btn-primary">
              <div className="text-grey-100 hover:text-white flex items-center justify-center gap-2">
                <Phone />
                Contact me
              </div>
            </a>
          </div>

          {/* stats */}
          <div className="bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex" 
          data-aos='fade-left' 
          data-aos-delay='400'
          >
            <div>
              <h3 className="text-grey-700">
                6 <span className="text-blue">+</span>
              </h3>
              <p className="text-grey-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-grey-700">
                256 <span className="text-blue">+</span>
              </h3>
              <p className="text-grey-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-grey-700">
                3 <span className="text-blue">+</span>
              </h3>
              <p className="text-grey-600">Years of experience</p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 tablet:hidden" 
          data-aos='fade-right' 
          data-aos-delay='300'>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2" 
            >
              <h3 className="text-grey-700">
                6 <span className="text-blue">+</span>
              </h3>
              <p className="text-grey-600">Projects Completed</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                256 <span className="text-blue">+</span>
              </h3>
              <p className="text-grey-600">Happy Customers</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h3 className="text-grey-700">
                3 <span className="text-blue">+</span>
              </h3>
              <p className="text-grey-600">Years of experience</p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-2xl mt-1 overflow-hidden" 
        data-aos='fade-left' 
        data-aos-delay='300'
        >
          <Image src={'/images/Juice.jpg'} alt="hero" fill className="object-cover" />
        </div>
      </section>
      {/* skills section */}
      <section className="max-width section-padding" data-aos='fade-down' data-aos-delay='200'>
        <SectionHeading title="Creative Skills" subtitle="Explore the range of services I have learned" />

        {/* skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px, 1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center gap-5" data-aos='fade-down' data-aos-delay='500'>
              <div className="text-center">
                <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                <p className="text-grey-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* benefits section */}
      <section className="max-width section-padding" data-aos='fade-down' data-aos-delay='200'>
        <SectionHeading title="Benefits" subtitle="Benefits you will enjoy working with me" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px, 1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6" data-aos='fade-down' data-aos-delay='500'>
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px, 1fr))] gap-3 tablet:gap-6" data-aos='fade-down' data-aos-delay='400'>
          {benefits.slice(2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding max-width" data-aos='fade-down' data-aos-delay='200'>
  <SectionHeading title="My Works" subtitle="View some live projects I have worked on." />

  <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px, 1fr))] gap-3 tablet:gap-6" data-aos='fade-right' data-aos-delay='500'>
    {portfolios.slice(0, 4).map((portfolio, index) => (
      <a key={index} href={index === 0 ? "https://www.liftinfluence.com" : index === 1 ? "https://www.genysolutions.tech" : index === 2 ? "https://www.astrae.design" : index === 3 ? 'https://www.studioix.agency' : "#"} target="_blank" rel="noopener noreferrer">
        <PortfolioItem portfolio={portfolio} />
      </a>
    ))}
  </div>
</section>


      {/* FAQs Section */}
      <FaqsSection />
    </>
  );
};

export default Page;


