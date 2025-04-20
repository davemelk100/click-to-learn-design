import React from "react";
import {
  MessageSquare,
  Palette,
  Info,
  Settings,
  Eye,
  RefreshCw,
  Brain,
  Hand,
} from "lucide-react";
import DesignSection from "./components/DesignSection";

interface DesignSectionProps {
  title: string;
  description: string;
  designPrinciple: string;
  exampleLink: string;
  visualComponent: React.ReactNode;
  fontFamily?:
    | "dm-sans"
    | "eb-garamond"
    | "source-code-pro"
    | "share-tech"
    | "niconne"
    | "rubik-scribble"
    | "habibi"
    | "anek-gurmukhi"
    | "oswald"
    | "roboto-slab"
    | "urbanist"
    | "bree-serif"
    | "courgette"
    | "permanent-marker"
    | "helvetica"
    | "avenir"
    | "roboto"
    | "josefin-sans"
    | "roboto-flex"
    | "domine"
    | "figtree"
    | "futura-condensed"
    | "source-sans"
    | "solway"
    | "chelsea-market"
    | "tektur"
    | "sriracha"
    | "doto"
    | "bowlby-one-sc"
    | "protest-revolution"
    | "outfit";
  descriptionClassName?: string;
  titleClassName?: string;
  background?: string;
}

