import { Outlet, NavLink } from "react-router";

function AppLayout() {
  const menuItems = [
    { to: "/", label: "Home", icon: "fa-solid fa-house" },
    { to: "/iphone", label: "iPhone", icon: "fa-solid fa-mobile-screen-button" },
    { to: "/macbook", label: "MacBook", icon: "fa-solid fa-laptop" },
    { to: "/watch", label: "Watch", icon: "fa-solid fa-clock" },
    { to: "/imac", label: "iMac", icon: "fa-solid fa-desktop" },
  ];

  const colorMap = {
    "/": {
      activeClass: "bg-[#0071e3]/10 border-[#0071e3] text-white shadow-[0_0_15px_rgba(0,113,227,0.15)] pl-3.5 border-l-2",
      iconClass: "text-[#0071e3]",
      hoverClass: "hover:text-white hover:bg-[#0071e3]/5 hover:border-l-2 hover:border-[#0071e3]/30 hover:pl-3.5",
    },
    "/iphone": {
      activeClass: "bg-[#5e5ce6]/10 border-[#5e5ce6] text-white shadow-[0_0_15px_rgba(94,92,230,0.15)] pl-3.5 border-l-2",
      iconClass: "text-[#5e5ce6]",
      hoverClass: "hover:text-white hover:bg-[#5e5ce6]/5 hover:border-l-2 hover:border-[#5e5ce6]/30 hover:pl-3.5",
    },
    "/macbook": {
      activeClass: "bg-[#bf5af2]/10 border-[#bf5af2] text-white shadow-[0_0_15px_rgba(191,90,242,0.15)] pl-3.5 border-l-2",
      iconClass: "text-[#bf5af2]",
      hoverClass: "hover:text-white hover:bg-[#bf5af2]/5 hover:border-l-2 hover:border-[#bf5af2]/30 hover:pl-3.5",
    },
    "/watch": {
      activeClass: "bg-[#ff9500]/10 border-[#ff9500] text-white shadow-[0_0_15px_rgba(255,149,0,0.15)] pl-3.5 border-l-2",
      iconClass: "text-[#ff9500]",
      hoverClass: "hover:text-white hover:bg-[#ff9500]/5 hover:border-l-2 hover:border-[#ff9500]/30 hover:pl-3.5",
    },
    "/imac": {
      activeClass: "bg-[#30d158]/10 border-[#30d158] text-white shadow-[0_0_15px_rgba(48,209,88,0.15)] pl-3.5 border-l-2",
      iconClass: "text-[#30d158]",
      hoverClass: "hover:text-white hover:bg-[#30d158]/5 hover:border-l-2 hover:border-[#30d158]/30 hover:pl-3.5",
    },
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto my-0 lg:my-8 h-auto lg:h-[calc(100vh-4rem)] rounded-none lg:rounded-3xl overflow-y-auto lg:overflow-hidden glass-panel premium-glow shadow-2xl min-h-screen lg:min-h-0">
      {/* Sidebar navigation */}
      <div className="w-full lg:w-72 bg-[#0c0c0d] p-4 lg:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1d1d1f] backdrop-blur-md shrink-0">
        <div>
          {/* Logo Brand Header */}
          <div className="flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start mb-4 lg:mb-12 mt-1 lg:mt-2 px-2">
            <div className="flex items-center space-x-3">
              <i className="fa-brands fa-apple text-3xl text-white"></i>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Apple Products
              </span>
            </div>
            <div className="lg:hidden text-[10px] text-zinc-500 font-medium bg-[#1d1d1f] px-2.5 py-1 rounded-full border border-[#2d2d30]">
              2025 Collection
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-1.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
            {menuItems.map((item) => {
              const theme = colorMap[item.to];
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-2.5 lg:py-3 rounded-xl transition-all duration-300 font-medium border-l border-t lg:border-t-0 border-transparent shrink-0 ${
                      isActive ? theme.activeClass : `text-zinc-400 ${theme.hoverClass}`
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center space-x-3 lg:space-x-4">
                        <i
                          className={`${item.icon} text-sm lg:text-base transition-colors duration-300 ${
                            isActive ? theme.iconClass : "text-zinc-500 group-hover:text-zinc-300"
                          }`}
                        ></i>
                        <span className="text-xs lg:text-sm tracking-wide">{item.label}</span>
                      </span>
                      <i
                        className={`hidden lg:block fa-solid fa-chevron-right text-[10px] transition-all duration-300 ${
                          isActive ? `opacity-65 translate-x-0.5 ${theme.iconClass}` : "opacity-0"
                        }`}
                      ></i>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Brand Footer */}
        <div className="hidden lg:block px-2 py-4 border-t border-[#1d1d1f]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#1d1d1f] border border-[#2d2d30] flex items-center justify-center shadow-lg">
              <i className="fa-solid fa-store text-xs text-zinc-400"></i>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-300">Apple Experience</p>
              <p className="text-[10px] text-zinc-500">2025 Collection Showcase</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-[#161617] border-l-0 lg:border-l border-[#2d2d30] flex flex-col min-h-0">
        <div className="flex-1 p-4 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
