import { useState } from "react";
import { imacModels } from "../data";

function Imac() {
  const [imacColor, setImacColor] = useState(0);
  const [activeTab, setActiveTab] = useState("front"); // 'front' | 'back' | 'side'

  const currentModel = imacModels[imacColor];
  
  // Resolve image paths safely
  const getImagePath = (view) => {
    const rawPath = currentModel.images[view];
    return rawPath.startsWith("/") ? rawPath : "/" + rawPath;
  };

  const tabs = [
    { id: "front", label: "Front View", icon: "fa-solid fa-desktop" },
    { id: "back", label: "Back View", icon: "fa-solid fa-display" },
    { id: "side", label: "Side Profile", icon: "fa-solid fa-server" },
  ];

  // Mapped design tokens for gorgeous finish-matching buttons and badges
  const getDynamicTheme = (label) => {
    switch (label) {
      case "Green":
        return {
          gradient: "from-[#10505b] to-[#1f7380] hover:from-[#156370] hover:to-[#288896]",
          shadow: "shadow-[0_4px_15px_rgba(16,80,91,0.3)]",
          glow: "rgba(16,80,91,0.25)"
        };
      case "Yellow":
        return {
          gradient: "from-[#d48207] to-[#e5981a] hover:from-[#c27606] hover:to-[#f3a62a]",
          shadow: "shadow-[0_4px_15px_rgba(212,130,7,0.3)]",
          glow: "rgba(212,130,7,0.25)"
        };
      case "Orange":
        return {
          gradient: "from-[#e36942] to-[#eb7e5b] hover:from-[#d15c35] hover:to-[#fa8c69]",
          shadow: "shadow-[0_4px_15px_rgba(227,105,66,0.3)]",
          glow: "rgba(227,105,66,0.25)"
        };
      case "Pink":
        return {
          gradient: "from-[#b72c31] to-[#c74045] hover:from-[#a32327] hover:to-[#d94d52]",
          shadow: "shadow-[0_4px_15px_rgba(183,44,49,0.3)]",
          glow: "rgba(183,44,49,0.25)"
        };
      case "Purple":
        return {
          gradient: "from-[#353a71] to-[#494f91] hover:from-[#2a2e5c] hover:to-[#575eab]",
          shadow: "shadow-[0_4px_15px_rgba(53,58,113,0.3)]",
          glow: "rgba(53,58,113,0.25)"
        };
      case "Silver":
        return {
          gradient: "from-[#7f8c8d] to-[#95a5a6] hover:from-[#6c7a7b] hover:to-[#aab6b7]",
          shadow: "shadow-[0_4px_15px_rgba(127,140,141,0.3)]",
          glow: "rgba(127,140,141,0.25)"
        };
      default:
        return {
          gradient: "from-[#0071e3] to-[#5856d6] hover:from-[#147ce5] hover:to-[#635bff]",
          shadow: "shadow-[0_4px_15px_rgba(0,113,227,0.3)]",
          glow: "rgba(0,113,227,0.25)"
        };
    }
  };

  const theme = getDynamicTheme(currentModel.label);

  return (
    <div className="flex flex-col min-h-full justify-between gap-6 pb-4 animate-[fadeIn_0.5s_ease-out]">
      {/* Title Header */}
      <div className="text-center mb-4">
        <span 
          className="font-bold tracking-wider text-[10px] uppercase px-2.5 py-1 rounded-full border transition-all duration-300 shadow-sm shadow-black/40"
          style={{
            color: currentModel.bg,
            backgroundColor: currentModel.bg + "12",
            borderColor: currentModel.bg + "30",
          }}
        >
          iMac 24”
        </span>
        <h1 className="text-3xl font-extrabold text-white mt-4 tracking-tight">
          iMac. In color.
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Stunningly thin. Packed with the power of M3. Seven brilliant finishes.
        </p>
      </div>

      {/* Main Split Layout - Fully Responsive Stack or Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-2">
        {/* Left Column: Color Palette & Info (5 cols) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-between h-auto min-h-[420px] lg:h-[450px] p-6 rounded-2xl bg-[#1d1d1f]/80 border border-[#2c2c2e]">
          <div>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
              1. Choose Finish
            </span>
            <h3 className="text-2xl font-black text-white mt-1 tracking-tight">
              {currentModel.label}
            </h3>
            
            {/* Color Swatch Dots */}
            <div className="grid grid-cols-6 gap-3 mt-4">
              {imacModels.map((imac, index) => {
                const isSelected = imacColor === index;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setImacColor(index);
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 relative group flex items-center justify-center ${
                      isSelected
                        ? "border-white scale-110 shadow-lg"
                        : "border-transparent hover:border-zinc-500 hover:scale-105"
                    }`}
                    style={{ 
                      backgroundColor: imac.bg,
                      boxShadow: isSelected ? `0 0 12px ${imac.bg}` : "none"
                    }}
                    title={imac.label}
                  >
                    {isSelected && (
                      <i className="fa-solid fa-check text-[10px] text-white mix-blend-difference"></i>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Specs Snippet */}
          <div className="border-t border-[#2c2c2e] pt-4 mt-6 lg:mt-0">
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2.5">
              2. Specifications Included
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center space-x-2">
                <i 
                  className="fa-solid fa-desktop text-[10px] transition-colors duration-350"
                  style={{ color: currentModel.bg }}
                ></i>
                <span>Spectacular 24-inch 4.5K Retina Display</span>
              </li>
              <li className="flex items-center space-x-2">
                <i 
                  className="fa-solid fa-microchip text-[10px] transition-colors duration-350"
                  style={{ color: currentModel.bg }}
                ></i>
                <span>Apple M3 Chip with 8-core CPU & GPU</span>
              </li>
              <li className="flex items-center space-x-2">
                <i 
                  className="fa-solid fa-video text-[10px] transition-colors duration-350"
                  style={{ color: currentModel.bg }}
                ></i>
                <span>1080p FaceTime HD camera & studio mics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Retina Showcase Gallery (7 cols) */}
        <div 
          className="col-span-1 lg:col-span-7 flex flex-col items-center justify-between p-6 rounded-2xl bg-[#0c0c0d] border relative overflow-hidden h-auto min-h-[420px] lg:h-[450px] group transition-all duration-500"
          style={{
            borderColor: currentModel.bg + "25",
            boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px ${currentModel.bg}10`
          }}
        >
          {/* Glowing Aura backdrop that matches the selected iMac color */}
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-15 transition-all duration-700 -z-10 group-hover:opacity-30 group-hover:scale-120"
            style={{ backgroundColor: currentModel.bg }}
          ></div>

          {/* Interactive Showcase Tabs */}
          <div className="flex bg-black/80 border border-[#2d2d30] p-1 rounded-xl space-x-1.5 shadow-md z-10 flex-wrap justify-center gap-1.5 sm:gap-0">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: isSelected ? currentModel.bg : "transparent",
                    color: isSelected ? "#ffffff" : "#a1a1aa",
                    boxShadow: isSelected ? `0 0 10px ${currentModel.bg}40` : "none"
                  }}
                >
                  <i className={`${tab.icon} text-[10px]`}></i>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Large Interactive Image View - Responsive height to guarantee zero vertical squeezing */}
          <div className="w-full h-[200px] sm:h-[250px] flex items-center justify-center py-2 my-4 lg:my-0">
            <img
              src={getImagePath(activeTab)}
              alt={`${currentModel.label} iMac ${activeTab}`}
              className="max-h-full max-w-[95%] object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.55)] transition-all duration-500 hover:scale-104"
            />
          </div>

          {/* Quick Info bar */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-[#2c2c2e] pt-3 mt-1 z-10 gap-3 sm:gap-0">
            <div className="text-[10px] text-zinc-500 font-semibold uppercase">
              Free Shipping & Returns
            </div>
            <div className="flex items-center space-x-3.5 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-left sm:text-right">
                <span className="text-[9px] text-zinc-500 uppercase font-semibold">Total Price</span>
                <p className="text-sm font-bold text-white">From $1,299</p>
              </div>
              
              <button 
                className={`relative overflow-hidden bg-gradient-to-r ${theme.gradient} ${theme.shadow} active:scale-95 text-white font-medium text-xs px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 group/btn`}
              >
                <span>Add to Bag</span>
                <i className="fa-solid fa-cart-shopping text-[9px] group-hover/btn:translate-x-0.5 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imac;
