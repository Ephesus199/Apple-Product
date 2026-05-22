import { useState } from "react";
import { macbookModels } from "../data";

function Macbook() {
  const [chips, setChips] = useState(0);
  const [chipsColor, setChipsColor] = useState(0); // Set default to 0 to prevent index overflow

  const currentModel = macbookModels[chips];
  const currentColor = currentModel.colors[chipsColor] || currentModel.colors[0];
  const mainImage = currentColor.img.startsWith("/") ? currentColor.img : "/" + currentColor.img;
  const chipIcon = currentModel.icon.startsWith("/") ? currentModel.icon : "/" + currentModel.icon;

  const handleChipChange = (index) => {
    setChips(index);
    setChipsColor(0); // Reset color to prevent index out of bounds between M2 (3 colors) and M3 (4 colors)
  };

  return (
    <div className="flex flex-col min-h-full justify-between gap-6 pb-4 animate-[fadeIn_0.5s_ease-out]">
      {/* Title Header */}
      <div className="text-center mb-4">
        <span className="text-[#a855f7] font-bold tracking-wider text-[10px] uppercase px-2.5 py-1 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/20">
          MacBook Air
        </span>
        <h1 className="text-3xl font-extrabold text-white mt-4 tracking-tight">
          Choose your new MacBook Air
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Supercharged by M2 or M3 chips. Astoundingly thin. Battery life for days.
        </p>
      </div>

      {/* Main Grid: Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-2 items-stretch">
        {/* Left Side: Product Showcase (6 cols) */}
        <div 
          className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0c0c0d] border relative overflow-hidden h-auto min-h-[340px] lg:h-[380px] group transition-all duration-500"
          style={{ 
            borderColor: currentColor.bg + "30",
            boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 25px ${currentColor.bg}15`
          }}
        >
          {/* Ambient color halo behind MacBook - Glows and matches selection! */}
          <div
            className="absolute w-60 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700 -z-10"
            style={{ backgroundColor: currentColor.bg.startsWith("#") ? currentColor.bg : "#ffffff" }}
          ></div>

          {/* Product Image */}
          <div className="w-full flex justify-center items-center h-48">
            <img
              src={mainImage}
              alt={`MacBook Air ${currentColor.label}`}
              className="max-h-full max-w-[85%] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-104 group-hover:-rotate-1"
            />
          </div>

          {/* Color Selector Swatches */}
          <div className="mt-6 text-center z-10">
            <span className="text-xs text-zinc-400 font-medium">
              Finish: <span className="text-white font-bold">{currentColor.label}</span>
            </span>
            <div className="flex space-x-3.5 mt-2.5 justify-center">
              {currentModel.colors.map((color, index) => {
                const isSelected = chipsColor === index;
                return (
                  <button
                    key={index}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-300 relative ${
                      isSelected
                        ? "border-white scale-115 shadow-xl"
                        : "border-transparent hover:border-zinc-500 hover:scale-105"
                    }`}
                    style={{ 
                      backgroundColor: color.bg,
                      boxShadow: isSelected ? `0 0 15px ${color.bg}` : "none" 
                    }}
                    onClick={() => setChipsColor(index)}
                    title={color.label}
                  >
                    {isSelected && (
                      <span className="absolute inset-0.5 rounded-full border border-black/30"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Configurator Controls (6 cols) */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-between h-auto min-h-[340px] lg:h-[380px] space-y-4">
          {/* Chip Configurator Selector */}
          <div>
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2.5">
              1. Select Processor
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {macbookModels.map((model, index) => {
                const isSelected = chips === index;
                const modelIcon = model.icon.startsWith("/") ? model.icon : "/" + model.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleChipChange(index)}
                    className={`flex flex-col items-start p-4 rounded-xl border-2 text-left transition-all duration-300 relative overflow-hidden ${
                      isSelected
                        ? "border-[#bf5af2] bg-[#bf5af2]/5 shadow-[0_0_20px_rgba(191,90,242,0.25)]"
                        : "border-[#2c2c2e] bg-[#1d1d1f]/80 hover:border-zinc-500 hover:bg-[#1d1d1f]"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <img src={modelIcon} alt={model.chip} className="w-5 h-5" />
                      <span className="font-bold text-sm text-white">Apple {model.chip}</span>
                    </div>
                    <span className="text-xs text-zinc-400 mt-2 font-medium">{model.price}</span>
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-8 h-8 bg-[#bf5af2]/10 rounded-bl-full flex items-center justify-center pl-2 pb-2">
                        <i className="fa-solid fa-check text-[8px] text-[#bf5af2]"></i>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Specifications list */}
          <div className="bg-[#1d1d1f]/80 border border-[#2c2c2e] rounded-xl p-4 flex-1">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
              2. Specifications Included
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-1 text-xs">
              {currentModel.specs.map((spec, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-zinc-300">
                  <i className="fa-solid fa-circle-check text-[#bf5af2] text-[10px] drop-shadow-[0_0_3px_rgba(191,90,242,0.4)]"></i>
                  <span className="font-medium truncate">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="flex items-center justify-between border-t border-[#2c2c2e] pt-4 mt-2">
            <div>
              <span className="text-[10px] text-zinc-500 uppercase font-semibold">Configured Price</span>
              <p className="text-xl font-black text-white">{currentModel.price}</p>
            </div>

            <button className="bg-gradient-to-r from-[#bf5af2] to-[#8f00ff] hover:from-[#d38dfc] hover:to-[#a733ff] active:scale-95 text-white font-medium text-xs px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(191,90,242,0.25)] flex items-center space-x-2 group">
              <span>Add to Bag</span>
              <i className="fa-solid fa-cart-shopping text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Macbook;
