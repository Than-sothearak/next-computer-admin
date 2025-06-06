"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const SidebarList = ({navList}) => {
    const pathName = usePathname();
  return (
    <div className="mt-4 font-bold">
    {navList.name}
    <ul className="flex flex-col gap-2 mt-2 cursor-pointer">
      {navList.links.map((item) => (
        <Link
        title={item.name}
          href={item.path}
          key={item.path}
          className={`hover:bg-secondary flex gap-2 justify-start items-center ${
            pathName === item.path ? "bg-slate-500 hover:bg-slate-500" : "bg-balck "
          } rounded-xl px-4 py-4`}
        >
          <div>{item.icon}</div>
          <h2 className='font-normal'>{item.name}</h2>
        </Link>
      ))}
    </ul>
  </div>
  )
}
