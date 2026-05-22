import { iphoneModels } from "../data";

function Iphone() {
  return (
    <div className="flex flex-col min-h-full justify-between gap-6 pb-4 animate-[fadeIn_0.5s_ease-out]">
      {/* Title Header */}
      <div className="text-center mb-4">
        <span className="text-[#0071e3] font-bold tracking-wider text-[10px] uppercase px-2.5 py-1 rounded-full bg-[#0071e3]/10 border border-[#0071e3]/20">
          iPhone Family
        </span>
        <h1 className="text-3xl font-extrabold text-white mt-4 tracking-tight">
          Which iPhone is right for you?
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Compare models and find the perfect match of style, power, and size.
        </p>
      </div>

      {/* iPhone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {iphoneModels.map((iphone, index) => {
          const imageSrc = iphone.img.startsWith("/") ? iphone.img : "/" + iphone.img;
          
          // Different brand themes for each individual model
          let modelTheme = {
            accentColor: "text-[#0071e3]",
            badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
            buttonGrad: "from-[#0071e3] to-[#5856d6] hover:from-[#147ce5] hover:to-[#635bff] shadow-blue-500/20",
            glowBg: "bg-[#0071e3]",
            hoverBorder: "hover:border-[#0071e3]/50 hover:shadow-[0_12px_30px_rgba(0,113,227,0.15)]",
            iconClass: "text-[#0071e3]",
            chip: "A18 Chip with 16-core Neural Engine",
            camera: "Advanced Dual Camera (48MP Main)",
            badgeLabel: "Standard"
          };

          if (iphone.name.includes("Pro Max")) {
            modelTheme = {
              accentColor: "text-[#b5a38f]",
              badge: "text-[#b5a38f] bg-[#b5a38f]/10 border-[#b5a38f]/30",
              buttonGrad: "from-[#b5a38f] to-[#8a7a67] hover:from-[#c2b09b] hover:to-[#9a8974] shadow-[#b5a38f]/20",
              glowBg: "bg-[#b5a38f]",
              hoverBorder: "hover:border-[#b5a38f]/50 hover:shadow-[0_12px_30px_rgba(181,163,143,0.18)]",
              iconClass: "text-[#b5a38f]",
              chip: "A18 Pro Chip with 16-core Neural Engine",
              camera: "Pro Camera (48MP Main & 5x Telephoto)",
              badgeLabel: "Titanium Pro"
            };
          } else if (iphone.name.includes("Plus")) {
            modelTheme = {
              accentColor: "text-[#5e5ce6]",
              badge: "text-[#5e5ce6] bg-[#5e5ce6]/10 border-[#5e5ce6]/25",
              buttonGrad: "from-[#5e5ce6] to-[#0071e3] hover:from-[#7472ff] hover:to-[#147ce5] shadow-[#5e5ce6]/20",
              glowBg: "bg-[#5e5ce6]",
              hoverBorder: "hover:border-[#5e5ce6]/50 hover:shadow-[0_12px_30px_rgba(94,92,230,0.15)]",
              iconClass: "text-[#5e5ce6]",
              chip: "A18 Chip with 16-core Neural Engine",
              camera: "Advanced Dual Camera (48MP)",
              badgeLabel: "Powerhouse"
            };
          } else {
            modelTheme = {
              accentColor: "text-[#ff2d55]",
              badge: "text-[#ff2d55] bg-[#ff2d55]/10 border-[#ff2d55]/25",
              buttonGrad: "from-[#ff2d55] to-[#ff3b30] hover:from-[#ff456e] hover:to-[#ff5247] shadow-[#ff2d55]/20",
              glowBg: "bg-[#ff2d55]",
              hoverBorder: "hover:border-[#ff2d55]/50 hover:shadow-[0_12px_30px_rgba(255,45,85,0.15)]",
              iconClass: "text-[#ff2d55]",
              chip: "A18 Chip with 16-core Neural Engine",
              camera: "Advanced Dual Camera (48MP)",
              badgeLabel: "Vibrant"
            };
          }

          return (
            <div
              key={index}
              className={`rounded-2xl border border-[#2c2c2e] bg-[#1d1d1f]/80 p-6 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1.5 ${modelTheme.hoverBorder}`}
            >
              {/* Product Image Panel with glowing ambient light */}
              <div className="relative flex justify-center items-center py-6 bg-[#0c0c0d] rounded-xl mb-6 overflow-hidden border border-[#2c2c2e]">
                {/* Soft backdrop radial light - Glows dynamically on hover! */}
                <div className={`absolute w-32 h-32 rounded-full blur-3xl opacity-5 group-hover:opacity-25 group-hover:scale-130 transition-all duration-700 -z-10 ${modelTheme.glowBg}`}></div>
                
                <img
                  src={imageSrc}
                  alt={iphone.name}
                  className="h-44 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
                />
              </div>

              {/* Text Specs & Details */}
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {iphone.name}
                  </h3>
                  <span className={`text-[8px] font-bold border px-2 py-0.5 rounded-full uppercase tracking-wider ${modelTheme.badge}`}>
                    {modelTheme.badgeLabel}
                  </span>
                </div>
                
                <p className="text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                  {iphone.description}
                </p>

                {/* Sub-Specs List */}
                <div className="space-y-2 border-t border-[#2c2c2e] pt-4 mb-6 text-[11px] text-zinc-500">
                  <div className="flex items-center space-x-2">
                    <i className={`fa-solid fa-microchip ${modelTheme.iconClass} text-xs w-4`}></i>
                    <span>{modelTheme.chip}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className={`fa-solid fa-camera ${modelTheme.iconClass} text-xs w-4`}></i>
                    <span>{modelTheme.camera}</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA Button */}
              <div className="border-t border-[#2c2c2e] pt-4 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-semibold">Total Price</span>
                  <p className="text-sm font-bold text-white">{iphone.price}</p>
                </div>
                
                <button className={`relative overflow-hidden bg-gradient-to-r ${modelTheme.buttonGrad} active:scale-95 text-white font-medium text-xs px-4 py-2 rounded-xl transition-all duration-300 shadow-md flex items-center space-x-2 group/btn`}>
                  <span>Buy Now</span>
                  <i className="fa-solid fa-bag-shopping text-[10px] group-hover/btn:translate-y-[-1px] transition-transform"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Iphone;
