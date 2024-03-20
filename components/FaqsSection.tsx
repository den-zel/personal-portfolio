import React from 'react'
import SectionHeading from './SectionHeading'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { faqs } from '@/constants'
import Accordion from './Accordion'

const FaqsSection = () => {
  return (
    <section className='max-width section-padding overflow-hidden' data-aos='fade-down' data-aos-delay='200'>
      <SectionHeading 
      title='Frequently Asked Question'
      subtitle='Do you have any unaswered questions? I hope this answers you best'
      />
      <div className='flex flex-col tablet:flex-row gap-5 items-start'>
        <div className='box'>
            <Accordion data={faqs} />
        </div>
        <div className='box flex flex-col gap-5 tablet:max-w-md'>
        <div className='w-16 h-16 rounded bg-blue text-peach-100 flex items-center justify-center flex-shrink-0 mb-2'>
            <Star fill='currentColor' size={30} />
        </div>
        <div>
        <h5 className='text-grey-700 mb-2'>Still have any questions?</h5>
        <p className='text-grey-600'>
            Your questions are not answered yet? Email me your question or send me a WhatsApp text.
        </p>
        </div>
        <Link href={'/contact'} className='btn btn-primary w-max'>
            Contact me <ArrowRight />
        </Link>
      </div>
      </div>
    </section>
  )
}

export default FaqsSection
