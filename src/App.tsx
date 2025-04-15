import React from "react";
import { MessageSquare } from "lucide-react";
import DesignSection from "./components/DesignSection";

function App() {
  return (
    <div className="min-h-screen w-full">
      {/* <header className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-6">
        <div className="max-w-7xl">
          <h1 className="text-3xl font-bold mb-2">Design Principles Explorer</h1>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MessageSquare className="w-4 h-4" />
            <span>Click the chat icon in each card to learn more about the design principles</span>
          </div>
        </div>
      </header> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-x border-y border-gray-200/50">
        <DesignSection
          title="Spatial Layers"
          description="Spatial Layers create visual hierarchy through the careful arrangement of overlapping elements. This technique uses depth, shadow, and transparency to establish clear relationships between components while maintaining visual harmony."
          designPrinciple="Contrast – Using differences in color, size, or shape to create visual interest and hierarchy."
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
                      className="absolute w-6 h-6 bg-white shadow-lg rounded transform transition-all duration-500 group-hover:scale-110"
                      style={{
                        left: `${20 + i * 70}px`,
                        top: `${30 + (i % 2) * 60}px`,
                        zIndex: 10,
                        animation: `float ${
                          2 + i * 0.5
                        }s ease-in-out infinite alternate`,
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
                  <div className="text-xs text-sky-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
                    Layers create depth and hierarchy
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
          title="Bezold Effect"
          description="The Bezold Effect occurs when the appearance of a color is altered by the colors adjacent to it. This optical illusion demonstrates how our perception of color can be dramatically influenced by its surrounding colors."
          designPrinciple="Contrast – Using differences in color, size, or shape to create visual interest and hierarchy."
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
                <div className="text-xs text-white font-medium bg-black/60 px-3 py-2 rounded-lg backdrop-blur-sm">
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
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-r from-purple-100 to-indigo-50 p-4 flex items-end gap-3 group">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 bg-indigo-600 transition-all duration-500 hover:bg-indigo-500 relative overflow-hidden animate-pulse`}
                    style={{
                      height: `${Math.sin((i * Math.PI) / 6) * 80 + 100}px`,
                      opacity: 0.7 + (i % 3) * 0.1,
                      animationDuration: `${2 + (i % 3) * 0.5}s`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Wave effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent animate-wave"
                      style={{
                        animationDuration: `${3 + (i % 2)}s`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  </div>
                ))}
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs text-indigo-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
                    Pulsing bars create visual rhythm
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="roboto"
          background="bg-[radial-gradient(circle_at_top_right,theme(colors.indigo.50/30),theme(colors.purple.50/30))]"
        />
        <DesignSection
          title="Rule of Thirds"
          description="The Rule of Thirds divides a composition into nine equal parts using two horizontal and two vertical lines. Key elements placed along these lines or at their intersections create more engaging and balanced designs."
          designPrinciple="Balance – Distributing elements evenly to create a feeling of stability (can be symmetrical or asymmetrical)."
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
                  <div className="text-xs text-emerald-600 font-medium bg-white/80 px-2 py-1 rounded">
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
          title="Ambiguous Scale"
          description="Ambiguous Scale challenges perception by presenting elements whose size relationships are intentionally unclear. This creates an engaging visual puzzle that draws viewers in to resolve the spatial ambiguity."
          designPrinciple="Contrast – Using differences in color, size, or shape to create visual interest and hierarchy."
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
                        className="absolute left-1/2 top-1/2 border-2 border-zinc-300 rounded-lg transition-all duration-700"
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
                        className="absolute transform-gpu transition-all duration-1000 cursor-pointer hover:scale-150"
                        style={{
                          left: `${
                            Math.cos((i * Math.PI * 2) / 5) * 80 + 96
                          }px`,
                          top: `${Math.sin((i * Math.PI * 2) / 5) * 80 + 96}px`,
                          perspective: "1000px",
                        }}
                      >
                        <div
                          className="w-8 h-8 relative transform-gpu transition-transform duration-1000 hover:rotate-45"
                          style={{
                            animation: `float ${
                              3 + i
                            }s ease-in-out infinite alternate`,
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

                    {/* Intersecting lines */}
                    <div className="absolute inset-4 opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`line-${i}`}
                          className="absolute left-0 right-0 h-px bg-zinc-400"
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
                  <div className="text-xs text-zinc-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
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
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-amber-50 to-orange-50 p-4 relative group">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                  {/* Group 1 - Close proximity */}
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`group1-${i}`}
                        className="w-8 h-8 bg-amber-600 rounded-full transition-all duration-300 hover:scale-110"
                      />
                    ))}
                  </div>

                  {/* Group 2 - Close proximity */}
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`group2-${i}`}
                        className="w-8 h-8 bg-orange-600 rounded-full transition-all duration-300 hover:scale-110"
                      />
                    ))}
                  </div>

                  {/* Isolated elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-amber-600/30 rounded-full" />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-orange-600/30 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-amber-600/30 rounded-full" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-orange-600/30 rounded-full" />
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="text-xs text-amber-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
                    Close elements are perceived as related
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
          title="Interwoven Space"
          description="Interwoven Space creates complex visual relationships by carefully layering and connecting elements. This technique uses overlapping forms, transparency, and strategic placement to create a sense of depth and interconnectedness."
          designPrinciple="Depth – Creating the illusion of three-dimensional space through layering and perspective."
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-rose-50 to-pink-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Base layer - circular pattern */}
                  <div className="absolute w-48 h-48">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`circle-${i}`}
                        className="absolute w-24 h-24 border-2 border-rose-300 rounded-full transform transition-all duration-700"
                        style={{
                          left: `${
                            Math.cos((i * Math.PI * 2) / 8) * 40 + 48
                          }px`,
                          top: `${Math.sin((i * Math.PI * 2) / 8) * 40 + 48}px`,
                          transform: `rotate(${i * 45}deg)`,
                          opacity: 0.6,
                        }}
                      />
                    ))}
                  </div>

                  {/* Middle layer - interwoven lines */}
                  <div className="absolute w-48 h-48">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`line-${i}`}
                        className="absolute w-48 h-48 border-t-2 border-rose-400 transform transition-all duration-700"
                        style={{
                          transform: `rotate(${i * 45}deg)`,
                          opacity: 0.7,
                        }}
                      />
                    ))}
                  </div>

                  {/* Foreground elements - floating shapes */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`shape-${i}`}
                      className="absolute w-8 h-8 bg-rose-500/80 rounded-lg transform transition-all duration-500 hover:scale-125 hover:bg-rose-400"
                      style={{
                        left: `${Math.cos((i * Math.PI * 2) / 6) * 40 + 48}px`,
                        top: `${Math.sin((i * Math.PI * 2) / 6) * 40 + 48}px`,
                        transform: `rotate(${i * 30}deg)`,
                        zIndex: 10,
                      }}
                    />
                  ))}

                  {/* Accent elements - small dots */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={`dot-${i}`}
                      className="absolute w-2 h-2 bg-rose-600 rounded-full transform transition-all duration-500"
                      style={{
                        left: `${Math.cos((i * Math.PI * 2) / 12) * 60 + 48}px`,
                        top: `${Math.sin((i * Math.PI * 2) / 12) * 60 + 48}px`,
                        opacity: 0.8,
                      }}
                    />
                  ))}
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs text-rose-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
                    Layered elements create depth and connection
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
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-stone-50 to-slate-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Initial complex pattern */}
                  <div className="absolute w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(36)].map((_, i) => (
                      <div
                        key={`initial-${i}`}
                        className="absolute w-4 h-4 bg-stone-400/40 rounded transform transition-all duration-500"
                        style={{
                          left: `${(i % 6) * 16}px`,
                          top: `${Math.floor(i / 6) * 16}px`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Reduced pattern - appears on hover */}
                  <div className="absolute w-48 h-48 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={`reduced-${i}`}
                        className="absolute w-8 h-8 bg-stone-600/80 rounded transform transition-all duration-500 group-hover:scale-110"
                        style={{
                          left: `${(i % 3) * 32}px`,
                          top: `${Math.floor(i / 3) * 32}px`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Focal point - emphasized element */}
                  <div className="absolute w-12 h-12 bg-stone-800 rounded transform transition-all duration-500 group-hover:scale-125 group-hover:bg-stone-900">
                    <div className="absolute inset-1 bg-gradient-to-br from-stone-700 to-stone-900 rounded" />
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs text-stone-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
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
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-violet-50 to-indigo-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Sine wave pattern */}
                  <div className="absolute w-48 h-48">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={`wave-${i}`}
                        className="absolute w-2 h-2 bg-violet-400 rounded-full transform transition-all duration-500"
                        style={{
                          left: `${i * 8}px`,
                          top: `${Math.sin(i * 0.5) * 20 + 48}px`,
                          opacity: 0.8,
                        }}
                      />
                    ))}
                  </div>

                  {/* Circular pattern with mathematical function */}
                  <div className="absolute w-48 h-48">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={`circle-${i}`}
                        className="absolute w-3 h-3 bg-indigo-400 rounded-full transform transition-all duration-500"
                        style={{
                          left: `${Math.cos((i * Math.PI) / 8) * 40 + 48}px`,
                          top: `${Math.sin((i * Math.PI) / 8) * 40 + 48}px`,
                          opacity: 0.6,
                        }}
                      />
                    ))}
                  </div>

                  {/* Algorithmic lines */}
                  <div className="absolute w-48 h-48">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`line-${i}`}
                        className="absolute w-48 h-px bg-gradient-to-r from-violet-400/0 via-violet-400/50 to-violet-400/0 transform transition-all duration-500"
                        style={{
                          top: `${i * 12}px`,
                          transform: `rotate(${i * 22.5}deg)`,
                          opacity: 0.4,
                        }}
                      />
                    ))}
                  </div>

                  {/* Interactive element */}
                  <div className="absolute w-8 h-8 bg-violet-600 rounded-full transform transition-all duration-500 group-hover:scale-125 group-hover:bg-indigo-600">
                    <div className="absolute inset-1 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full" />
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="text-xs text-violet-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
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
          title="Dimensional Hierarchy"
          description="Dimensional Hierarchy creates visual importance through varying levels of depth and dimensionality. By using shadows, perspective, and strategic layering, elements can appear to float at different levels, creating a clear visual hierarchy."
          designPrinciple="Depth – Using three-dimensional space to establish visual importance and relationships."
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
                  <div className="text-xs text-amber-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
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
          title="Basic Color Theory"
          description="Basic Color Theory explores the fundamental relationships between colors. By understanding primary colors, color harmony, and the color wheel, we can create visually appealing and meaningful color combinations."
          designPrinciple="Color Relationships – Understanding how colors interact and complement each other."
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-sky-50 to-blue-50 p-4 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Color wheel base */}
                  <div className="absolute w-36 h-36 rounded-full border-2 border-sky-200/50 translate-y-4">
                    {/* Primary and secondary colors */}
                    {[
                      { color: "red-500", angle: 0 },
                      { color: "orange-500", angle: 60 },
                      { color: "yellow-500", angle: 120 },
                      { color: "green-500", angle: 180 },
                      { color: "blue-500", angle: 240 },
                      { color: "purple-500", angle: 300 },
                    ].map(({ color, angle }, i) => (
                      <div
                        key={i}
                        className={`absolute w-${i < 3 ? "8" : "6"} h-${
                          i < 3 ? "8" : "6"
                        } bg-${color} rounded-full transform transition-all duration-500 group-hover:scale-110`}
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translate(72px) rotate(-${angle}deg)`,
                        }}
                      />
                    ))}

                    {/* Color relationships */}
                    <div className="absolute w-36 h-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Complementary lines */}
                      <div className="absolute w-36 h-px bg-sky-200/30 transform rotate-30" />
                      <div className="absolute w-36 h-px bg-sky-200/30 transform -rotate-30" />
                      <div className="absolute w-36 h-px bg-sky-200/30 transform rotate-90" />
                    </div>
                  </div>

                  {/* Color harmony examples */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-4 h-4 bg-red-500 rounded" />
                    <div className="w-4 h-4 bg-orange-500 rounded" />
                    <div className="w-4 h-4 bg-yellow-500 rounded" />
                    <div className="w-4 h-4 bg-green-500 rounded" />
                    <div className="w-4 h-4 bg-blue-500 rounded" />
                    <div className="w-4 h-4 bg-purple-500 rounded" />
                  </div>
                </div>
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="text-xs text-sky-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
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
                  <div className="text-xs text-stone-600 font-medium bg-white/80 px-3 py-2 rounded-lg backdrop-blur-sm">
                    Parallel lines remain parallel
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="oswald"
          descriptionClassName="font-oswald"
          background="bg-gradient-to-br from-stone-50/50 to-slate-50/50"
        />
      </div>
    </div>
  );
}

export default App;
