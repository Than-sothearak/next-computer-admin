"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const SidebarList = ({links}) => {
    const pathName = usePathname();
  return (
    <div className="mt-4">
    {links.name}
    <ul className="flex flex-col gap-1 mt-2 cursor-pointer">
      {/* {links.map((item) => (
        <Link
          href={item.path}
          key={item.path}
          className={`flex gap-2 justify-start items-center ${
            pathName === item.path ? "bg-slate-500" : "bg-balck "
          } rounded-xl px-4 py-4`}
        >
          <div>{item.icon}</div>
          {item.name}
        </Link>
      ))} */}
    </ul>
  </div>
  )
}
