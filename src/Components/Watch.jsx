import { watchModels } from "../data";

function Watch() {
  return (
    <div className="flex flex-col min-h-full justify-between gap-6 pb-4 animate-[fadeIn_0.5s_ease-out]">
      {/* Title Header */}
      <div className="text-center mb-4">
        <span className="text-[#ff453a] font-bold tracking-wider text-[10px] uppercase px-2.5 py-1 rounded-full bg-[#ff453a]/10 border border-[#ff453a]/25 shadow-sm shadow-black/40">
          Apple Watch Collection
        </span>
        <h1 className="text-3xl font-extrabold text-white mt-4 tracking-tight">
          Which Apple Watch is right for you?
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Explore the perfect balance of health tracking, elegant watch bands, and active lifestyle features.
        </p>
      </div>

      {/* Watches Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {watchModels.map((watch, index) => {
          const imgDefault = watch.imgs[0].startsWith("/") ? watch.imgs[0] : "/" + watch.imgs[0];
          const imgHover = watch.imgs[1].startsWith("/") ? watch.imgs[1] : "/" + watch.imgs[1];
          
          // Differentiate watch models with unique brand theme colors
          let watchTheme = {
            accentColor: "text-[#0071e3]",
            badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
            buttonGrad: "from-[#0071e3] to-[#5856d6] hover:from-[#147ce5] hover:to-[#635bff] shadow-blue-500/20",
            glowColor: "bg-[#0071e3]",
            hoverBorder: "hover:border-[#0071e3]/50 hover:shadow-[0_12px_30px_rgba(0,113,227,0.15)]",
            iconClass: "text-[#0071e3]",
            badgeLabel: "Standard"
          };

          if (watch.name.includes("Series 10")) {
            watchTheme = {
              accentColor: "text-[#ff453a]",
              badge: "text-[#ff453a] bg-[#ff453a]/10 border-[#ff453a]/25",
              buttonGrad: "from-[#ff453a] to-[#ff9500] hover:from-[#ff6259] hover:to-[#ffab33] shadow-red-500/20",
              glowColor: "bg-[#ff453a]",
              hoverBorder: "hover:border-[#ff453a]/50 hover:shadow-[0_12px_30px_rgba(255,69,58,0.18)]",
              iconClass: "text-[#ff453a]",
              badgeLabel: "Sunset Red"
            };
          } else if (watch.name.includes("Hermes") || watch.name.includes("Hermès")) {
            watchTheme = {
              accentColor: "text-[#ff9500]",
              badge: "text-[#ff9500] bg-[#ff9500]/10 border-[#ff9500]/25",
              buttonGrad: "from-[#ff9500] to-[#e67e22] hover:from-[#ffa826] hover:to-[#f39c12] shadow-orange-500/20",
              glowColor: "bg-[#ff9500]",
              hoverBorder: "hover:border-[#ff9500]/50 hover:shadow-[0_12px_30px_rgba(255,149,0,0.18)]",
              iconClass: "text-[#ff9500]",
              badgeLabel: "Luxury Gold"
            };
          } else {
            // Watch SE
            watchTheme = {
              accentColor: "text-[#0a84ff]",
              badge: "text-[#0a84ff] bg-[#0a84ff]/10 border-[#0a84ff]/25",
              buttonGrad: "from-[#0a84ff] to-[#00c6ff] hover:from-[#339cff] hover:to-[#33d6ff] shadow-blue-500/20",
              glowColor: "bg-[#0a84ff]",
              hoverBorder: "hover:border-[#0a84ff]/50 hover:shadow-[0_12px_30px_rgba(10,132,255,0.15)]",
              iconClass: "text-[#0a84ff]",
              badgeLabel: "Vibrant Cyan"
            };
          }
          
          return (
            <div
              key={index}
              className={`rounded-2xl border border-[#2c2c2e] bg-[#1d1d1f]/80 p-5 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1.5 ${watchTheme.hoverBorder}`}
            >
              {/* Image Swap Viewport (h-52, relative, no layout collapse) */}
              <div className="relative h-52 w-full flex items-center justify-center bg-[#0c0c0d] rounded-xl mb-5 overflow-hidden border border-[#2c2c2e]">
                {/* Soft backdrop radial light */}
                <div className={`absolute w-24 h-24 rounded-full blur-3xl opacity-5 group-hover:opacity-25 group-hover:scale-130 transition-all duration-700 -z-10 ${watchTheme.glowColor}`}></div>
                
                {/* Default Front View */}
                <img
                  src={imgDefault}
                  alt={watch.name}
                  className="absolute max-h-[85%] max-w-[85%] object-contain opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-95 transition-all duration-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
                />

                {/* Hover Side View */}
                <img
                  src={imgHover}
                  alt={`${watch.name} side profile`}
                  className="absolute max-h-[85%] max-w-[85%] object-contain opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
                />
                
                {/* Visual Cue Overlay */}
                <span className="absolute bottom-2.5 right-3 text-[9px] text-zinc-500 font-semibold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <i className={`fa-solid fa-arrows-rotate mr-1 ${watchTheme.iconClass}`}></i> Hover to Rotate
                </span>
              </div>

              {/* Watch Details Flow */}
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-zinc-150 transition-colors duration-300">
                    {watch.name}
                  </h3>
                  <span className={`text-[8px] font-bold border px-2 py-0.5 rounded-full uppercase tracking-wider ${watchTheme.badge}`}>
                    {watchTheme.badgeLabel}
                  </span>
                </div>
                
                {/* Specifications List */}
                <div className="space-y-2 border-t border-[#2c2c2e] pt-3.5 mt-3.5 mb-5 text-[11px] text-zinc-400">
                  {watch.desc.map((spec, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-zinc-400">
                      <i className={`fa-regular fa-clock ${watchTheme.iconClass} text-[10px] w-3.5`}></i>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Purchase */}
              <div className="border-t border-[#2c2c2e] pt-4 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-semibold">Price</span>
                  <p className="text-sm font-bold text-white">{watch.price}</p>
                </div>

                <button className={`bg-gradient-to-r ${watchTheme.buttonGrad} active:scale-95 text-white font-medium text-xs px-4 py-2 rounded-xl transition-all duration-300 shadow-md flex items-center space-x-2 group/btn`}>
                  <span>Shop</span>
                  <i className="fa-solid fa-chevron-right text-[9px] group-hover/btn:translate-x-0.5 transition-transform"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Watch;
