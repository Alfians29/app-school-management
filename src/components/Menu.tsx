'use client';

import { role } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: '/home.png',
        label: 'Home',
        href: '/',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/teacher.png',
        label: 'Teachers',
        href: '/list/teachers',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/student.png',
        label: 'Students',
        href: '/list/students',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/parent.png',
        label: 'Parents',
        href: '/list/parents',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/subject.png',
        label: 'Subjects',
        href: '/list/subjects',
        visible: ['admin'],
      },
      {
        icon: '/class.png',
        label: 'Classes',
        href: '/list/classes',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/lesson.png',
        label: 'Lessons',
        href: '/list/lessons',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/exam.png',
        label: 'Exams',
        href: '/list/exams',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/assignment.png',
        label: 'Assignments',
        href: '/list/assignments',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/result.png',
        label: 'Results',
        href: '/list/results',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/attendance.png',
        label: 'Attendance',
        href: '/list/attendance',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/calendar.png',
        label: 'Events',
        href: '/list/events',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/message.png',
        label: 'Messages',
        href: '/list/messages',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/announcement.png',
        label: 'Announcements',
        href: '/list/announcements',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className='mt-4 text-sm'>
      {menuItems.map((menu) => (
        <div className='flex flex-col gap-2' key={menu.title}>
          <span className='hidden lg:block text-gray-400 font-light my-4'>
            {menu.title}
          </span>
          {menu.items.map((item) => {
            if (item.visible.includes(role)) {
              const isActive = pathname === item.href; // Check if the current path matches the item's href
              return (
                <div className='relative group' key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md ${
                      isActive
                        ? 'bg-clrBlueLight text-clrBlueDark' // Active styles
                        : 'text-gray-500 hover:bg-clrBlueLight'
                    }`}
                  >
                    <Image src={item.icon} alt='' width={20} height={20} />
                    <span className='hidden lg:block'>{item.label}</span>
                  </Link>
                  <span className='absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-clrBlueLight text-gray-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 md:block lg:hidden whitespace-nowrap'>
                    {item.label}
                  </span>
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