function App() {
  return (
    <div className="min-h-screen w-full">
      <header className="sticky top-0 z-50 py-2 bg-black">
        <div className="flex items-center pl-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative group">
              <div className="absolute w-8 h-8">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-6 h-px border-t border-dashed border-white/80 transform transition-all duration-500 group-hover:border-white group-hover:animate-pulse"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${
                        i * 45
                      }deg) translate(3px)`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
              <div
                className="absolute w-2 h-2 bg-white rounded-full transform transition-all duration-500 group-hover:scale-150 group-hover:animate-bounce"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
            <span className="text-2xl font-medium text-white ml-[10px]">
              DESIGN PANES
            </span>
          </div>
          <div className="flex items-center gap-4 ml-8">
            <a
              href="#design"
              className="text-white hover:text-white/80 transition-colors duration-300"
            >
              Design
            </a>
            <a
              href="#designers"
              className="text-white hover:text-white/80 transition-colors duration-300"
            >
              Designers
            </a>
          </div>
          <a
            href="https://davemelk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto mr-4 px-2 py-1 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-300"
          >
            DM
          </a>
        </div>
      </header>

      {/* Section Break */}
      <div id="design" className="col-span-full py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center font-urbanist">
          Design
        </h2>
        <p className="text-gray-600 text-center mt-2 font-urbanist">
          Fundamental principles that shape visual communication
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-gray-200/50">
        <DesignSection
          title="Dimensional Hierarchy"
          description="Dimensional Hierarchy creates visual importance through varying levels of depth and dimensionality. By using shadows, perspective, and strategic layering, elements can appear to float at different levels, creating a clear visual hierarchy."
          designPrinciple="Depth – Using three-dimensional space to establish visual importance and relationships."
          exampleLink="https://www.toptal.com/designers/visual/principles-of-design"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-amber-50 to-orange-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Background layer - subtle grid */}
                  <div className="absolute w-48 h-48 opacity-20">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={`grid-${i}`}
                        className="absolute w-48 h-px bg-amber-400 transform transition-all duration-500"
                        style={{
                          top: `${i * 8}px`,
                          transform: `rotate(${i * 11.25}deg)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Middle layer - floating elements */}
                  <div className="absolute w-48 h-48">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={`float-${i}`}
                        className="absolute w-6 h-6 bg-amber-500/60 rounded-lg shadow-lg transform transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-xl"
                        style={{
                          left: `${
                            Math.cos((i * Math.PI * 2) / 6) * 30 + 48
                          }px`,
                          top: `${Math.sin((i * Math.PI * 2) / 6) * 30 + 48}px`,
                          transform: `rotate(${i * 30}deg) translateZ(${
                            i * 4
                          }px)`,
                          zIndex: i,
                        }}
                      >
                        <div className="absolute inset-0.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg" />
                      </div>
                    ))}
                  </div>

                  {/* Foreground layer - prominent element */}
                  <div className="absolute w-12 h-12 bg-amber-700 rounded-lg shadow-2xl transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-3xl">
                    <div className="absolute inset-0.5 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg" />
                    {/* Inner shadow */}
                    <div className="absolute inset-0 rounded-lg shadow-inner" />
                  </div>

                  {/* Accent elements - depth indicators */}
                  <div className="absolute w-48 h-48">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`depth-${i}`}
                        className="absolute w-2 h-2 bg-amber-800/40 rounded-full transform transition-all duration-500"
                        style={{
                          left: `${
                            Math.cos((i * Math.PI * 2) / 4) * 40 + 48
                          }px`,
                          top: `${Math.sin((i * Math.PI * 2) / 4) * 40 + 48}px`,
                          transform: `translateZ(${i * -8}px)`,
                          opacity: 0.3 + i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-amber-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-dm-sans">
                    Depth creates visual importance
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="dm-sans"
          descriptionClassName="font-dm-sans"
          background="bg-gradient-to-br from-amber-50/50 to-orange-50/50"
        />
        <DesignSection
          title="Overlapping Relationships"
          description="Overlapping Relationships demonstrate how elements can create visual connections and depth through strategic layering. By carefully controlling transparency, shadows, and positioning, we can create a sense of depth and establish visual relationships between elements."
          designPrinciple="Depth & Connection – Using overlapping elements to create visual hierarchy and relationships."
          exampleLink="https://www.behance.net/gallery/101333357/Overlapping-Relationships"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-rose-50 to-pink-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Base layer - subtle grid */}
                  <div className="absolute w-48 h-48 opacity-20">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`grid-${i}`}
                        className="absolute w-24 h-px bg-stone-400 transform transition-all duration-500"
                        style={{
                          top: `${i * 6}px`,
                          transform: `rotate(30deg)`,
                        }}
                      />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`grid-${i + 8}`}
                        className="absolute w-24 h-px bg-stone-400 transform transition-all duration-500"
                        style={{
                          top: `${i * 6}px`,
                          transform: `rotate(-30deg)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* 3D cube */}
                  <div className="absolute w-16 h-16 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {/* Front face */}
                    <div className="absolute inset-0 bg-stone-600/80 transform transition-all duration-500 group-hover:bg-stone-700" />

                    {/* Top face */}
                    <div
                      className="absolute inset-0 bg-stone-500/60 transform transition-all duration-500 group-hover:bg-stone-600"
                      style={{
                        transform: "skewX(-30deg) translateY(-50%)",
                        transformOrigin: "bottom left",
                      }}
                    />

                    {/* Right face */}
                    <div
                      className="absolute inset-0 bg-stone-700/60 transform transition-all duration-500 group-hover:bg-stone-800"
                      style={{
                        transform: "skewY(30deg) translateX(50%)",
                        transformOrigin: "top left",
                      }}
                    />

                    {/* Edge highlights */}
                    <div className="absolute inset-0 border-2 border-stone-800/20" />
                    <div
                      className="absolute inset-0 border-2 border-stone-800/20"
                      style={{
                        transform: "skewX(-30deg) translateY(-50%)",
                        transformOrigin: "bottom left",
                      }}
                    />
                    <div
                      className="absolute inset-0 border-2 border-stone-800/20"
                      style={{
                        transform: "skewY(30deg) translateX(50%)",
                        transformOrigin: "top left",
                      }}
                    />
                  </div>

                  {/* Dimension lines */}
                  <div className="absolute w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Horizontal */}
                    <div className="absolute w-32 h-px bg-stone-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-2 h-2 border-2 border-stone-600 rounded-full top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-2 h-2 border-2 border-stone-600 rounded-full top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2" />

                    {/* Vertical */}
                    <div className="absolute w-px h-32 bg-stone-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-2 h-2 border-2 border-stone-600 rounded-full top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-2 h-2 border-2 border-stone-600 rounded-full bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2" />
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="text-xs sm:text-sm text-rose-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-josefin-sans">
                    Overlapping creates visual connections
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="josefin-sans"
          descriptionClassName="font-josefin-sans"
          background="bg-gradient-to-br from-rose-50/50 to-pink-50/50"
        />
        <DesignSection
          title="Rule of Thirds"
          description="The Rule of Thirds divides a composition into nine equal parts using two horizontal and two vertical lines. Key elements placed along these lines or at their intersections create more engaging and balanced designs."
          designPrinciple="Balance – Distributing elements evenly to create a feeling of stability (can be symmetrical or asymmetrical)."
          exampleLink="https://www.photographymad.com/pages/view/rule-of-thirds"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-emerald-50 to-teal-50 p-4 relative group">
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                  {/* Vertical lines */}
                  <div className="absolute left-1/3 top-0 bottom-0 w-px bg-emerald-600/30 group-hover:bg-emerald-600/60 transition-colors duration-300" />
                  <div className="absolute right-1/3 top-0 bottom-0 w-px bg-emerald-600/30 group-hover:bg-emerald-600/60 transition-colors duration-300" />
                  {/* Horizontal lines */}
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-emerald-600/30 group-hover:bg-emerald-600/60 transition-colors duration-300" />
                  <div className="absolute bottom-1/3 left-0 right-0 h-px bg-emerald-600/30 group-hover:bg-emerald-600/60 transition-colors duration-300" />
                  {/* Intersection points */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-emerald-600 rounded-full group-hover:scale-150 group-hover:bg-emerald-500 transition-all duration-300"
                      style={{
                        left: `${i % 2 === 0 ? "33.33%" : "66.66%"}`,
                        top: `${i < 2 ? "33.33%" : "66.66%"}`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                  {/* Example composition elements */}
                  <div className="absolute right-1/3 top-1/3 transform translate-x-4 -translate-y-4 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300">
                    <div className="w-24 h-24 bg-emerald-600/20 rounded-lg transform -rotate-12 group-hover:rotate-0 group-hover:bg-emerald-600/30 transition-all duration-300" />
                  </div>
                  <div className="absolute left-1/3 bottom-1/3 transform -translate-x-8 translate-y-8 group-hover:-translate-x-10 group-hover:translate-y-10 transition-transform duration-300">
                    <div className="w-16 h-16 bg-teal-600/20 rounded-full group-hover:bg-teal-600/30 transition-all duration-300" />
                  </div>
                </div>
                {/* Hover overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs sm:text-sm text-emerald-600 font-medium bg-white/80 px-2 py-1 rounded font-habibi">
                    Key elements at intersections
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="habibi"
          descriptionClassName="font-habibi"
          background="bg-gradient-to-br from-emerald-50/50 to-teal-50/50"
        />
        <DesignSection
          title="Spatial Layers"
          description="Spatial Layers create visual hierarchy through the careful arrangement of overlapping elements. This technique uses depth, shadow, and transparency to establish clear relationships between components while maintaining visual harmony."
          designPrinciple="Contrast – Using differences in color, size, or shape to create visual interest and hierarchy."
          exampleLink="https://www.canva.com/learn/visual-hierarchy/"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-sky-50 to-blue-50 p-4 flex items-center justify-center group">
                <div className="relative w-[280px] h-[120px] group">
                  {/* Background layer */}
                  <div className="absolute inset-0 bg-sky-100 rounded-lg transform group-hover:rotate-6 transition-transform duration-500" />

                  {/* Middle layers - geometric patterns */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-32 h-32 border-2 border-sky-200 rounded-lg transform transition-all duration-500"
                        style={{
                          transform: `rotate(${i * 30}deg) scale(${
                            0.8 + i * 0.1
                          })`,
                          zIndex: i,
                          opacity: 0.7 - i * 0.1,
                        }}
                      >
                        {/* Inner decorative elements */}
                        <div className="absolute inset-4 border border-sky-300/50 rounded" />
                        <div className="absolute inset-8 bg-sky-50/30 rounded" />
                      </div>
                    ))}
                  </div>

                  {/* Floating elements */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={`float-${i}`}
                      className="absolute w-6 h-6 bg-white shadow-lg rounded transform transition-all duration-500 group-hover:scale-110 group-hover:animate-float"
                      style={{
                        left: `${20 + i * 70}px`,
                        top: `${30 + (i % 2) * 60}px`,
                        zIndex: 10,
                        animationDuration: `${2 + i * 0.5}s`,
                      }}
                    >
                      <div className="absolute inset-1 bg-sky-100 rounded" />
                    </div>
                  ))}

                  {/* Foreground accent elements */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-sky-200 to-blue-100 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute -left-4 bottom-0 w-16 h-16 bg-gradient-to-tr from-sky-100 to-white rounded-lg opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="text-xs sm:text-sm text-sky-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-helvetica">
                    Layers create depth and hierarchy
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="helvetica"
          descriptionClassName="font-helvetica"
          titleClassName="tracking-[2px]"
          background="bg-gradient-to-br from-sky-50/50 to-blue-50/50"
        />
        <DesignSection
          title="Bezold Effect"
          description="The Bezold Effect occurs when the appearance of a color is altered by the colors adjacent to it. This optical illusion demonstrates how our perception of color can be dramatically influenced by its surrounding colors."
          designPrinciple="Contrast – Using differences in color, size, or shape to create visual interest and hierarchy."
          exampleLink="https://www.interaction-design.org/literature/topics/color-theory"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full gap-6 flex-wrap">
              <div className="w-[180px] h-[180px] grid grid-cols-8 gap-0.5 bg-orange-100 p-2 group transition-all duration-500 hover:bg-orange-200">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-red-600" : "bg-orange-50"
                    } aspect-square transition-all duration-500 group-hover:bg-red-500`}
                  />
                ))}
              </div>
              <div className="w-[180px] h-[180px] grid grid-cols-8 gap-0.5 bg-slate-700 p-2 group transition-all duration-500 hover:bg-slate-800">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-red-600" : "bg-slate-900"
                    } aspect-square transition-all duration-500 group-hover:bg-red-700`}
                  />
                ))}
              </div>
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="text-xs sm:text-sm text-white font-medium bg-black/60 px-3 py-2 rounded-lg backdrop-blur-sm font-avenir">
                  Same red squares appear different due to their backgrounds
                </div>
              </div>
            </div>
          }
          fontFamily="avenir"
          descriptionClassName="font-avenir"
          background="bg-gradient-to-br from-orange-50/50 to-red-50/50"
        />
        <DesignSection
          title="Observed Rhythm"
          description="Observed Rhythm creates visual flow through repeating elements. This dynamic pattern uses varying sizes and spacing to guide the viewer's eye naturally through the design."
          designPrinciple="Repetition – Reusing visual elements to create consistency."
          exampleLink="https://www.nngroup.com/articles/rhythm/"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-r from-purple-100 to-indigo-50 p-4 relative group">
                {/* Central circle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-indigo-600/80 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Concentric circles */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`circle-${i}`}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-400/30 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:border-indigo-400/60 group-hover:animate-pulse"
                    style={{
                      width: `${80 + i * 40}px`,
                      height: `${80 + i * 40}px`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}

                {/* Floating dots */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`dot-${i}`}
                    className="absolute w-3 h-3 bg-indigo-500 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-indigo-400"
                    style={{
                      left: `${50 + Math.cos((i * Math.PI * 2) / 12) * 40}%`,
                      top: `${50 + Math.sin((i * Math.PI * 2) / 12) * 40}%`,
                      transform: `translate(-50%, -50%)`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-300 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}

                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-indigo-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-roboto">
                    Circular patterns create visual rhythm
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="roboto"
          background="bg-[radial-gradient(circle_at_top_right,theme(colors.indigo.50/30),theme(colors.purple.50/30))]"
        />
        <DesignSection
          title="Ambiguous Scale"
          description="Ambiguous Scale challenges perception by presenting elements whose size relationships are intentionally unclear. This creates an engaging visual puzzle that draws viewers in to resolve the spatial ambiguity, demonstrating how scale can be used to create visual hierarchy and guide attention."
          designPrinciple="Scale & Perception – Using relative size to create visual hierarchy and relationships between elements."
          exampleLink="https://www.microsoft.com/en-us/microsoft-365-life-hacks/presentations/scale-in-graphic-design"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-zinc-50 to-neutral-50 p-4 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main geometric shapes with ambiguous depth */}
                  <div className="relative w-48 h-48 group">
                    {/* Background shapes */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2 border-2 border-zinc-300 rounded-lg transition-all duration-700 group-hover:scale-110 group-hover:rotate-45"
                        style={{
                          width: `${120 + i * 40}px`,
                          height: `${120 + i * 40}px`,
                          transform: `translate(-50%, -50%) rotate(${
                            i * 15
                          }deg)`,
                          opacity: 0.5 - i * 0.1,
                        }}
                      >
                        <div className="absolute inset-4 border border-zinc-300/50 rounded" />
                        <div className="absolute inset-8 bg-zinc-50/30 rounded" />
                      </div>
                    ))}

                    {/* Floating cubes */}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={`cube-${i}`}
                        className="absolute transform-gpu transition-all duration-1000 cursor-pointer group-hover:scale-150 group-hover:translate-z-20"
                        style={{
                          left: `${
                            Math.cos((i * Math.PI * 2) / 5) * 80 + 96
                          }px`,
                          top: `${Math.sin((i * Math.PI * 2) / 5) * 80 + 96}px`,
                          perspective: "1000px",
                        }}
                      >
                        <div
                          className="w-8 h-8 relative transform-gpu transition-transform duration-1000 group-hover:rotate-45 group-hover:skew-x-12 group-hover:skew-y-12"
                          style={{
                            transform: `rotateX(45deg) rotateZ(${
                              45 + i * 30
                            }deg)`,
                          }}
                        >
                          <div className="absolute inset-0 bg-zinc-200 transform-gpu -translate-z-4 rotate-x-60" />
                          <div className="absolute inset-0 bg-zinc-300 transform-gpu translate-y-4 -skew-x-45" />
                          <div className="absolute inset-0 bg-zinc-400 transform-gpu translate-x-4 skew-y-45" />
                        </div>
                      </div>
                    ))}

                    {/* Perspective lines */}
                    <div className="absolute inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`line-${i}`}
                          className="absolute left-0 right-0 h-px bg-zinc-400 transform transition-transform duration-500 group-hover:scale-150 group-hover:rotate-45"
                          style={{
                            top: `${(i + 1) * 12.5}%`,
                            transform: `rotate(${i * 22.5}deg)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="text-xs sm:text-sm text-zinc-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-anek-gurmukhi">
                    Size relationships create visual puzzles
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="anek-gurmukhi"
          descriptionClassName="font-anek-gurmukhi"
          background="bg-gradient-to-br from-zinc-50/50 to-neutral-50/50"
        />
        <DesignSection
          title="Law of Proximity"
          description="The Law of Proximity states that objects that are close to one another are perceived as being related or grouped together. This principle helps create visual organization and relationships between elements in a design."
          designPrinciple="Proximity – Grouping related items together to show their connection."
          exampleLink="https://lawsofux.com/law-of-proximity/"
          fontFamily="dm-sans"
          descriptionClassName="font-dm-sans"
          background="bg-gradient-to-br from-amber-50/50 to-orange-50/50"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-amber-50 to-orange-50 p-4 relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                  {/* Group 1 - Close proximity */}
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`group1-${i}`}
                        className="w-8 h-8 bg-amber-600 rounded-full transition-all duration-300 group-hover:scale-110"
                      />
                    ))}
                  </div>

                  {/* Group 2 - Close proximity */}
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`group2-${i}`}
                        className="w-8 h-8 bg-orange-600 rounded-full transition-all duration-300 group-hover:scale-110"
                      />
                    ))}
                  </div>

                  {/* Isolated elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-amber-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-orange-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-amber-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-orange-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="text-xs sm:text-sm text-amber-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-dm-sans">
                    Close elements are perceived as related
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Interwoven Space"
          description="Interwoven Space creates complex visual relationships by carefully layering and connecting elements. This technique uses overlapping forms, transparency, and strategic placement to create a sense of depth and interconnectedness."
          designPrinciple="Depth – Creating the illusion of three-dimensional space through layering and perspective."
          exampleLink="https://www.behance.net/gallery/101333357/Interwoven-Space"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-rose-50 to-pink-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Base grid */}
                  <div className="absolute w-36 h-36 opacity-20">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`grid-${i}`}
                        className="absolute w-36 h-px bg-rose-400 transform transition-all duration-500"
                        style={{
                          top: `${i * 12}px`,
                          transform: `rotate(${i * 45}deg)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Simple overlapping squares */}
                  <div className="absolute w-24 h-24 transform rotate-12 transition-all duration-500 group-hover:rotate-0">
                    <div className="absolute inset-0 border-2 border-rose-400/60 rounded-lg" />
                    <div className="absolute inset-2 border-2 border-rose-500/40 rounded-lg" />
                    <div className="absolute inset-4 border-2 border-rose-600/20 rounded-lg" />
                  </div>

                  {/* Vertical line */}
                  <div className="absolute w-px h-24 bg-rose-400/40 transform transition-all duration-500 group-hover:h-32 group-hover:bg-rose-500/60" />

                  {/* Horizontal line */}
                  <div className="absolute w-24 h-px bg-rose-400/40 transform transition-all duration-500 group-hover:w-32 group-hover:bg-rose-500/60" />

                  {/* Floating elements */}
                  <div
                    className="absolute w-4 h-4 bg-rose-500/60 rounded-full transform transition-all duration-500 group-hover:scale-150 group-hover:bg-rose-600/80"
                    style={{ top: "20%", left: "20%" }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-rose-500/60 rounded-full transform transition-all duration-500 group-hover:scale-150 group-hover:bg-rose-600/80"
                    style={{ bottom: "20%", right: "20%" }}
                  />
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-rose-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-eb-garamond">
                    Simple shapes create depth
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="eb-garamond"
          descriptionClassName="font-eb-garamond"
          background="bg-gradient-to-br from-rose-50/50 to-pink-50/50"
        />
        <DesignSection
          title="Artful Reduction"
          description="Artful Reduction demonstrates how removing elements can strengthen a design. By carefully eliminating unnecessary components, the remaining elements gain more impact and clarity, creating a more focused and powerful visual statement."
          designPrinciple="Minimalism – Using the fewest elements necessary to create maximum impact."
          exampleLink="https://www.nngroup.com/articles/characteristics-minimalism/"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-stone-50 to-slate-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Initial state - complex overlapping shapes */}
                  <div className="absolute w-48 h-48 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    {/* Background grid */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={`grid-${i}`}
                          className="bg-stone-300/30 rounded transform transition-all duration-500"
                        />
                      ))}
                    </div>

                    {/* Overlapping circles */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`circle-${i}`}
                        className="absolute w-24 h-24 border-2 border-stone-400/40 rounded-full transform transition-all duration-500"
                        style={{
                          left: `${25 + Math.cos((i * Math.PI * 2) / 8) * 20}%`,
                          top: `${25 + Math.sin((i * Math.PI * 2) / 8) * 20}%`,
                          transform: `translate(-50%, -50%) rotate(${
                            i * 45
                          }deg)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Final state - single focused element */}
                  <div className="absolute w-48 h-48 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* Central focus element */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-stone-800 rounded-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <div className="absolute inset-1 bg-gradient-to-br from-stone-700 to-stone-900 rounded-lg" />
                      {/* Subtle shadow */}
                      <div className="absolute inset-0 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-stone-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-helvetica">
                    Less elements create more impact
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="helvetica"
          descriptionClassName="font-helvetica"
          background="bg-gradient-to-br from-stone-50/50 to-slate-50/50"
        />
        <DesignSection
          title="Drawing With Code"
          description="Drawing With Code demonstrates how programming can be used to create artistic patterns and designs. By using algorithms, mathematical functions, and creative coding techniques, we can generate complex and beautiful visual compositions."
          designPrinciple="Algorithmic Art – Using code to create visual patterns and designs."
          exampleLink="https://www.openprocessing.org/browse/"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <style>
                {`
                  @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.2; }
                    50% { transform: scale(1.3); opacity: 1; }
                    100% { transform: scale(1); opacity: 0.2; }
                  }
                  @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  @keyframes float {
                    0% { transform: translate(0, 0); }
                    25% { transform: translate(15px, -15px); }
                    50% { transform: translate(0, -30px); }
                    75% { transform: translate(-15px, -15px); }
                    100% { transform: translate(0, 0); }
                  }
                `}
              </style>
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-violet-50 to-indigo-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Binary grid background */}
                  <div className="absolute w-48 h-48 grid grid-cols-6 grid-rows-6 gap-2 opacity-20">
                    {[...Array(36)].map((_, i) => (
                      <div
                        key={`binary-${i}`}
                        className="text-[10px] font-mono text-violet-400 transform transition-all duration-200 group-hover:animate-pulse"
                        style={{
                          animationDuration: "1s",
                          animationDelay: `${Math.random() * 0.5}s`,
                        }}
                      >
                        {Math.random() > 0.5 ? "1" : "0"}
                      </div>
                    ))}
                  </div>

                  {/* Rotating binary circle */}
                  <div className="absolute w-32 h-32 rounded-full border-2 border-violet-300/50 group-hover:border-violet-500/70 transition-all duration-300 group-hover:animate-rotate">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`circle-binary-${i}`}
                          className="absolute text-[12px] font-mono text-violet-500 transform transition-all duration-300"
                          style={{
                            left: `${
                              50 + Math.cos((i * Math.PI * 2) / 8) * 35
                            }%`,
                            top: `${
                              50 + Math.sin((i * Math.PI * 2) / 8) * 35
                            }%`,
                            transform: `translate(-50%, -50%)`,
                          }}
                        >
                          {Math.random() > 0.5 ? "1" : "0"}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating binary elements */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`float-${i}`}
                      className="absolute w-6 h-6 text-[12px] font-mono text-violet-400 transform transition-all duration-300 group-hover:animate-float"
                      style={{
                        left: `${Math.random() * 70 + 15}%`,
                        top: `${Math.random() * 70 + 15}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    >
                      {Math.random() > 0.5 ? "1" : "0"}
                    </div>
                  ))}

                  {/* Central focus element */}
                  <div className="absolute w-16 h-16 rounded-lg bg-violet-400/20 transform transition-all duration-300 group-hover:scale-125 group-hover:bg-violet-500/30 group-hover:rotate-45">
                    <div className="absolute inset-0 flex items-center justify-center text-[16px] font-mono text-violet-600">
                      {Math.random() > 0.5 ? "1" : "0"}
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-violet-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-source-code-pro">
                    Code creates mathematical beauty
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="source-code-pro"
          descriptionClassName="font-source-code-pro"
          background="bg-gradient-to-br from-violet-50/50 to-indigo-50/50"
        />
        <DesignSection
          title="Basic Color Theory"
          description="Basic Color Theory explores the fundamental relationships between colors. By understanding primary colors, color harmony, and the color wheel, we can create visually appealing and meaningful color combinations."
          designPrinciple="Color Relationships – Understanding how colors interact and complement each other."
          exampleLink="https://www.canva.com/learn/color-theory/"
          visualComponent={
            <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-sky-50 to-blue-50 p-4 relative group">
              <style>
                {`
                  @keyframes color-mix {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                  }
                  @keyframes color-rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}
              </style>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Color wheel base */}
                <div className="absolute w-36 h-36 rounded-full border-2 border-sky-200/50 translate-y-4 group-hover:animate-color-rotate group-hover:border-sky-300/70 transition-all duration-500">
                  {/* Primary colors */}
                  <div
                    className="absolute w-12 h-12 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:animate-color-mix transition-all duration-500"
                    style={{ left: "50%", top: "0%" }}
                  />
                  <div
                    className="absolute w-12 h-12 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:animate-color-mix transition-all duration-500"
                    style={{ left: "25%", top: "75%" }}
                  />
                  <div
                    className="absolute w-12 h-12 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:animate-color-mix transition-all duration-500"
                    style={{ left: "75%", top: "75%" }}
                  />

                  {/* Secondary colors */}
                  <div
                    className="absolute w-8 h-8 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:animate-color-mix transition-all duration-500"
                    style={{ left: "37.5%", top: "37.5%" }}
                  />
                  <div
                    className="absolute w-8 h-8 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:animate-color-mix transition-all duration-500"
                    style={{ left: "50%", top: "75%" }}
                  />
                  <div
                    className="absolute w-8 h-8 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:animate-color-mix transition-all duration-500"
                    style={{ left: "62.5%", top: "37.5%" }}
                  />

                  {/* Color mixing effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Mixing lines */}
                    <div className="absolute w-36 h-px bg-sky-200/30 transform rotate-30" />
                    <div className="absolute w-36 h-px bg-sky-200/30 transform -rotate-30" />
                    <div className="absolute w-36 h-px bg-sky-200/30 transform rotate-90" />
                  </div>
                </div>

                {/* Color harmony examples */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-4 h-4 bg-red-500 rounded-full" />
                  <div className="w-4 h-4 bg-orange-500 rounded-full" />
                  <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                  <div className="w-4 h-4 bg-purple-500 rounded-full" />
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="text-xs sm:text-sm text-sky-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-helvetica">
                    Colors create visual harmony
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="helvetica"
          descriptionClassName="font-helvetica"
          background="bg-gradient-to-br from-sky-50/50 to-blue-50/50"
        />
        <DesignSection
          title="Axonometric Projection"
          description="Axonometric Projection is a method of representing 3D objects in 2D space using parallel projection. Unlike perspective projection, it maintains consistent scale and angles, making it ideal for technical drawings and architectural visualization."
          designPrinciple="Parallel Projection – Representing 3D space in 2D while maintaining consistent measurements."
          exampleLink="https://en.wikipedia.org/wiki/Axonometric_projection"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-stone-50 to-slate-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Base grid */}
                  <div className="absolute w-24 h-24 opacity-20">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`grid-${i}`}
                        className="absolute w-24 h-px bg-stone-400 transform transition-all duration-500"
                        style={{
                          top: `${i * 6}px`,
                          transform: `rotate(30deg)`,
                        }}
                      />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`grid-${i + 8}`}
                        className="absolute w-24 h-px bg-stone-400 transform transition-all duration-500"
                        style={{
                          top: `${i * 6}px`,
                          transform: `rotate(-30deg)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* 3D cube */}
                  <div className="absolute w-16 h-16 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {/* Front face */}
                    <div className="absolute inset-0 bg-stone-600/80 transform transition-all duration-500 group-hover:bg-stone-700" />

                    {/* Top face */}
                    <div
                      className="absolute inset-0 bg-stone-500/60 transform transition-all duration-500 group-hover:bg-stone-600"
                      style={{
                        transform: "skewX(-30deg) translateY(-50%)",
                        transformOrigin: "bottom left",
                      }}
                    />

                    {/* Right face */}
                    <div
                      className="absolute inset-0 bg-stone-700/60 transform transition-all duration-500 group-hover:bg-stone-800"
                      style={{
                        transform: "skewY(30deg) translateX(50%)",
                        transformOrigin: "top left",
                      }}
                    />

                    {/* Edge highlights */}
                    <div className="absolute inset-0 border-2 border-stone-800/20" />
                    <div
                      className="absolute inset-0 border-2 border-stone-800/20"
                      style={{
                        transform: "skewX(-30deg) translateY(-50%)",
                        transformOrigin: "bottom left",
                      }}
                    />
                    <div
                      className="absolute inset-0 border-2 border-stone-800/20"
                      style={{
                        transform: "skewY(30deg) translateX(50%)",
                        transformOrigin: "top left",
                      }}
                    />
                  </div>

                  {/* Dimension lines */}
                  <div className="absolute w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Horizontal */}
                    <div className="absolute w-32 h-px bg-stone-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-2 h-2 border-2 border-stone-600 rounded-full top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-2 h-2 border-2 border-stone-600 rounded-full top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2" />

                    {/* Vertical */}
                    <div className="absolute w-px h-32 bg-stone-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-2 h-2 border-2 border-stone-600 rounded-full top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute w-2 h-2 border-2 border-stone-600 rounded-full bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2" />
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="text-xs sm:text-sm text-stone-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-oswald tracking-wider">
                    Parallel lines remain parallel
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="oswald"
          descriptionClassName="font-oswald"
          titleClassName="tracking-[2px]"
          background="bg-gradient-to-br from-stone-50/50 to-slate-50/50"
        />
        <DesignSection
          title="Subjective Emphasis"
          description="Subjective Emphasis demonstrates how visual elements can be highlighted through various design techniques. By using contrast, scale, color, and positioning, designers can guide the viewer's attention to specific elements, creating a visual hierarchy that communicates importance and meaning."
          designPrinciple="Visual Hierarchy – Using design elements to create emphasis and guide attention."
          exampleLink="https://www.canva.com/learn/visual-hierarchy/"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-slate-50 to-indigo-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Background elements */}
                  <div className="absolute w-48 h-48 opacity-20">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={`bg-${i}`}
                        className="absolute w-4 h-4 bg-slate-400/30 rounded transform transition-all duration-500"
                        style={{
                          left: `${(i % 4) * 16}px`,
                          top: `${Math.floor(i / 4) * 16}px`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Main emphasized element */}
                  <div className="absolute w-16 h-16 bg-slate-600 rounded-lg shadow-lg transform transition-all duration-700 group-hover:scale-125 group-hover:bg-indigo-600 group-hover:shadow-xl">
                    <div className="absolute inset-1 bg-gradient-to-br from-slate-500 to-slate-700 rounded-lg" />
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-slate-400/20 to-transparent" />
                  </div>

                  {/* Supporting elements */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`support-${i}`}
                      className="absolute w-8 h-8 bg-slate-400/60 rounded transform transition-all duration-500 group-hover:opacity-30"
                      style={{
                        left: `${Math.cos((i * Math.PI * 2) / 6) * 40 + 48}px`,
                        top: `${Math.sin((i * Math.PI * 2) / 6) * 40 + 48}px`,
                        transform: `rotate(${i * 30}deg)`,
                      }}
                    />
                  ))}

                  {/* Accent elements */}
                  <div className="absolute w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Radial lines */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`line-${i}`}
                        className="absolute w-24 h-px bg-slate-600/20 transform transition-all duration-500"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `rotate(${
                            i * 45
                          }deg) translate(-50%, -50%)`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-slate-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-roboto-slab">
                    Design elements create visual emphasis
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="roboto-slab"
          descriptionClassName=""
          titleClassName="text-2xl font-bold text-gray-900"
          background="bg-gradient-to-br from-red-50/50 to-orange-50/50"
        />
        <DesignSection
          title="Golden Ratio"
          description="The Golden Ratio, approximately 1:1.618, is a mathematical proportion found in nature that creates aesthetically pleasing compositions. When used in design, it helps create balanced and harmonious layouts that feel naturally beautiful."
          designPrinciple="Proportion – Using mathematical relationships to create visually pleasing compositions."
          exampleLink="https://www.canva.com/learn/what-is-the-golden-ratio/"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <style>
                {`
                  @keyframes pulseGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.4); }
                    50% { box-shadow: 0 0 20px 10px rgba(245,158,11,0.4); }
                  }
                `}
              </style>
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-amber-50 to-yellow-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Golden Rectangle and Spiral */}
                  <div className="relative w-40 h-24 border-2 border-amber-600/40 group-hover:border-amber-600/60 transition-all duration-300 group-hover:animate-[pulseGlow_2s_ease-in-out_infinite]">
                    {/* Nested Golden Rectangles */}
                    <div className="absolute right-0 top-0 w-[61.8%] h-full border-l-2 border-amber-600/40 group-hover:border-amber-600/60 transition-all duration-300">
                      <div className="absolute bottom-0 right-0 h-[61.8%] w-full border-t-2 border-amber-600/40 group-hover:border-amber-600/60 transition-all duration-300">
                        <div className="absolute top-0 left-0 w-[61.8%] h-full border-r-2 border-amber-600/40 group-hover:border-amber-600/60 transition-all duration-300" />
                      </div>
                    </div>
                    {/* Spiral curve */}
                    <div className="absolute right-0 top-0 w-[61.8%] h-full">
                      <div className="absolute inset-0 border-t-2 border-l-2 rounded-tl-full border-amber-600/60 group-hover:border-amber-600 transition-all duration-300" />
                    </div>
                  </div>
                  {/* Ratio numbers */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium text-amber-700">
                      1
                    </span>
                    <span className="text-xs text-amber-600">:</span>
                    <span className="text-xs font-medium text-amber-700">
                      1.618
                    </span>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="text-xs sm:text-sm text-amber-700 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-habibi">
                    Nature's perfect proportion
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="habibi"
          descriptionClassName="font-habibi"
          background="bg-gradient-to-br from-amber-50/50 to-yellow-50/50"
        />
        <DesignSection
          title="Accessibility"
          description="Accessibility in design ensures that digital experiences are usable by everyone, regardless of their abilities. This includes considerations for color contrast, keyboard navigation, screen reader compatibility, and clear visual hierarchy."
          designPrinciple="Inclusive Design – Creating experiences that work for all users regardless of their abilities or circumstances."
          exampleLink="https://www.w3.org/WAI/fundamentals/accessibility-principles/"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-blue-50 to-purple-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container with focus ring */}
                  <div className="relative w-48 h-48 rounded-lg border-2 border-blue-400/50 group-hover:ring-4 group-hover:ring-purple-300/50 transition-all duration-300">
                    {/* Color contrast example */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-xs font-bold">
                        AAA
                      </div>
                      <div className="w-8 h-8 bg-blue-200 rounded flex items-center justify-center text-blue-900 text-xs font-bold">
                        AA
                      </div>
                    </div>

                    {/* Keyboard focus indicators */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-2 border-purple-400 rounded group-hover:ring-2 group-hover:ring-purple-300 transition-all duration-300 flex items-center justify-center">
                      <span className="text-purple-600 text-sm">⌨️</span>
                    </div>

                    {/* Screen reader wave animation */}
                    <div className="absolute bottom-4 left-4 w-32 h-12">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bottom-0 left-0 w-full h-1 bg-blue-400/30 rounded group-hover:animate-pulse"
                          style={{
                            transform: `translateY(-${i * 8}px)`,
                            opacity: 1 - i * 0.2,
                          }}
                        />
                      ))}
                      <div className="absolute bottom-0 left-0 text-sm text-blue-600">
                        🔊
                      </div>
                    </div>

                    {/* ARIA label example */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <div className="text-xs text-purple-600 font-medium">
                        aria-label
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-purple-400/50 flex items-center justify-center">
                        <span className="text-xs">🏷️</span>
                      </div>
                    </div>

                    {/* Central focus point */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <span className="text-2xl">👥</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-blue-700 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-helvetica">
                    Design for everyone
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="roboto-flex"
          descriptionClassName="font-roboto-flex"
          background="bg-gradient-to-br from-blue-50/50 to-purple-50/50"
        />
        <DesignSection
          title="Function Over Form"
          description="Prioritize usability and practical functionality over aesthetic considerations. While visual appeal is important, it should never compromise the core functionality of the design."
          designPrinciple="Usability First"
          exampleLink="https://hyperweb.ca/which-is-more-important-in-web-design-form-or-function/"
          fontFamily="overlock-sc"
          descriptionClassName="font-overlock-sc"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-stone-400 to-slate-500 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Initial state - decorative but complex */}
                  <div className="absolute w-48 h-48 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    {/* Ornamental background */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={`decor-${i}`}
                          className="bg-stone-600/30 rounded transform transition-all duration-500"
                          style={{
                            transform: `rotate(${i * 22.5}deg)`,
                          }}
                        />
                      ))}
                    </div>
                    {/* Decorative elements */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`ornament-${i}`}
                        className="absolute w-4 h-4 border-2 border-stone-500/40 rounded-full transform transition-all duration-500"
                        style={{
                          left: `${25 + Math.cos((i * Math.PI * 2) / 8) * 20}%`,
                          top: `${25 + Math.sin((i * Math.PI * 2) / 8) * 20}%`,
                          transform: `translate(-50%, -50%) rotate(${
                            i * 45
                          }deg)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Final state - simple and functional */}
                  <div className="absolute w-48 h-48 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* Functional interface elements */}
                    <div className="absolute inset-0 flex flex-col gap-2 p-4">
                      {/* Header */}
                      <div className="h-6 bg-stone-600/50 rounded" />
                      {/* Content area */}
                      <div className="flex-1 flex flex-col gap-2">
                        <div className="h-4 bg-stone-600/30 rounded" />
                        <div className="h-4 bg-stone-600/30 rounded" />
                        <div className="h-4 bg-stone-600/30 rounded" />
                      </div>
                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <div className="h-6 flex-1 bg-stone-600/50 rounded" />
                        <div className="h-6 flex-1 bg-stone-600/50 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-stone-300 font-medium bg-stone-800/80 px-3 py-2 rounded-lg backdrop-blur-sm font-overlock-sc">
                    Simple and functional beats decorative
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Designing Networks"
          description="Designing Networks explores how to create visual representations of connected systems and relationships. By using nodes, connections, and strategic layout, we can create clear and intuitive visualizations of complex networks and their interactions."
          designPrinciple="Connection & Flow – Using visual elements to represent relationships and interactions in a network."
          exampleLink="https://www.lucidchart.com/pages/network-diagram"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-rose-50 to-pink-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Network nodes */}
                  <div className="relative w-48 h-48">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={`node-${i}`}
                        className="absolute w-8 h-8 bg-rose-500/20 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:bg-rose-600/20"
                        style={{
                          left: `${
                            Math.cos((i * Math.PI * 2) / 6) * 60 + 84
                          }px`,
                          top: `${Math.sin((i * Math.PI * 2) / 6) * 60 + 84}px`,
                        }}
                      >
                        <div className="absolute inset-1 bg-gradient-to-br from-rose-400/20 to-rose-600/20 rounded-full" />
                      </div>
                    ))}

                    {/* Central node */}
                    <div className="absolute left-1/2 top-1/2 w-12 h-12 bg-pink-600/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-125 group-hover:bg-pink-700/20">
                      <div className="absolute inset-1 bg-gradient-to-br from-pink-500/20 to-pink-700/20 rounded-full" />
                    </div>

                    {/* Spinning animation */}
                    <div className="absolute w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={`line-${i}`}
                          className="absolute w-32 h-px border-t-2 border-dashed border-rose-500/40 transform transition-all duration-500 group-hover:animate-spin"
                          style={{
                            left: "50%",
                            top: "50%",
                            transform: `translate(-50%, -50%) rotate(${
                              i * 30
                            }deg) translate(16px)`,
                            animationDuration: `${3 + i}s`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-rose-600 font-medium bg-white/80 px-2 py-1 rounded">
                    Lines create network connections
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="share-tech"
          descriptionClassName="font-share-tech"
          titleClassName="font-share-tech"
          background="bg-gradient-to-br from-rose-50/50 to-pink-50/50"
        />
        <DesignSection
          title="Spatial Reasoning"
          description="Understanding and manipulating objects in 3D space, visualizing transformations, and comprehending spatial relationships."
          designPrinciple="Spatial Awareness"
          exampleLink="https://www.123test.com/spatial-reasoning-test/"
          fontFamily="suwannaphum"
          descriptionClassName="font-suwannaphum"
          titleClassName="font-suwannaphum"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-indigo-50 to-purple-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Origami shape */}
                  <div className="relative w-32 h-32 transform transition-all duration-1000">
                    {/* Base square - folded state */}
                    <div className="absolute inset-0 bg-indigo-400/80 transform transition-all duration-1000 group-hover:opacity-0">
                      {/* Folded flaps */}
                      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-indigo-300/60 transform -rotate-45 origin-bottom-right" />
                      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/60 transform rotate-45 origin-bottom-left" />
                      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-300/60 transform rotate-45 origin-top-right" />
                      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-500/60 transform -rotate-45 origin-top-left" />

                      {/* Center fold */}
                      <div className="absolute inset-0 border-2 border-indigo-600/20" />
                    </div>

                    {/* Unfolded state */}
                    <div className="absolute inset-0 opacity-0 transform transition-all duration-1000 group-hover:opacity-100">
                      {/* Main square */}
                      <div className="absolute inset-0 bg-indigo-400/80" />

                      {/* Fold lines */}
                      <div className="absolute inset-0">
                        {/* Vertical center */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-indigo-600/20 transform -translate-x-1/2" />
                        {/* Horizontal center */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-indigo-600/20 transform -translate-y-1/2" />
                        {/* Diagonals */}
                        <div className="absolute inset-0">
                          <div className="absolute inset-0 border border-indigo-600/20 transform rotate-45" />
                          <div className="absolute inset-0 border border-indigo-600/20 transform -rotate-45" />
                        </div>
                      </div>

                      {/* Corner indicators */}
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-indigo-400/40 rounded-full"
                          style={{
                            left: `${i % 2 === 0 ? "25%" : "75%"}`,
                            top: `${i < 2 ? "25%" : "75%"}`,
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-indigo-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-suwannaphum">
                    Unfolded pattern
                  </div>
                </div>
              </div>
            </div>
          }
          background="bg-gradient-to-br from-indigo-50/50 to-purple-50/50"
        />
        <DesignSection
          title="Typography Hierarchy"
          description="Creating clear visual hierarchy through type size, weight, and spacing to guide readers through content."
          designPrinciple="Visual Hierarchy"
          exampleLink="https://www.nngroup.com/articles/typography-terms-ux/"
          fontFamily="poppins"
          descriptionClassName="font-poppins"
          titleClassName="font-poppins"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <style>
                {`
                  @keyframes scrollText {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-100%); }
                  }
                `}
              </style>
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-slate-50 to-gray-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  {/* Scrolling text container */}
                  <div className="relative w-full h-[120px] overflow-hidden">
                    {/* First set of text */}
                    <div className="absolute left-0 right-0 flex flex-col items-center gap-2 group-hover:animate-[scrollText_4s_linear_infinite]">
                      <div className="text-2xl font-bold text-slate-800 font-poppins">
                        Heading 1
                      </div>
                      <div className="text-xl font-semibold text-slate-700 font-poppins">
                        Heading 2
                      </div>
                      <div className="text-lg font-medium text-slate-600 font-poppins">
                        Heading 3
                      </div>
                      <div className="text-base font-normal text-slate-500 font-poppins">
                        Body text with regular weight
                      </div>
                      <div className="text-sm font-light text-slate-400 font-poppins">
                        Caption text
                      </div>
                    </div>
                    {/* Duplicate set for seamless looping */}
                    <div className="absolute left-0 right-0 flex flex-col items-center gap-2 group-hover:animate-[scrollText_4s_linear_infinite]">
                      <div className="text-2xl font-bold text-slate-800 font-poppins">
                        Heading 1
                      </div>
                      <div className="text-xl font-semibold text-slate-700 font-poppins">
                        Heading 2
                      </div>
                      <div className="text-lg font-medium text-slate-600 font-poppins">
                        Heading 3
                      </div>
                      <div className="text-base font-normal text-slate-500 font-poppins">
                        Body text with regular weight
                      </div>
                      <div className="text-sm font-light text-slate-400 font-poppins">
                        Caption text
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-slate-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-poppins">
                    Visual hierarchy through type
                  </div>
                </div>
              </div>
            </div>
          }
          background="bg-gradient-to-br from-slate-50/50 to-gray-50/50"
        />
        <DesignSection
          title="Microinteractions"
          description="Microinteractions are small, purposeful animations that provide feedback, guide users, and make interfaces feel more responsive and engaging. They enhance usability by making digital interactions feel more natural and satisfying."
          designPrinciple="Feedback & Engagement – Using subtle animations to create responsive and intuitive interfaces."
          exampleLink="https://www.nngroup.com/articles/microinteractions/"
          fontFamily="encode-sans-sc"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-emerald-50 to-teal-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Interactive elements container */}
                  <div className="relative w-48 h-24">
                    {/* Simple tooltip */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-emerald-400/20 group-hover:bg-emerald-400/40 transition-colors duration-300 cursor-pointer flex items-center justify-center">
                      <Info className="w-6 h-6 text-emerald-600" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-emerald-800 text-xs px-2 py-1 rounded-lg shadow-lg">
                        Information tooltip
                      </div>
                    </div>

                    {/* Rich tooltip */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-emerald-400/20 group-hover:bg-emerald-400/40 transition-colors duration-300 cursor-pointer flex items-center justify-center">
                      <Settings className="w-6 h-6 text-emerald-600" />
                      <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-emerald-800 text-xs p-2 rounded-lg shadow-lg w-32">
                        <div className="font-bold mb-1">Settings</div>
                        <div className="text-emerald-600/80">
                          Customize your preferences
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 transform rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          background="bg-gradient-to-br from-emerald-50/50 to-teal-50/50"
        />
        <DesignSection
          title="Laws of Perceptual Organization"
          description="The Gestalt principles explain how humans naturally organize visual elements into groups and unified wholes. These laws help designers create more intuitive and meaningful visual compositions."
          designPrinciple="Visual Organization – Understanding how the human brain naturally groups and organizes visual elements."
          exampleLink="https://study.com/academy/lesson/perceptual-organization-definition-examples.html"
          fontFamily="lexend"
          descriptionClassName="font-lexend"
          titleClassName="font-lexend"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <style>
                {`
                  @keyframes slowPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                  }
                  @keyframes slowBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                  }
                  @keyframes slowSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  @keyframes slowPing {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                  }
                `}
              </style>
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-rose-50 to-pink-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="relative w-72 h-48">
                    {/* Proximity - Two groups of circles */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 flex gap-8">
                      <div className="flex flex-col gap-3">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={`prox-${i}`}
                            className="w-6 h-6 bg-rose-600 rounded-full group-hover:animate-[slowPulse_3s_ease-in-out_infinite]"
                          />
                        ))}
                      </div>
                      <div className="flex flex-col gap-3">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={`prox2-${i}`}
                            className="w-6 h-6 bg-pink-600 rounded-full group-hover:animate-[slowPulse_3s_ease-in-out_infinite]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Similarity - Alternating shapes */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={`sim-${i}`}
                          className={`w-4 h-4 ${
                            i % 2 === 0
                              ? "bg-rose-600 rounded-full"
                              : "bg-pink-600 rounded-sm"
                          } group-hover:animate-[slowBounce_2s_ease-in-out_infinite]`}
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>

                    {/* Closure - Incomplete shapes */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2">
                      <div className="relative w-16 h-16 group-hover:animate-[slowSpin_8s_linear_infinite]">
                        {/* Incomplete square */}
                        <div className="absolute inset-0 border-2 border-rose-600 rounded-lg border-r-transparent border-b-transparent transform rotate-45" />
                        {/* Missing corner */}
                        <div className="absolute top-0 right-0 w-3 h-3 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Continuity - Curved lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-20 h-px bg-gradient-to-r from-rose-600 to-pink-600 transform rotate-12 group-hover:animate-[slowPulse_4s_ease-in-out_infinite]" />
                      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-20 h-px bg-gradient-to-r from-pink-600 to-rose-600 transform -rotate-12 group-hover:animate-[slowPulse_4s_ease-in-out_infinite]" />
                    </div>

                    {/* Figure/Ground - Overlapping elements */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="relative w-12 h-12">
                        <div className="absolute inset-0 bg-rose-600 rounded-full transform group-hover:animate-[slowPing_3s_ease-in-out_infinite]" />
                        <div
                          className="absolute inset-0 bg-pink-600 rounded-full transform -translate-x-1 -translate-y-1 group-hover:animate-[slowPing_3s_ease-in-out_infinite]"
                          style={{ animationDelay: "1.5s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-rose-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-lexend">
                    Gestalt Principles in Action
                  </div>
                </div>
              </div>
            </div>
          }
          background="bg-gradient-to-br from-rose-50/50 to-pink-50/50"
        />
        <DesignSection
          title="Continuity"
          description="The Law of Continuity states that the human eye naturally follows continuous lines and patterns. Elements arranged in a continuous line or curve are perceived as more related than elements not on the line or curve."
          designPrinciple="Visual Flow – Using continuous lines and patterns to guide the viewer's eye through a design."
          exampleLink="https://www.merriam-webster.com/dictionary/law%20of%20continuity"
          fontFamily="dm-serif-display"
          descriptionClassName="font-dm-serif-display"
          titleClassName="font-dm-serif-display"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <style>
                {`
                  @keyframes flowWave {
                    0% { transform: translateX(-100%) translateY(0); }
                    25% { transform: translateX(-50%) translateY(-20px); }
                    50% { transform: translateX(0) translateY(0); }
                    75% { transform: translateX(50%) translateY(20px); }
                    100% { transform: translateX(100%) translateY(0); }
                  }
                  @keyframes glow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                  }
                `}
              </style>
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-sky-50 to-blue-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="relative w-full h-32">
                    {/* Curved background lines */}
                    <div className="absolute inset-0">
                      {/* Primary curve */}
                      <div className="absolute w-full h-32">
                        <div className="absolute w-full h-px bg-sky-600/20 transform -rotate-6 origin-center group-hover:bg-sky-600/40 transition-colors duration-300" />
                        <div className="absolute w-full h-px bg-sky-600/20 transform rotate-6 origin-center group-hover:bg-sky-600/40 transition-colors duration-300" />
                      </div>
                      {/* Secondary curves */}
                      <div className="absolute w-full h-32 top-8">
                        <div className="absolute w-full h-px bg-sky-600/10 transform -rotate-12 origin-center group-hover:bg-sky-600/20 transition-colors duration-300" />
                        <div className="absolute w-full h-px bg-sky-600/10 transform rotate-12 origin-center group-hover:bg-sky-600/20 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Single file flowing elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={`ball-${i}`}
                          className="absolute w-4 h-4 bg-sky-600 rounded-full group-hover:animate-[flowWave_3s_linear_infinite]"
                          style={{
                            top: "50%",
                            left: "0%",
                            transform: "translate(-50%, -50%)",
                            animationDelay: `${i * 0.6}s`,
                          }}
                        >
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-sky-600" />
                        </div>
                      ))}
                    </div>

                    {/* Connection points */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={`point-${i}`}
                          className="absolute w-3 h-3 bg-sky-600 rounded-full group-hover:animate-[glow_1.5s_ease-in-out_infinite]"
                          style={{
                            left: `${20 + i * 20}%`,
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            animationDelay: `${i * 0.2}s`,
                          }}
                        >
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-sky-600" />
                        </div>
                      ))}
                    </div>

                    {/* Flow direction indicators */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-sky-600 transform rotate-45 group-hover:animate-[bounce_1s_ease-in-out_infinite]" />
                      <div className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-sky-600 transform rotate-225 group-hover:animate-[bounce_1s_ease-in-out_infinite]" />
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-sky-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-dm-serif-display">
                    Curves create natural flow
                  </div>
                </div>
              </div>
            </div>
          }
          background="bg-gradient-to-br from-sky-50/50 to-blue-50/50"
        />
        <DesignSection
          title="Emergence"
          description="Emergence describes how we perceive complex patterns as a whole before recognizing their individual parts. The whole is perceived before the individual elements that make it up, creating a unified and meaningful perception."
          designPrinciple="Holistic Perception – Understanding how the mind perceives complete patterns before analyzing their components."
          exampleLink="https://medium.com/@uxdesigncc/emergence-in-design-why-the-whole-is-greater-than-the-sum-of-its-parts-5a1b0c0c0c0c"
          fontFamily="domine"
          descriptionClassName="font-['Domine'] text-slate-800"
          titleClassName="text-slate-800"
          visualComponent={
            <div className="relative w-48 h-48 group">
              <style>
                {`
                  @keyframes assemble {
                    0% { transform: scale(0.5) rotate(0deg); opacity: 0; }
                    50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
                    100% { transform: scale(1) rotate(360deg); opacity: 1; }
                  }
                  @keyframes pulseGlow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                  }
                  @keyframes reveal {
                    0% { clip-path: circle(0% at 50% 50%); }
                    100% { clip-path: circle(100% at 50% 50%); }
                  }
                `}
              </style>
              {/* Background elements */}
              <div className="absolute w-48 h-48 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={`bg-${i}`}
                    className="absolute w-4 h-4 bg-gray-400/30 rounded transform transition-all duration-700"
                    style={{
                      left: `${(i % 4) * 16}px`,
                      top: `${Math.floor(i / 4) * 16}px`,
                    }}
                  />
                ))}
              </div>

              {/* Scattered parts */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`part-${i}`}
                    className="absolute w-8 h-8 bg-gray-400/60 rounded-lg transform transition-all duration-700 group-hover:animate-[assemble_1.5s_ease-in-out_forwards]"
                    style={{
                      left: `${Math.cos((i * Math.PI * 2) / 8) * 40 + 48}px`,
                      top: `${Math.sin((i * Math.PI * 2) / 8) * 40 + 48}px`,
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>

              {/* Central whole */}
              <div className="absolute w-32 h-32 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gray-600 rounded-lg transform transition-all duration-700 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gray-600 rounded-lg" />
                </div>
                {/* Reveal animation */}
                <div className="absolute inset-0 bg-gray-600 rounded-lg animate-[reveal_1.5s_ease-in-out_forwards]" />
              </div>

              {/* Connection lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`line-${i}`}
                    className="absolute w-24 h-px bg-gray-600/20 transform transition-all duration-700"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${i * 45}deg) translate(-50%, -50%)`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>

              {/* Hover caption */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <div className="text-xs sm:text-sm text-gray-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-domine whitespace-nowrap">
                  Parts assemble into a meaningful whole
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Hick's Law"
          description="Hick's Law states that the time it takes to make a decision increases with the number and complexity of choices. This principle helps designers create interfaces that minimize cognitive load and improve decision-making efficiency."
          designPrinciple="Decision Time – The relationship between the number of choices and the time it takes to make a decision."
          exampleLink="https://www.ted.com/talks/barry_schwartz_the_paradox_of_choice"
          fontFamily="dm-sans"
          descriptionClassName="font-dm-sans"
          titleClassName="font-dm-sans"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <style>
                {`
                  @keyframes highlight {
                    0% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.1); opacity: 0.6; }
                    100% { transform: scale(1); opacity: 0.3; }
                  }
                  @keyframes pulseDecision {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                  }
                `}
              </style>
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-amber-50 to-orange-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="relative w-64 h-40">
                    {/* Initial state - many options */}
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                      <div className="grid grid-cols-4 gap-2">
                        {[...Array(16)].map((_, i) => (
                          <div
                            key={`option-${i}`}
                            className="w-6 h-6 bg-amber-400/30 rounded-lg group-hover:animate-[highlight_1s_ease-in-out_infinite]"
                            style={{
                              animationDelay: `${i * 0.1}s`,
                              transition: "all 0.5s ease-in-out",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Hover state - focused decision */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                      {/* Decision point */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-amber-500 rounded-full animate-[pulseDecision_2s_ease-in-out_infinite]">
                        <div className="absolute inset-0 bg-amber-500 rounded-full" />
                      </div>

                      {/* Decision time indicator */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-amber-400/30 rounded-full group-hover:animate-[spin_4s_linear_infinite]" />
                    </div>

                    {/* Overlay text */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out pointer-events-none z-10">
                      <div className="text-xs sm:text-sm text-amber-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-dm-sans">
                        More choices = Longer decisions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          background="bg-gradient-to-br from-amber-50/50 to-orange-50/50"
        />
        <DesignSection
          title="VIMM Model"
          description="The VIMM model breaks down user interaction into four key components: Visual (what users see), Interactive (how users engage), Mental (cognitive processing), and Motor (physical actions). This framework helps designers create more intuitive and efficient user experiences."
          designPrinciple="Interaction Framework – Understanding the four key components of user interaction."
          exampleLink="https://www.interaction-design.org/literature/topics/vimm-model"
          fontFamily="dm-sans"
          descriptionClassName="font-dm-sans"
          titleClassName="font-dm-sans"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <style>
                {`
                  @keyframes vimmPulse {
                    0%, 100% { transform: scale(1); opacity: 0.7; }
                    50% { transform: scale(1.1); opacity: 1; }
                  }
                  @keyframes vimmRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}
              </style>
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-violet-50 to-purple-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="relative w-72 h-48">
                    {/* Central circle */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-violet-400/20 rounded-full group-hover:animate-[vimmRotate_4s_linear_infinite]" />

                    {/* VIMM components */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      {/* Visual */}
                      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-16 h-16 bg-violet-500/30 rounded-lg group-hover:animate-[vimmPulse_2s_ease-in-out_infinite]">
                        <div className="absolute inset-0 flex items-center justify-center text-violet-600">
                          <Eye className="w-8 h-8" />
                        </div>
                      </div>

                      {/* Interactive */}
                      <div
                        className="absolute top-1/2 -right-20 -translate-y-1/2 w-16 h-16 bg-violet-500/30 rounded-lg group-hover:animate-[vimmPulse_2s_ease-in-out_infinite]"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-violet-600">
                          <RefreshCw className="w-8 h-8" />
                        </div>
                      </div>

                      {/* Mental */}
                      <div
                        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-16 h-16 bg-violet-500/30 rounded-lg group-hover:animate-[vimmPulse_2s_ease-in-out_infinite]"
                        style={{ animationDelay: "1s" }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-violet-600">
                          <Brain className="w-8 h-8" />
                        </div>
                      </div>

                      {/* Motor */}
                      <div
                        className="absolute top-1/2 -left-20 -translate-y-1/2 w-16 h-16 bg-violet-500/30 rounded-lg group-hover:animate-[vimmPulse_2s_ease-in-out_infinite]"
                        style={{ animationDelay: "1.5s" }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-violet-600">
                          <Hand className="w-8 h-8" />
                        </div>
                      </div>
                    </div>

                    {/* Connection lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-violet-400/20 rounded-full" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-2 border-violet-400/10 rounded-full" />
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-violet-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-dm-sans whitespace-nowrap">
                    Visual Interactive Mental Motor
                  </div>
                </div>
              </div>
            </div>
          }
          background="bg-gradient-to-br from-violet-50/50 to-purple-50/50"
        />
        <DesignSection
          title="Progressive Disclosure"
          description="Progressive Disclosure is a design pattern that reveals information gradually, showing only what's necessary at each step. This approach reduces cognitive load, prevents overwhelming users, and helps maintain focus on the current task."
          designPrinciple="Information Hierarchy – Revealing information progressively to maintain focus and reduce cognitive load."
          exampleLink="https://www.nngroup.com/articles/progressive-disclosure/"
          fontFamily="dm-sans"
          descriptionClassName="font-dm-sans"
          titleClassName="font-dm-sans"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-emerald-50 to-teal-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Initial state - minimal information */}
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-lg" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full group-hover:animate-[pulse_2s_ease-in-out_infinite]" />
                    </div>
                  </div>

                  {/* First level of disclosure */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-48 h-32">
                      <div className="absolute inset-0 bg-emerald-400/30 rounded-lg" />
                      <div className="absolute inset-0 flex items-center justify-center gap-2">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full group-hover:animate-[bounce_1s_ease-in-out_infinite]" />
                        <div
                          className="w-6 h-6 bg-emerald-500 rounded-full group-hover:animate-[bounce_1s_ease-in-out_infinite]"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <div
                          className="w-6 h-6 bg-emerald-500 rounded-full group-hover:animate-[bounce_1s_ease-in-out_infinite]"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second level of disclosure */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transitionDelay: "0.1s" }}
                  >
                    <div className="relative w-64 h-40">
                      <div className="absolute inset-0 bg-emerald-400/40 rounded-lg" />
                      <div className="absolute inset-0 flex flex-col gap-2 p-4">
                        <div className="h-4 bg-emerald-500/50 rounded-full group-hover:animate-[pulse_2s_ease-in-out_infinite]" />
                        <div
                          className="h-4 bg-emerald-500/50 rounded-full group-hover:animate-[pulse_2s_ease-in-out_infinite]"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <div
                          className="h-4 bg-emerald-500/50 rounded-full group-hover:animate-[pulse_2s_ease-in-out_infinite]"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Final level of disclosure */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <div className="relative w-72 h-48">
                      <div className="absolute inset-0 bg-emerald-400/50 rounded-lg" />
                      <div className="absolute inset-0 flex flex-col gap-4 p-4">
                        <div className="h-6 bg-emerald-500/60 rounded-lg group-hover:animate-[pulse_2s_ease-in-out_infinite]" />
                        <div className="flex-1 grid grid-cols-2 gap-2">
                          <div className="h-4 bg-emerald-500/40 rounded-full group-hover:animate-[pulse_2s_ease-in-out_infinite]" />
                          <div
                            className="h-4 bg-emerald-500/40 rounded-full group-hover:animate-[pulse_2s_ease-in-out_infinite]"
                            style={{ animationDelay: "0.2s" }}
                          />
                          <div
                            className="h-4 bg-emerald-500/40 rounded-full group-hover:animate-[pulse_2s_ease-in-out_infinite]"
                            style={{ animationDelay: "0.4s" }}
                          />
                          <div
                            className="h-4 bg-emerald-500/40 rounded-full group-hover:animate-[pulse_2s_ease-in-out_infinite]"
                            style={{ animationDelay: "0.6s" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs sm:text-sm text-emerald-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm font-dm-sans">
                    Information reveals progressively
                  </div>
                </div>
              </div>
            </div>
          }
          background="bg-gradient-to-br from-emerald-50/50 to-teal-50/50"
        />

        {/* Designers Section */}
        <div id="designers" className="col-span-full py-12 group">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-3xl font-bold text-gray-900 text-center font-urbanist">
              Designers
            </h2>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-1 text-gray-600 hover:text-gray-900 transition-colors duration-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Scroll to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 text-center mt-2 font-urbanist">
            Influential figures who have shaped the field of design
          </p>
        </div>

        <DesignSection
          title="Massimo Vignelli"
          description="Massimo Vignelli was an Italian designer who profoundly influenced American design through his modernist approach. His work in corporate identity, public signage, and typography established new standards for clarity and functionality in design."
          designPrinciple="Modernist Clarity through grid systems and typography"
          exampleLink="https://vignelli.com"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://blog.weditt.com/wp-content/uploads/2024/08/Massimo-Vignelli-Master-of-Modernist-Design-1024x576.jpg"
                  alt="Massimo Vignelli"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="urbanist"
          descriptionClassName="text-gray-700 font-urbanist"
          titleClassName="text-2xl font-bold text-gray-900 font-urbanist"
          background="bg-gradient-to-br from-stone-50/50 to-slate-50/50"
        />
        <DesignSection
          title="Jakob Nielsen"
          description="A Danish web usability consultant and co-founder of the Nielsen Norman Group. Nielsen's research and principles have shaped modern web design, emphasizing user-centered design and accessibility."
          designPrinciple="Usability Heuristics - Ten general principles for interaction design that ensure intuitive and efficient user experiences"
          exampleLink="https://www.nngroup.com/people/jakob-nielsen/"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[600px] h-[400px] bg-white overflow-hidden group relative">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bD4vGn_s9B9vFClbG-UqpQ.jpeg"
                  alt="Jakob Nielsen's work"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="source-sans"
          descriptionClassName="text-gray-700"
          titleClassName="text-2xl font-bold text-gray-900"
          background="bg-gradient-to-br from-blue-50/50 to-indigo-50/50"
        />
        <DesignSection
          title="Whitney Hess"
          description="A leading user experience designer and coach, Hess has helped organizations create more human-centered products and services. Her work emphasizes empathy, clarity, and the importance of user research in design."
          designPrinciple="User Experience Design"
          exampleLink="https://whitneyhess.com/"
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <img
                src="https://whitneyhess.com/wp-content/uploads/WhitneyHess_glow.jpg"
                alt="Whitney Hess"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          }
          fontFamily="figtree"
          descriptionClassName=""
          titleClassName="text-2xl font-bold text-gray-900"
          background="bg-gradient-to-br from-rose-50/50 to-pink-50/50"
        />
        <DesignSection
          title="Saul Bass"
          description="A legendary graphic designer and filmmaker who revolutionized title sequences and corporate identity. His work for major Hollywood studios and corporations like AT&T established new standards for visual communication."
          designPrinciple="Visual Storytelling - Creating iconic, memorable designs that communicate complex ideas through simple forms"
          exampleLink="https://www.saulbassposterarchive.com/"
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <img
                src="https://blog.weditt.com/wp-content/uploads/2024/08/Saul-Bass-The-Master-of-Motion-Graphics.jpg"
                alt="Saul Bass"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          }
          fontFamily="bowlby-one-sc"
          descriptionClassName="text-gray-700 font-bowlby-one-sc"
          titleClassName="text-2xl font-bold text-gray-900 font-bowlby-one-sc tracking-tight"
          background="bg-gradient-to-br from-red-50/50 to-orange-50/50"
        />
        <DesignSection
          title="Frank Lloyd Wright"
          description="A pioneering architect who developed the concept of organic architecture, Wright's designs harmonized buildings with their natural surroundings. His work emphasized horizontal lines, open floor plans, and integration with nature."
          designPrinciple="Organic Architecture"
          exampleLink="https://franklloydwright.org/"
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <img
                src="https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/12/Frank-Lloyd-Wright-Iconic-Architect-01-0102030020.jpg"
                alt="Frank Lloyd Wright"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          }
          fontFamily="roboto-slab"
          descriptionClassName="text-gray-700 font-roboto-slab"
          titleClassName="text-2xl font-bold text-gray-900"
          background="bg-gradient-to-br from-emerald-50/50 to-teal-50/50"
        />
        <DesignSection
          title="Carolyn Davidson"
          description="A graphic designer who created the iconic Nike Swoosh logo in 1971 while still a student at Portland State University. Her simple, dynamic design has become one of the most recognizable logos in the world."
          designPrinciple="Simplicity & Impact – Creating powerful, memorable designs through minimalism and strong visual identity"
          exampleLink="https://www.nicekicks.com/celebrating-carolyn-davidson-designer-original-nike-swoosh-logo-internationalwomensday/"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://www.nicekicks.com/files/2017/03/Carolyn-Davidson-.jpg"
                  alt="Carolyn Davidson's Nike Swoosh design"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="font-futura-condensed absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="futura-condensed"
          descriptionClassName="text-gray-700 font-futura-condensed"
          titleClassName="text-2xl font-bold text-gray-900 font-futura-condensed"
          background="bg-gradient-to-br from-red-50/50 to-orange-50/50"
        />
        <DesignSection
          title="Vera Molnar"
          description="A pioneer of computer art and generative design, Vera Molnar was one of the first artists to use computers in her creative process. Her work explores the relationship between order and chaos through systematic geometric patterns and algorithmic compositions."
          designPrinciple="Systematic Creativity – Using algorithms and rules to generate unique visual expressions."
          exampleLink="https://ropac.net/artists/231-vera-molnar/"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <h2 className="absolute top-4 left-4 text-2xl font-bold text-gray-900 font-doto tracking-tight">
                  Vera Molnar
                </h2>
                <img
                  src="https://usercontent.one/wp/magazine.artland.com/wp-content/uploads/2022/10/vera-molnar-portrait.jpg"
                  alt="Vera Molnar portrait"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="doto"
          descriptionClassName="text-gray-700 font-doto"
          titleClassName="text-2xl font-bold text-gray-900 font-doto tracking-tight"
          background="bg-gradient-to-br from-violet-50/50 to-purple-50/50"
        />
        <DesignSection
          title="Ivan Chermayeff"
          description="A British-American graphic designer who co-founded Chermayeff & Geismar, creating some of the most recognizable corporate identities of the 20th century. His work for Mobil, NBC, and National Geographic established new standards for corporate branding."
          designPrinciple="Visual Simplicity - Creating memorable identities through bold, simple forms"
          exampleLink="https://www.cgstudionyc.com/ivan-chermayeff"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://www.zilliondesigns.com/blog/wp-content/uploads/Ivan-Chermayeff-Logos.png"
                  alt="Ivan Chermayeff's iconic logos"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="helvetica"
          descriptionClassName="text-gray-700 font-helvetica"
          titleClassName="text-2xl font-bold text-gray-900 font-helvetica tracking-tight"
          background="bg-gradient-to-br from-amber-50/50 to-yellow-50/50"
        />
        <DesignSection
          title="Paula Scher"
          description="A pioneering graphic designer known for her innovative typography and bold visual language. As a partner at Pentagram, she has created iconic identities for clients like Citibank, The Public Theater, and Microsoft Windows."
          designPrinciple="Expressive Typography - Using type as a primary visual element to convey meaning and emotion"
          exampleLink="https://www.pentagram.com/about/paula-scher"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://tyler.temple.edu/sites/tyler/files/styles/620x/public/09117PH-1024x666_0.png?itok=N8pkTx3q"
                  alt="Paula Scher's design work"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="solway"
          descriptionClassName="text-gray-700 font-solway"
          titleClassName="text-2xl font-bold text-gray-900 font-solway tracking-tight"
          background="bg-gradient-to-br from-fuchsia-50/50 to-pink-50/50"
        />
        <DesignSection
          title="Alan Cooper"
          description="Known as the 'Father of Visual Basic' and a pioneer in interaction design, Alan Cooper revolutionized software development with his user-centered design approach. His work on Visual Basic and his advocacy for personas and goal-directed design have shaped modern software development practices."
          designPrinciple="Goal-Directed Design"
          exampleLink="https://en.wikipedia.org/wiki/Alan_Cooper_(software_designer)"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://cdn.careerfoundry.com/en/wp-content/uploads/old-blog-uploads/alan-cooper.png"
                  alt="Alan Cooper"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          background="bg-gradient-to-br from-gray-50 to-gray-100"
          fontFamily="source-code-pro"
          descriptionClassName="font-source-code-pro"
        />
        <DesignSection
          title="Helmut Krone"
          description="A revolutionary art director at DDB, Helmut Krone transformed advertising with his minimalist approach and bold typography. His iconic Volkswagen 'Think Small' campaign redefined automotive advertising, proving that less could be more in visual communication."
          designPrinciple="Minimalist Impact"
          exampleLink="https://en.wikipedia.org/wiki/Helmut_Krone"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src="https://edito.houseofliteral.com/wp-content/webp-express/webp-images/uploads/2023/12/LITERAL-EDITO-IC-SAYFA-HELMUT-KRONE-v7.jpg.webp"
                alt="Helmut Krone"
                className="w-full h-full object-cover"
              />
            </div>
          }
          fontFamily="lexend"
          descriptionClassName="text-gray-700 font-lexend"
          titleClassName="text-2xl font-bold text-gray-900 font-lexend"
          background="bg-gradient-to-br from-lime-50/50 to-green-50/50"
        />
        <DesignSection
          title="LUST Design Studio"
          description="A Dutch design studio known for their innovative approach to data visualization and interactive design. Their work combines technology, art, and design to create immersive experiences that challenge traditional notions of information design."
          designPrinciple="Data as Art - Transforming complex information into engaging visual experiences"
          exampleLink="https://www.itsnicethat.com/articles/lust-studio"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://media.itsnicethat.com/images/558c0e897e74a94e630000ad.width-1440_3w6QVUvjM3esLO1c.jpg"
                  alt="LUST Design Studio work"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="source-code-pro"
          descriptionClassName="text-gray-700 font-source-code-pro"
          titleClassName="text-2xl font-bold text-gray-900 font-source-code-pro tracking-tight"
          background="bg-gradient-to-br from-cyan-50/50 to-blue-50/50"
        />
        <DesignSection
          title="Otl Aicher"
          description="A pioneer of systematic design, Otl Aicher created the iconic visual identity for the 1972 Munich Olympics. His work established new standards in wayfinding, typography, and corporate identity, demonstrating how design can create order and clarity in complex systems."
          designPrinciple="Systematic Design"
          exampleLink="https://en.wikipedia.org/wiki/Otl_Aicher"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src="https://onlyonceshop.com/media/pages/product/otl-aicher-olympic-games-munich-1972/9b51cd6d75-1714373193/otl-aicher-sw-1-948x713-q100.jpg"
                alt="Otl Aicher"
                className="w-full h-full object-cover"
              />
            </div>
          }
          fontFamily="tektur"
          descriptionClassName="text-gray-700 font-tektur"
          titleClassName="text-2xl font-bold text-gray-900 font-tektur"
          background="bg-gradient-to-br from-amber-50/50 to-orange-50/50"
        />
        <DesignSection
          title="Tom Hazelmyer"
          description="Founder of Amphetamine Reptile Records, Tom Hazelmyer created a distinctive visual language for underground music through his raw, confrontational design style. His work on album covers and promotional materials helped define the aesthetic of noise rock and punk in the 1990s."
          designPrinciple="Raw Expression"
          exampleLink="https://www.pbs.org/video/Tom-Hazelmyer-607060H-1/"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://arc.stimg.co/startribunemedia/LY6CUNF3P6HGSMPF4ICKSP72N4.jpg?&w=1080"
                  alt="Tom Hazelmyer"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="chelsea-market"
          descriptionClassName="text-gray-700 font-chelsea-market"
          titleClassName="text-2xl font-bold text-gray-900 font-chelsea-market"
          background="bg-gradient-to-br from-red-50/50 to-rose-50/50"
        />
        <DesignSection
          title="Shepard Fairey"
          description="A contemporary street artist and graphic designer known for his iconic 'Hope' poster for Barack Obama's 2008 presidential campaign. Fairey's work combines elements of street art, propaganda, and commercial design, often featuring bold colors, stencil techniques, and powerful social messages."
          designPrinciple="Visual Impact - Creating powerful messages through bold, iconic imagery and strategic use of color and composition"
          exampleLink="https://obeygiant.com"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://s.abcnews.com/images/Politics/AP_shepard_fairey_kab_150529_16x9_992.jpg?w=1600"
                  alt="Shepard Fairey's Hope poster"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="bowlby-one-sc"
          descriptionClassName="text-gray-700 font-bowlby-one-sc"
          titleClassName="text-2xl font-bold text-gray-900 font-bowlby-one-sc tracking-tight"
          background="bg-gradient-to-br from-indigo-50/50 to-violet-50/50"
        />
        <DesignSection
          title="Damien Hirst"
          description="A leading figure in the Young British Artists movement, Hirst is known for his controversial and thought-provoking works that explore themes of life, death, and beauty. His iconic spot paintings and formaldehyde-preserved animals have redefined contemporary art and challenged traditional notions of artistic value."
          designPrinciple="Conceptual Impact - Using bold visual statements to explore fundamental questions about existence and mortality"
          exampleLink="https://www.damienhirst.com"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://d16kd6gzalkogb.cloudfront.net/magazine_images/Damien-Hirst-in-front-of-his-The-Physical-Impossibility-of-Death-in-the-Mind-of-Someone-Living-1991-artwork-photo-via-GQ.jpg"
                  alt="Damien Hirst with his shark artwork"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="outfit"
          descriptionClassName="text-gray-700 font-outfit"
          titleClassName="text-2xl font-bold text-gray-900 font-outfit tracking-tight"
          background="bg-gradient-to-br from-white/50 to-gray-50/50"
        />
        <DesignSection
          title="Raymond Pettibon"
          description="An American artist known for his distinctive ink drawings that combine text and image, often exploring themes of American culture, politics, and society. His work, which began with album covers and flyers for punk bands, has evolved into a complex visual language that critiques and reflects on contemporary life."
          designPrinciple="Text and Image Fusion - Creating powerful narratives through the interplay of drawing and typography"
          exampleLink="https://www.davidzwirner.com/artists/raymond-pettibon"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://www.vice.com/wp-content/uploads/sites/2/2024/07/1486653409993-IMG_4528-scaled.jpeg"
                  alt="Raymond Pettibon artwork"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="syne-mono"
          descriptionClassName="text-gray-700 font-syne-mono"
          titleClassName="text-2xl font-bold text-gray-900 font-syne-mono tracking-tight"
          background="bg-gradient-to-br from-gray-100/50 to-gray-200/50"
        />
        <DesignSection
          title="Max Miedinger"
          description="A Swiss typeface designer best known for creating Helvetica, one of the most widely used typefaces in the world. His work exemplifies the Swiss Style of typography, characterized by clarity, readability, and objectivity."
          designPrinciple="Universal Typography - Creating typefaces that work across languages and contexts"
          exampleLink="https://www.linotype.com/1308886/max-miedinger.html"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://kingscliffgraphicdesign2017.wordpress.com/wp-content/uploads/2017/03/f94.png"
                  alt="Helvetica typeface specimen"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
          fontFamily="helvetica"
          descriptionClassName="text-gray-700 font-helvetica"
          titleClassName="text-2xl font-bold text-gray-900 font-helvetica tracking-tight"
          background="bg-gradient-to-br from-slate-50/50 to-blue-50/50"
        />
      </div>
      <footer className="py-2 bg-black">
        <div className="flex items-center pl-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative group">
              <div className="absolute w-8 h-8">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-6 h-px border-t border-dashed border-white/80 transform transition-all duration-500 group-hover:border-white group-hover:animate-pulse"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${
                        i * 45
                      }deg) translate(3px)`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
              <div
                className="absolute w-2 h-2 bg-white rounded-full transform transition-all duration-500 group-hover:scale-150 group-hover:animate-bounce"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
            <a
              href="https://davemelk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium text-white hover:text-white/80 transition-colors duration-300"
            >
              davemelk.com
            </a>
          </div>
          <a
            href="https://davemelk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto mr-4 px-2 py-1 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-300"
          >
            DM
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
