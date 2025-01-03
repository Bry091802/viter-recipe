import React from "react";
import { FaChevronRight, FaDev, FaUser, FaUserCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SettingsList = () => {
  const links = [
    {
      title: "Role",
      slug: "/admin/settings/role",
      icon: <FaUserCog size={16} />,
    },
    {
      title: "Developer",
      slug: "/developer/settings/developer",
      icon: <FaDev size={16} />,
    },
    {
      title: "Users",
      slug: "/admin/settings/users",
      icon: <FaUser size={16} />,
    },
  ];

  return (
    <>
      <ul>
        {links.map((item, key) => {
          return (
            <li key={key} className="flex gap-2 text-base items-center">
              <NavLink className="flex gap-2 p-2 w-full items-center justify-between hover:bg-gray-100/5"to={`${item.slug}`}>
                <div className="flex items-center gap-2" >
                  {item.icon}
                  {item.title}
                </div>
                <div>
                  <FaChevronRight />
                </div>
              </NavLink>
            </li>
          );
        })}
        <li></li>
      </ul>
    </>
  );
};

export default SettingsList;
