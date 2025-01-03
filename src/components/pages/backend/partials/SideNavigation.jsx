import { Gauge, LayoutDashboard, List, UtensilsCrossed } from "lucide-react";
import { NavLink } from "react-router-dom";
import { imgPath } from "../../../helpers/functions-general";
import { FaCog } from "react-icons/fa";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Dashboard",
      slug: "/admin/dashboard",
      icon: <LayoutDashboard size={16} />,
    },
    {
      title: "Recipe",
      slug: "/admin/recipe",
      icon: <UtensilsCrossed size={16} />,
    },
    {
      title: "Category",
      slug: "/admin/category",
      icon: <List size={16} />,
    },
    {
      title: "Level",
      slug: "/admin/level",
      icon: <Gauge size={16} />,
    },
    {
      title: "Settings",
      slug: "/admin/settings",
      icon: <FaCog size={16} />,
    },
  ];

  return (
    <>
      <aside className="p-4 border-r border-line">
        <img
          src={`${imgPath}/logo.png`}
          alt=""s
          className="w-[80%] h-[90px] mx-auto mt-2"
        />

        <nav>
          <ul className="mt-10">
            {links.map((item, key) => (
              <li
                className={`${
                  menu === item.slug.replaceAll("/admin/", "")
                    ? "border-accent bg-accent text-white  opacity-100"
                    : ""
                } p-2 mb-2 rounded-md border border-transparent opacity-70 hover:opacity-100`}
                key={key}
              >
                <NavLink
                  to={`${item.slug}`}
                  className="flex items-center text-base gap-3"
                >
                  {item.icon} {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideNavigation;
