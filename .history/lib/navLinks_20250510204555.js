import { MdSpaceDashboard } from "react-icons/md";
import { AiFillShop } from "react-icons/ai"; // Replace with correct icon if needed
import { FaUserCircle, FaUsers } from "react-icons/fa";
import { BiCategory, BiSolidReport } from "react-icons/bi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { FaBuromobelexperte } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
export const pageNavigation = {
  name: "Pages",
  links: [ {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdSpaceDashboard size={18} />,
  },
  {
    path: "/dashboard/pos",
    name: "Pos System",
    icon: <FaCalculator size={18} />,
  },
 
  {
    path: "/dashboard/products",
    name: "Products",
    icon: <AiFillShop size={18} />, 
  },
  {
    path: "/dashboard/categories",
    name: "Category",
    icon: <BiCategory size={18} />, 
  },
  {
    path: "/dashboard/users",
    name: "Users",
    icon: <FaUserCircle size={18} />,
  }, {
    path: "/dashboard/expense",
    name: "Expense",
    icon: <FaBuromobelexperte size={18} />,
  },
]

}

export const analyticNavigation = {
  name: "Analytics",
  links: [
    {
      path: "/reports",
      name: "Reports",
      icon: <BiSolidReport size={18} />,
    },
    {
      path: "/revenue",
      name: "Revenue",
      icon: <MdOutlineWorkHistory size={18} />, 
    },
    {
      path: "/dashboard/teams",
      name: "Teams",
      icon: <FaUsers size={18} />,
    },
  ]
}

export const userNavigation = {
  name: "Users",
  links: [
    {
      path: "/setting",
      name: "Setting",
      icon: <IoSettingsSharp size={18} />,
    },
    {
      path: "/help",
      name: "Help",
      icon: <IoIosHelpCircle size={18} />, 
    },

  ]
}
    
  ;
  
