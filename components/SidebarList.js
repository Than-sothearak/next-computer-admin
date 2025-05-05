"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarList = ({ navList }) => {
  const pathName = usePathname();

  return (
    <div className="mt-8 font-bold ">
      {navList.name}
      <ul className="h-full flex flex-col gap-1 mt-2 cursor-pointer">
        {navList.links.map((item) => (
          <Link
            title={item.name}
            href={item.path}
            key={item.path}
            className={`hover:bg-secondary flex gap-2 justify-start items-center ${
              pathName.split("/").slice(0, 3).join("/") === item.path
                ? "bg-secondary text-primarytext hover:bg-slate-500 hover:text-secondarytext"
                : "bg-balck "
            } rounded-xl px-4 py-4`}
          >
            <div>{item.icon}</div>
            <h2 className="font-normal">{item.name}</h2>
          </Link>
        ))}
      </ul>
    </div>
  );
};
