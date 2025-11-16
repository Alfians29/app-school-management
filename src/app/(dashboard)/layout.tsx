import Image from 'next/image';
import Link from 'next/link';

import Menu from '@/components/Menu';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen flex'>
      {/* LEFT SIDE */}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200'>
        <Link
          href='/'
          className='flex items-center justify-center lg:justify-start gap-2 p-4'
        >
          <Image src='/logo.png' alt='logo' width={32} height={32} />
          <span className='hidden lg:block'>Schoolify</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT SIDE */}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-green-200'>
        R
      </div>
    </div>
  );
}
