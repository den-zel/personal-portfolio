import React from 'react';
import Link from 'next/link';
import { navLinks } from '@/constants';
import NavLink from './NavLink';
import { Phone } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className='flex items-center justify-between h-20 max-width border-b border-peach'>
      <Link href={'/'}>
        <h5 className='text-blue text-xl font-semibold'>Denzel Obeng.</h5>
      </Link>
      <nav className='flex items-center gap-12 max-tablet:hidden'>
        <ul className='flex items-center gap-8'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.url} label={link.label} />
            </li>
          ))}
        </ul>
        <a href={`mailto:denzelobeng421@gmail.com`} className='btn btn-primary'>
          <div className='text-grey-100 hover:text-white flex items-center gap-2'> 
            <Phone size={24} />
            Contact me
          </div>
        </a>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
