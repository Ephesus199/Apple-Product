import { NavLink } from "react-router";

function Home() {
  const cards = [
    {
      to: "/iphone",
      title: "iPhone",
      subtitle: "The ultimate power in your hands.",
      badge: "Best Seller",
      img: "/images/iphone.jpg",
      gradient: "from-[#0071e3]/25 via-[#0071e3]/5 to-transparent",
      accentBg: "group-hover:bg-[#0071e3] group-hover:border-[#0071e3] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,113,227,0.4)]",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      hoverBorder: "group-hover:border-[#0071e3]/60",
      glowShadow: "group-hover:shadow-[0_8px_30px_rgba(0,113,227,0.2)]",
    },
    {
      to: "/macbook",
      title: "MacBook",
      subtitle: "Mind-blowing thinness and speed.",
      badge: "Pro Chip",
      img: "/images/macbook.jpg",
      gradient: "from-[#a855f7]/25 via-[#a855f7]/5 to-transparent",
      accentBg: "group-hover:bg-[#a855f7] group-hover:border-[#a855f7] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      hoverBorder: "group-hover:border-[#a855f7]/60",
      glowShadow: "group-hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]",
    },
    {
      to: "/watch",
      title: "Smart Watch",
      subtitle: "A giant leap for your health.",
      badge: "Series 10",
      img: "/images/watch.jpg",
      gradient: "from-[#ff453a]/25 via-[#ff453a]/5 to-transparent",
      accentBg: "group-hover:bg-[#ff453a] group-hover:border-[#ff453a] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,69,58,0.4)]",
      badgeColor: "text-red-400 bg-red-500/10 border-red-500/20",
      hoverBorder: "group-hover:border-[#ff453a]/60",
      glowShadow: "group-hover:shadow-[0_8px_30px_rgba(255,69,58,0.2)]",
    },
    {
      to: "/imac",
      title: "iMac",
      subtitle: "Stunning colors. Brilliant display.",
      badge: "Colours",
      img: "/images/imac.png",
      gradient: "from-[#30d158]/25 via-[#30d158]/5 to-transparent",
      accentBg: "group-hover:bg-[#30d158] group-hover:border-[#30d158] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(48,209,88,0.4)]",
      badgeColor: "text-green-400 bg-green-500/10 border-green-500/20",
      hoverBorder: "group-hover:border-[#30d158]/60",
      glowShadow: "group-hover:shadow-[0_8px_30px_rgba(48,209,88,0.2)]",
    },
  ];

  return (
    <div className="flex flex-col min-h-full justify-between gap-6 pb-4">
      {/* Header section */}
      <div className="mb-2 animate-[fadeIn_0.5s_ease-out]">
        <span className="text-zinc-400 font-semibold tracking-wider text-[10px] uppercase px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm shadow-black/50">
          2025 Apple Showcase
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-4 tracking-tight font-display">
          Choose Your <span className="bg-gradient-to-r from-[#0071e3] via-[#a855f7] to-[#30d158] bg-clip-text text-transparent">Next Device</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-1 max-w-lg">
          Immerse yourself in spectacular retina displays, industry-leading performance, and gorgeous aluminum finishes.
        </p>
      </div>

      {/* Grid of Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
        {cards.map((card, index) => (
          <NavLink
            key={index}
            to={card.to}
            className={`group block relative rounded-2xl overflow-hidden glass-card p-5 flex flex-col justify-between h-auto min-h-[190px] lg:h-[190px] ${card.hoverBorder} ${card.glowShadow}`}
          >
            {/* Ambient Background Gradient behind each card on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10`}
            ></div>

            {/* Top row */}
            <div className="flex justify-between items-start">
              <div>
                <span className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border ${card.badgeColor}`}>
                  {card.badge}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-2.5">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 max-w-[180px] leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              {/* Hover arrow button */}
              <div className={`w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-300 shadow-md ${card.accentBg}`}>
                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.5 transition-transform"></i>
              </div>
            </div>

            {/* Image section with perfect placement */}
            <div className="flex justify-end items-end relative overflow-hidden -mr-2 -mb-2 mt-4 lg:mt-0">
              <div className="w-28 h-20 flex items-end justify-end">
                <img
                  src={card.img}
                  alt={card.title}
                  className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-108 transition-all duration-500 shadow-xl group-hover:rotate-1"
                />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Home;
