"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const SidebarListMobile = ({navList}) => {
    const pathName = usePathname();
  return (
    <div className="mt-4 z-10">
    <ul className="bg-slate-800 flex flex-col gap-1 mt-2 cursor-pointer">
      {navList.links.map((item) => (
        <Link
        title={item.name}
          href={item.path}
          key={item.path}
          className={` flex gap-2 justify-start items-center  ${
            pathName === item.path ? "bg-slate-500 hover:bg-slate-500" : "bg-balck "
          } rounded-xl px-4 py-4`}
        >
          <div>{item.icon}</div>
      
        </Link>
      ))}
    </ul>
  </div>
  )
}
