"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const SidebarListMobile = ({navList}) => {
    const pathName = usePathname();
  return (
    <div className="mt-4">
    <ul className="flex flex-col gap-1 mt-2 cursor-pointer">
      {navList.links.map((item) => (
        <Link
          href={item.path}
          key={item.path}
          className={`flex gap-2 justify-start items-center hover:bg-slate-800 ${
            pathName === item.path ? "bg-slate-500" : "bg-balck "
          } rounded-xl px-4 py-4`}
        >
          <div>{item.icon}</div>
      
        </Link>
      ))}
    </ul>
  </div>
  )
}
