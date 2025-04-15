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
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-sky-50 to-blue-50 p-4 flex items-center justify-center">
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
              <div className="w-[180px] h-[180px] grid grid-cols-8 gap-0.5 bg-orange-100 p-2">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-red-600" : "bg-orange-50"
                    } aspect-square`}
                  />
                ))}
              </div>
              <div className="w-[180px] h-[180px] grid grid-cols-8 gap-0.5 bg-slate-700 p-2">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-red-600" : "bg-slate-900"
                    } aspect-square`}
                  />
                ))}
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
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-r from-purple-100 to-indigo-50 p-4 flex items-end gap-3">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 bg-indigo-600 transition-all duration-500 hover:bg-indigo-500`}
                    style={{
                      height: `${Math.sin((i * Math.PI) / 6) * 80 + 100}px`,
                      opacity: 0.7 + (i % 3) * 0.1,
                    }}
                  />
                ))}
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
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-emerald-50 to-teal-50 p-4 relative">
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                  {/* Vertical lines */}
                  <div className="absolute left-1/3 top-0 bottom-0 w-px bg-emerald-600/30" />
                  <div className="absolute right-1/3 top-0 bottom-0 w-px bg-emerald-600/30" />
                  {/* Horizontal lines */}
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-emerald-600/30" />
                  <div className="absolute bottom-1/3 left-0 right-0 h-px bg-emerald-600/30" />
                  {/* Intersection points */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-emerald-600 rounded-full"
                      style={{
                        left: `${i % 2 === 0 ? "33.33%" : "66.66%"}`,
                        top: `${i < 2 ? "33.33%" : "66.66%"}`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                  {/* Example composition elements */}
                  <div className="absolute right-1/3 top-1/3 transform translate-x-4 -translate-y-4">
                    <div className="w-24 h-24 bg-emerald-600/20 rounded-lg transform -rotate-12" />
                  </div>
                  <div className="absolute left-1/3 bottom-1/3 transform -translate-x-8 translate-y-8">
                    <div className="w-16 h-16 bg-teal-600/20 rounded-full" />
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
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-zinc-50 to-neutral-50 p-4 relative overflow-hidden">
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
              <div className="w-full max-w-[360px] h-[180px] bg-gradient-to-br from-amber-50 to-orange-50 p-4 relative">
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
              </div>
            </div>
          }
          fontFamily="dm-sans"
          descriptionClassName="font-dm-sans"
          background="bg-gradient-to-br from-amber-50/50 to-orange-50/50"
        />
      </div>
    </div>
  );
}

export default App;
