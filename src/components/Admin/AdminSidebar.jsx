import React from "react";
import { assets } from "../../assets/assets";
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const user = {
    firstname: "Narayana",
    lastname: "Murthy",
    imageUrl: '/profile.png',
  };

  const adminNavLinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon, end: true },
    { name: "List Shows", path: "/admin/list-shows", icon: ListIcon },
    { name: "List Bookings", path: "/admin/list-bookings", icon: ListCollapseIcon },
  ];

  return (
    <div className="flex h-[calc(100vh-75px)] w-16 md:w-64 flex-col items-center bg-gray-900 text-gray-200 border-r border-gray-700/30 rounded-r-lg mt-4 transition-all duration-300 ease-in-out">
      {/* User Profile Section */}
      <div className="pt-6 pb-4 flex flex-col items-center">
        <img
          className="h-10 w-10 md:h-12 md:w-12 rounded-full ring-2 ring-red-600/50 transition-transform hover:scale-105"
          src={user.imageUrl}
          alt={`${user.firstname} ${user.lastname}'s profile picture`}
        />
        <p className="mt-3 text-sm font-medium max-md:hidden">{user.firstname} {user.lastname}</p>
      </div>

      {/* Navigation Links */}
      <nav className="w-full flex-1 flex flex-col gap-1 px-2 md:px-4">
        {adminNavLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end={link.end}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-red-600/20 hover:text-white ${
                isActive ? "bg-red-600/30 text-red-500" : "text-gray-300"
              }`
            }
            title={link.name}
            aria-label={`Navigate to ${link.name}`}
          >
            {({ isActive }) => (
              <>
                <link.icon className="h-5 w-5 flex-shrink-0" />
                <span className="max-md:hidden truncate">{link.name}</span>
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r bg-red-500" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;