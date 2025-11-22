'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navbarItem = {
  title: 'OTHER',
  items: [
    {
      icon: '/profile.png',
      label: 'Profile',
      href: '/profile',
      visible: ['admin', 'teacher', 'student', 'parent'],
    },
    {
      icon: '/setting.png',
      label: 'Settings',
      href: '/settings',
      visible: ['admin', 'teacher', 'student', 'parent'],
    },
    {
      icon: '/logout.png',
      label: 'Logout',
      href: '/logout',
      visible: ['admin', 'teacher', 'student', 'parent'],
    },
  ],
};

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center text-xs gap-2 rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src='/search.png' alt='' width={14} height={14} />
        <input
          type='text'
          placeholder='Search...'
          className='w-[200px] p-2 bg-transparent outline-none'
        />
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src='/message.png' alt='' width={20} height={20} />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src='/announcement.png' alt='' width={20} height={20} />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-yellow-500 text-white rounded-full text-xs'>
            1
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>Bang Admin</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        {/* Avatar with Dropdown */}
        <div className='relative' ref={dropdownRef}>
          <Image
            src='/avatar.png'
            alt=''
            width={36}
            height={36}
            className='rounded-full cursor-pointer'
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-sm'>
              {navbarItem.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100'
                >
                  <Image src={item.icon} alt='' width={16} height={16} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
