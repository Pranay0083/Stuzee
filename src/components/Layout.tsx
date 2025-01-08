import React, { useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import {
  Menu,
  Bell,
  User,
  Home,
  Book,
  MessageCircle,
  Edit,
  HelpCircle,
  ChartArea,
} from "lucide-react";

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const navigationItems = [
    { href: "/dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { href: "/courses", label: "Courses", icon: <Book size={20} /> },
    {
      href: "/discussions",
      label: "Discussions",
      icon: <MessageCircle size={20} />,
    },
    { href: "/analytics", label: "Analytics", icon: <ChartArea size={20} /> },
    { href: "/assignments", label: "Assignments", icon: <Edit size={20} /> },
    { href: "/feedback", label: "Feedback", icon: <Edit size={20} /> },
    { href: "/help", label: "Help & Support", icon: <HelpCircle size={20} /> },
    { href: "/logout", label: "Logout", icon: <User size={20} /> },
  ];

  const getCurrentTitle = () => {
    const currentPath = location.pathname;
    const currentItem = navigationItems.find(
      (item) => item.href === currentPath
    );
    return currentItem?.label || "Dashboard";
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className="h-screen flex flex-col bg-[#EBF4F5] font-roboto">
      {/* Header */}
      <header className="h-16 bg-gradient-to-r from-[#EBF4F5] via-[#DCE7F0] to-[#B5C6E0] text-gray-800 flex items-center justify-between px-4 fixed w-full top-0 z-50">
        <div className="flex items-center gap-1">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-[#B5C6E0]/30 active:bg-[#B5C6E0]/50 rounded-xl transition-colors"
            aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          >
            <Menu size={24} />
          </button>
          <span className="text-xl font-bold font-playfair">Stuzee</span>
        </div>

        <h2 className="text-lg font-semibold absolute left-1/2 -translate-x-1/2 hidden md:block text-gray-700 font-playfair">
          &lt; {getCurrentTitle()} /&gt;
        </h2>

        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-[#B5C6E0]/30 active:bg-[#B5C6E0]/50 rounded-xl transition-colors"
            aria-label="Announcements"
          >
            <Bell size={24} />
          </button>
          <Link
            to="/profile"
            className="p-2 hover:bg-[#B5C6E0]/30 active:bg-[#B5C6E0]/50 rounded-xl transition-colors"
            aria-label="Profile"
          >
            <User size={24} />
          </Link>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed md:relative transition-all duration-300 ease-in-out h-[calc(100vh-4rem)]
            ${isSidebarOpen ? "w-48" : "w-0"} 
            bg-gradient-to-r from-[#EBF4F5] via-[#E5EFF3] to-[#DCE7F0] text-gray-800 overflow-hidden flex flex-col justify-between`}
        >
          <nav className="p-4 flex-grow">
            <ul className="space-y-2 flex flex-col justify-center h-full">
              {navigationItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`flex items-center px-2 py-2 rounded-xl transition-all duration-200
                      ${
                        isActive(item.href)
                          ? "bg-[#B5C6E0]/40 text-gray-900 font-medium shadow-sm"
                          : "hover:bg-[#B5C6E0]/20 active:bg-[#B5C6E0]/30 text-gray-700"
                      } whitespace-nowrap`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="transition-opacity duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="py-6 px-4">
            <ul className="space-y-2">
              {navigationItems.slice(5).map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`flex items-center px-2 py-2 rounded-xl transition-all duration-200
                      ${
                        isActive(item.href)
                          ? "bg-[#B5C6E0]/40 text-gray-900 font-medium shadow-sm"
                          : "hover:bg-[#B5C6E0]/20 active:bg-[#B5C6E0]/30 text-gray-700"
                      } whitespace-nowrap`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="transition-opacity duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main
          className={`flex-1 p-4 transition-all duration-300 overflow-hidden`}
        >
          <div className="mx-auto bg-gradient-to-r from-[#EBF4F5] via-[#DCE7F0] to-[#B5C6E0] rounded-xl shadow-lg min-h-[calc(100vh-7rem)] overflow-auto">
            <div className="p-6">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
