import React, { useState } from "react";
import { ArrowUp, Info, Settings, Brain, Hand, Grid, List } from "lucide-react";
import DesignSection from "./components/DesignSection";
import Header from "./components/Header";

function App() {
  const [isListLayout, setIsListLayout] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <Header isListLayout={isListLayout} setIsListLayout={setIsListLayout} />
      {/* Section Break */}
      <div id="design" className="col-span-full py-24 bg-black text-white">
        <div className="flex items-center justify-center gap-2 group">
          <h2 className="text-2xl font-bold text-white font-dm-sans leading-none">
            Design
          </h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-opacity duration-200"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
        <p className="text-white text-center mt-2 font-avenir">
          Explore the fundamental principles that shape effective design
        </p>
      </div>

      <div
        className={`${
          isListLayout
            ? "grid grid-cols-1 gap-6 max-w-4xl mx-auto px-4 py-8"
            : "col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-12"
        }`}
      >
        
        <DesignSection
          title="Interwoven Space"
          description="Interwoven Space creates complex visual relationships by carefully layering and connecting elements. This technique uses overlapping forms, transparency, and strategic placement to create a sense of depth and interconnectedness."
          designPrinciple="Depth – Creating the illusion of three-dimensional space through layering and perspective."
          exampleLink="https://www.behance.net/gallery/101333357/Interwoven-Space"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] p-4 relative group">
                <style>
                  {`
                    @keyframes weave {
                      0% { transform: translateX(-20px) translateY(0) rotate(0deg); }
                      25% { transform: translateX(0) translateY(-20px) rotate(90deg); }
                      50% { transform: translateX(20px) translateY(0) rotate(180deg); }
                      75% { transform: translateX(0) translateY(20px) rotate(270deg); }
                      100% { transform: translateX(-20px) translateY(0) rotate(360deg); }
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-15px); }
                    }
                    .weave-element {
                      animation: weave 12s ease-in-out infinite;
                    }
                    .float-element {
                      animation: float 6s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="w-64 h-64 relative">
                    {/* Base layer */}
                    <div className="absolute inset-0 grid grid-cols-3 gap-2">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-gray-200/30 rounded-lg" />
                      ))}
                    </div>

                    {/* Interwoven elements */}
                    <div className="absolute inset-0">
                      {/* Horizontal strips */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={`h-${i}`}
                          className="absolute left-0 right-0 h-8 bg-blue-500/60 rounded-lg weave-element"
                          style={{
                            top: `${i * 33.33}%`,
                            animationDelay: `${i * 2}s`,
                          }}
                        />
                      ))}

                      {/* Vertical strips */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={`v-${i}`}
                          className="absolute top-0 bottom-0 w-8 bg-rose-500/60 rounded-lg weave-element"
                          style={{
                            left: `${i * 33.33}%`,
                            animationDelay: `${i * 2 + 1}s`,
                          }}
                        />
                      ))}

                      {/* Floating center element */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-emerald-500/80 rounded-lg float-element" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <DesignSection
          title="Rule of Thirds"
          description="The Rule of Thirds divides a composition into nine equal parts using two horizontal and two vertical lines. Key elements placed along these lines or at their intersections create more engaging and balanced designs."
          designPrinciple="Balance – Distributing elements evenly to create a feeling of stability (can be symmetrical or asymmetrical)."
          exampleLink="https://www.photographymad.com/pages/view/rule-of-thirds"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative group">
                <style>
                  {`
                    @keyframes highlightGrid {
                      0%, 100% { opacity: 0.2; }
                      50% { opacity: 0.4; }
                    }
                    @keyframes highlightPoint {
                      0%, 100% { transform: scale(1); opacity: 0.4; }
                      50% { transform: scale(1.5); opacity: 0.8; }
                    }
                    @keyframes moveElement {
                      0% { transform: translate(0, 0); }
                      25% { transform: translate(20px, -20px); }
                      50% { transform: translate(0, -30px); }
                      75% { transform: translate(-20px, -20px); }
                      100% { transform: translate(0, 0); }
                    }
                    .grid-line {
                      animation: highlightGrid 4s ease-in-out infinite;
                    }
                    .intersection-point {
                      animation: highlightPoint 4s ease-in-out infinite;
                    }
                    .example-element {
                      animation: moveElement 6s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="relative w-64 h-64">
                    {/* Grid lines */}
                    <div className="absolute inset-0">
                      {/* Vertical lines */}
                      <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-gray-400 grid-line" />
                      <div className="absolute right-1/3 top-0 bottom-0 w-0.5 bg-gray-400 grid-line" />
                      {/* Horizontal lines */}
                      <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gray-400 grid-line" />
                      <div className="absolute bottom-1/3 left-0 right-0 h-0.5 bg-gray-400 grid-line" />
                    </div>

                    {/* Intersection points */}
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-gray-600 rounded-full intersection-point"
                        style={{
                          left: `${i % 2 === 0 ? "33.33%" : "66.66%"}`,
                          top: `${i < 2 ? "33.33%" : "66.66%"}`,
                          animationDelay: `${i * 1}s`,
                        }}
                      />
                    ))}

                    {/* Example elements at intersection points */}
                    <div
                      className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 example-element"
                      style={{ animationDelay: "0s" }}
                    >
                      <div className="w-8 h-8 bg-blue-500/60 rounded-lg" />
                    </div>
                    <div
                      className="absolute right-1/3 top-1/3 translate-x-1/2 -translate-y-1/2 example-element"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="w-8 h-8 bg-green-500/60 rounded-lg" />
                    </div>
                    <div
                      className="absolute left-1/3 bottom-1/3 -translate-x-1/2 translate-y-1/2 example-element"
                      style={{ animationDelay: "4s" }}
                    >
                      <div className="w-8 h-8 bg-purple-500/60 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Spatial Layers"
          description="Spatial layering creates depth and hierarchy by organizing elements into distinct planes. This technique uses shadows, transparency, and positioning to create a sense of three-dimensional space, making designs more dynamic and engaging."
          designPrinciple="Depth – Creating visual hierarchy through layered elements."
          exampleLink="https://www.toptal.com/designers/visual/principles-of-design"
          isListLayout={isListLayout}
          fontFamily="tektur"
          descriptionClassName="text-gray-700 font-tektur"
          titleClassName="text-2xl font-bold text-gray-900 font-tektur"
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative group">
                <style>
                  {`
                    @keyframes floatLayer {
                      0% { transform: translateY(0) rotate(0deg) scale(1); }
                      25% { transform: translateY(-30px) rotate(5deg) scale(1.1); }
                      50% { transform: translateY(-50px) rotate(0deg) scale(1.2); }
                      75% { transform: translateY(-30px) rotate(-5deg) scale(1.1); }
                      100% { transform: translateY(0) rotate(0deg) scale(1); }
                    }
                    .layer-1 { animation: floatLayer 6s ease-in-out infinite; }
                    .layer-2 { animation: floatLayer 6s ease-in-out infinite; animation-delay: 2s; }
                    .layer-3 { animation: floatLayer 6s ease-in-out infinite; animation-delay: 4s; }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Base container */}
                  <div className="relative w-48 h-48">
                    {/* Layer 3 - Back */}
                    <div
                      className="absolute inset-0 bg-slate-200 rounded-lg shadow-sm layer-3"
                      style={{ transform: "translateY(20px) rotate(-3deg)" }}
                    />

                    {/* Layer 2 - Middle */}
                    <div
                      className="absolute inset-0 bg-slate-300 rounded-lg shadow-sm layer-2"
                      style={{ transform: "translateY(10px) rotate(-1deg)" }}
                    />

                    {/* Layer 1 - Front */}
                    <div className="absolute inset-0 bg-slate-400 rounded-lg shadow-sm layer-1" />

                    {/* Decorative elements */}
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-slate-500/20 rounded-lg" />
                    </div>
                    <div className="absolute inset-8 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-slate-500/20 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Observed Rhythm"
          description="Observed Rhythm creates visual flow through repeating elements. This dynamic pattern uses varying sizes and spacing to guide the viewer's eye naturally through the design."
          designPrinciple="Repetition – Reusing visual elements to create consistency."
          exampleLink="https://www.nngroup.com/articles/rhythm/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative group">
                <style>
                  {`
                    @keyframes flowRight {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(100%); }
                    }
                    @keyframes pulse {
                      0%, 100% { transform: scale(1); opacity: 0.7; }
                      50% { transform: scale(1.1); opacity: 1; }
                    }
                    .flow-element {
                      animation: flowRight 8s linear infinite;
                    }
                    .pulse-element {
                      animation: pulse 2s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main rhythm container */}
                  <div className="w-full h-48 relative overflow-hidden">
                    {/* Flowing elements */}
                    <div className="absolute inset-0 flex items-center gap-8">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="flow-element w-16 h-16 bg-blue-500/80 rounded-lg"
                          style={{ animationDelay: `${i * 1.6}s` }}
                        />
                      ))}
                    </div>

                    {/* Pulsing rhythm markers */}
                    <div className="absolute inset-0 flex items-center justify-between px-8">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="pulse-element w-8 h-8 bg-rose-500/80 rounded-full"
                          style={{ animationDelay: `${i * 0.7}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          fontFamily="roboto"
        />
        <DesignSection
          title="Ambiguous Scale"
          description="Ambiguous Scale challenges perception by presenting elements whose size relationships are intentionally unclear. This creates an engaging visual puzzle that draws viewers in to resolve the spatial ambiguity, demonstrating how scale can be used to create visual hierarchy and guide attention."
          designPrinciple="Scale & Perception – Using relative size to create visual hierarchy and relationships between elements."
          exampleLink="https://www.microsoft.com/en-us/microsoft-365-life-hacks/presentations/scale-in-graphic-design"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative group">
                <style>
                  {`
                    @keyframes scaleShift {
                      0% { transform: scale(0.8) translateY(20px); }
                      50% { transform: scale(1.2) translateY(-20px); }
                      100% { transform: scale(0.8) translateY(20px); }
                    }
                    @keyframes rotatePerspective {
                      0% { transform: perspective(1000px) rotateY(0deg) rotateX(0deg); }
                      50% { transform: perspective(1000px) rotateY(15deg) rotateX(10deg); }
                      100% { transform: perspective(1000px) rotateY(0deg) rotateX(0deg); }
                    }
                    .scale-element {
                      animation: scaleShift 6s ease-in-out infinite;
                    }
                    .perspective-container {
                      animation: rotatePerspective 8s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container with perspective */}
                  <div className="perspective-container w-64 h-64 relative">
                    {/* Reference squares */}
                    <div className="absolute inset-0 grid grid-cols-2 gap-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-gray-200/50 rounded-lg" />
                      ))}
                    </div>

                    {/* Ambiguous element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="scale-element w-24 h-24 bg-blue-500/80 rounded-lg shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Law of Proximity"
          description="The Law of Proximity states that objects that are close to one another are perceived as being related or grouped together. This principle helps create visual organization and relationships between elements in a design."
          designPrinciple="Proximity – Grouping related items together to show their connection."
          exampleLink="https://lawsofux.com/law-of-proximity/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative group">
                <style>
                  {`
                    @keyframes groupMove {
                      0% { transform: translate(0, 0); }
                      25% { transform: translate(10px, -10px); }
                      50% { transform: translate(0, 0); }
                      75% { transform: translate(-10px, 10px); }
                      100% { transform: translate(0, 0); }
                    }
                    @keyframes separateMove {
                      0% { transform: translate(0, 0); }
                      25% { transform: translate(-10px, -10px); }
                      50% { transform: translate(0, 0); }
                      75% { transform: translate(10px, 10px); }
                      100% { transform: translate(0, 0); }
                    }
                    @keyframes diagonalMove {
                      0% { transform: translate(0, 0) rotate(0deg); }
                      25% { transform: translate(8px, 8px) rotate(3deg); }
                      50% { transform: translate(0, 0) rotate(0deg); }
                      75% { transform: translate(-8px, -8px) rotate(-3deg); }
                      100% { transform: translate(0, 0) rotate(0deg); }
                    }
                    .group-animation {
                      animation: groupMove 4s ease-in-out infinite;
                    }
                    .separate-animation {
                      animation: separateMove 4s ease-in-out infinite;
                    }
                    .diagonal-animation {
                      animation: diagonalMove 5s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="w-64 h-64 relative">
                    {/* Grouped elements - top left quadrant */}
                    <div className="absolute top-8 left-8 group-animation">
                      <div className="grid grid-cols-2 gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-blue-500/80 rounded-lg"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Separated elements - bottom right quadrant */}
                    <div className="absolute bottom-8 right-8 separate-animation">
                      <div className="grid grid-cols-2 gap-8">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-rose-500/80 rounded-lg"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Diagonal group - center area */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 diagonal-animation">
                      <div className="grid grid-cols-2 gap-4">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-emerald-500/80 rounded-lg"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        
        <DesignSection
          title="Artful Reduction"
          description="Artful Reduction demonstrates how removing elements can strengthen a design. By carefully eliminating unnecessary components, the remaining elements gain more impact and clarity, creating a more focused and powerful visual statement."
          designPrinciple="Minimalism – Using the fewest elements necessary to create maximum impact."
          exampleLink="https://www.nngroup.com/articles/characteristics-minimalism/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] p-4 relative group">
                <style>
                  {`
                    @keyframes pulse {
                      0% { transform: scale(1); opacity: 0.1; }
                      50% { transform: scale(1.5); opacity: 1; }
                      100% { transform: scale(1); opacity: 0.1; }
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
                    .group:hover .number-pulse {
                      animation: pulse 1s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Initial state - complex overlapping shapes */}
                  <div className="absolute w-48 h-48 opacity-100 group-hover:opacity-0 transition-all duration-1000 animate-infinite">
                    {/* Background grid */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={`grid-${i}`}
                          className="bg-stone-300/30 transform transition-all duration-1000 animate-[pulse_2s_ease-in-out_infinite] group-hover:animate-none"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    {/* Overlapping circles */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`circle-${i}`}
                        className="absolute w-24 h-24 border-2 border-stone-400/40 rounded-full transform transition-all duration-1000 animate-[spin_8s_linear_infinite] group-hover:animate-none"
                        style={{
                          left: `${25 + Math.cos((i * Math.PI * 2) / 8) * 20}%`,
                          top: `${25 + Math.sin((i * Math.PI * 2) / 8) * 20}%`,
                          transform: `translate(-50%, -50%) rotate(${
                            i * 45
                          }deg)`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Final state - single focused element */}
                  <div className="absolute w-48 h-48 opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-infinite">
                    {/* Central focus element */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-stone-800 transform transition-all duration-1000 group-hover:scale-110 group-hover:rotate-6 animate-[pulse_2s_ease-in-out_infinite] group-hover:animate-none">
                      <div className="absolute inset-1" />
                      {/* Subtle shadow */}
                      <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-infinite" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Basic Color Theory"
          description="Basic Color Theory explores the fundamental relationships between colors. By understanding primary colors, color harmony, and the color wheel, we can create visually appealing and meaningful color combinations."
          designPrinciple="Color Relationships – Understanding how colors interact and complement each other."
          exampleLink="https://www.canva.com/learn/color-theory/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative group">
                <style>
                  {`
                    @keyframes floatBall {
                      0%, 100% { transform: translate(0, 0); }
                      25% { transform: translate(20px, -20px); }
                      50% { transform: translate(0, 0); }
                      75% { transform: translate(-20px, 20px); }
                    }
                    @keyframes pulseBall {
                      0%, 100% { transform: scale(1); }
                      50% { transform: scale(1.1); }
                    }
                    @keyframes mergeColors {
                      0%, 100% { filter: blur(0px); }
                      50% { filter: blur(2px); }
                    }
                    .float-ball {
                      animation: floatBall 6s ease-in-out infinite;
                    }
                    .pulse-ball {
                      animation: pulseBall 3s ease-in-out infinite;
                    }
                    .merge-colors {
                      animation: mergeColors 4s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="w-64 h-64 relative">
                    {/* Background grid */}
                    <div className="absolute inset-0 grid grid-cols-4 gap-1">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="bg-gray-100/50 rounded" />
                      ))}
                    </div>

                    {/* Primary color balls */}
                    <div className="absolute inset-0">
                      <div
                        className="float-ball absolute w-12 h-12 rounded-full bg-red-500 shadow-lg"
                        style={{
                          left: "20%",
                          top: "30%",
                          animationDelay: "0s",
                        }}
                      />
                      <div
                        className="float-ball absolute w-12 h-12 rounded-full bg-yellow-500 shadow-lg"
                        style={{
                          left: "50%",
                          top: "20%",
                          animationDelay: "2s",
                        }}
                      />
                      <div
                        className="float-ball absolute w-12 h-12 rounded-full bg-blue-500 shadow-lg"
                        style={{
                          left: "80%",
                          top: "30%",
                          animationDelay: "4s",
                        }}
                      />
                    </div>

                    {/* Secondary color balls */}
                    <div className="absolute inset-0">
                      <div
                        className="float-ball absolute w-10 h-10 rounded-full bg-orange-500 shadow-lg"
                        style={{
                          left: "35%",
                          top: "25%",
                          animationDelay: "1s",
                        }}
                      />
                      <div
                        className="float-ball absolute w-10 h-10 rounded-full bg-green-500 shadow-lg"
                        style={{
                          left: "65%",
                          top: "25%",
                          animationDelay: "3s",
                        }}
                      />
                      <div
                        className="float-ball absolute w-10 h-10 rounded-full bg-purple-500 shadow-lg"
                        style={{
                          left: "50%",
                          top: "50%",
                          animationDelay: "5s",
                        }}
                      />
                    </div>

                    {/* Color mixing effects */}
                    <div className="absolute inset-0">
                      <div
                        className="merge-colors absolute w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-yellow-500 opacity-50"
                        style={{ left: "35%", top: "25%" }}
                      />
                      <div
                        className="merge-colors absolute w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-blue-500 opacity-50"
                        style={{ left: "65%", top: "25%" }}
                      />
                      <div
                        className="merge-colors absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-red-500 opacity-50"
                        style={{ left: "50%", top: "50%" }}
                      />
                    </div>

                    {/* Complementary pairs */}
                    <div className="absolute inset-0">
                      <div
                        className="pulse-ball absolute w-8 h-8 rounded-full bg-red-500 shadow-lg"
                        style={{
                          left: "30%",
                          top: "60%",
                          animationDelay: "0s",
                        }}
                      />
                      <div
                        className="pulse-ball absolute w-8 h-8 rounded-full bg-green-500 shadow-lg"
                        style={{
                          left: "70%",
                          top: "60%",
                          animationDelay: "0s",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Axonometric Projection"
          description="Axonometric Projection is a method of representing 3D objects in 2D space using parallel projection. Unlike perspective projection, it maintains consistent scale and angles, making it ideal for technical drawings and architectural visualization."
          designPrinciple="Parallel Projection – Representing 3D space in 2D while maintaining consistent measurements."
          exampleLink="https://en.wikipedia.org/wiki/Axonometric_projection"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative group">
                <style>
                  {`
                    @keyframes rotate3D {
                      0% { transform: perspective(1000px) rotateX(20deg) rotateY(0deg); }
                      50% { transform: perspective(1000px) rotateX(20deg) rotateY(180deg); }
                      100% { transform: perspective(1000px) rotateX(20deg) rotateY(360deg); }
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-10px); }
                    }
                    .cube-container {
                      animation: rotate3D 12s linear infinite;
                    }
                    .float-element {
                      animation: float 4s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="w-64 h-64 relative">
                    {/* 3D Cube */}
                    <div className="cube-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                      {/* Front face */}
                      <div className="absolute inset-0 bg-blue-500/60 transform-gpu translate-z-16" />
                      {/* Back face */}
                      <div className="absolute inset-0 bg-blue-500/60 transform-gpu -translate-z-16" />
                      {/* Top face */}
                      <div className="absolute inset-0 bg-blue-400/60 transform-gpu rotate-x-90 translate-y-[-50%] translate-z-16" />
                      {/* Bottom face */}
                      <div className="absolute inset-0 bg-blue-400/60 transform-gpu rotate-x-90 translate-y-[50%] translate-z-16" />
                      {/* Left face */}
                      <div className="absolute inset-0 bg-blue-600/60 transform-gpu rotate-y-90 translate-x-[-50%] translate-z-16" />
                      {/* Right face */}
                      <div className="absolute inset-0 bg-blue-600/60 transform-gpu rotate-y-90 translate-x-[50%] translate-z-16" />
                    </div>

                    {/* Floating elements */}
                    <div className="absolute inset-0">
                      <div
                        className="absolute top-4 left-4 w-8 h-8 bg-rose-500/60 rounded-lg float-element"
                        style={{ animationDelay: "0s" }}
                      />
                      <div
                        className="absolute bottom-4 right-4 w-8 h-8 bg-rose-500/60 rounded-lg float-element"
                        style={{ animationDelay: "2s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Golden Ratio"
          description="The Golden Ratio, approximately 1:1.618, is a mathematical proportion found in nature that creates aesthetically pleasing compositions. When used in design, it helps create balanced and harmonious layouts that feel naturally beautiful."
          designPrinciple="Proportion – Using mathematical relationships to create visually pleasing compositions."
          exampleLink="https://www.canva.com/learn/what-is-the-golden-ratio/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative group">
                <style>
                  {`
                    @keyframes drawSpiral {
                      0% { stroke-dashoffset: 1000; }
                      100% { stroke-dashoffset: 0; }
                    }
                    @keyframes pulseRect {
                      0%, 100% { opacity: 0.3; }
                      50% { opacity: 0.8; }
                    }
                    .spiral-path {
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                      animation: drawSpiral 8s linear infinite;
                    }
                    .golden-rect {
                      animation: pulseRect 4s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main container */}
                  <div className="w-64 h-64 relative">
                    {/* Golden rectangles */}
                    <div className="absolute inset-0">
                      <div
                        className="absolute top-0 left-0 w-40 h-64 bg-amber-500/20 golden-rect"
                        style={{ animationDelay: "0s" }}
                      />
                      <div
                        className="absolute top-0 left-0 w-24 h-40 bg-amber-500/30 golden-rect"
                        style={{ animationDelay: "1s" }}
                      />
                      <div
                        className="absolute top-0 left-0 w-16 h-24 bg-amber-500/40 golden-rect"
                        style={{ animationDelay: "2s" }}
                      />
                      <div
                        className="absolute top-0 left-0 w-10 h-16 bg-amber-500/50 golden-rect"
                        style={{ animationDelay: "3s" }}
                      />
                    </div>

                    {/* Golden spiral */}
                    <svg className="absolute inset-0" viewBox="0 0 100 100">
                      <path
                        d="M 0,0 Q 25,0 25,25 Q 25,50 50,50 Q 75,50 75,75 Q 75,100 100,100"
                        className="spiral-path"
                        stroke="#B45309"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>

                    {/* Ratio markers */}
                    <div className="absolute top-2 left-2 text-xs text-amber-700 font-mono">
                      1
                    </div>
                    <div className="absolute top-2 left-[42px] text-xs text-amber-700 font-mono">
                      1.618
                    </div>
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
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative group">
                <style>
                  {`
                    @keyframes pulseNode {
                      0%, 100% { transform: scale(1); }
                      50% { transform: scale(1.2); }
                    }
                    @keyframes flowData {
                      0% { stroke-dashoffset: 100; }
                      100% { stroke-dashoffset: 0; }
                    }
                    .network-node {
                      animation: pulseNode 6s ease-in-out infinite;
                    }
                    .flow-path {
                      stroke-dasharray: 10;
                      stroke-dashoffset: 100;
                      animation: flowData 4s linear infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Network visualization */}
                  <div className="relative w-64 h-64">
                    {/* Nodes */}
                    <div className="absolute inset-0">
                      {/* Center node */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-rose-500 rounded-full network-node" />

                      {/* Outer nodes */}
                      <div
                        className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-rose-400 rounded-full network-node"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-rose-400 rounded-full network-node"
                        style={{ animationDelay: "1s" }}
                      />
                      <div
                        className="absolute top-1/2 left-4 -translate-y-1/2 w-6 h-6 bg-rose-400 rounded-full network-node"
                        style={{ animationDelay: "1.5s" }}
                      />
                      <div
                        className="absolute top-1/2 right-4 -translate-y-1/2 w-6 h-6 bg-rose-400 rounded-full network-node"
                        style={{ animationDelay: "2s" }}
                      />
                    </div>

                    {/* Connections */}
                    <svg className="absolute inset-0" viewBox="0 0 100 100">
                      {/* Center to top */}
                      <path
                        d="M 50,50 L 50,20"
                        className="flow-path"
                        stroke="#FB7185"
                        strokeWidth="2"
                        fill="none"
                      />
                      {/* Center to bottom */}
                      <path
                        d="M 50,50 L 50,80"
                        className="flow-path"
                        stroke="#FB7185"
                        strokeWidth="2"
                        fill="none"
                        style={{ animationDelay: "0.5s" }}
                      />
                      {/* Center to left */}
                      <path
                        d="M 50,50 L 20,50"
                        className="flow-path"
                        stroke="#FB7185"
                        strokeWidth="2"
                        fill="none"
                        style={{ animationDelay: "1s" }}
                      />
                      {/* Center to right */}
                      <path
                        d="M 50,50 L 80,50"
                        className="flow-path"
                        stroke="#FB7185"
                        strokeWidth="2"
                        fill="none"
                        style={{ animationDelay: "1.5s" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>

      {/* Section Break */}
      <div id="designs" className="col-span-full py-24 bg-black text-white">
        <div className="flex items-center justify-center gap-2 group">
          <h2 className="text-2xl font-bold text-white font-dm-sans leading-none">
            Designs
          </h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-opacity duration-200"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
        <p className="text-white text-center mt-2 font-avenir">
          Landmark achievements that changed the landscape of design.
        </p>
      </div>

      <div
        className={`${
          isListLayout
            ? "grid grid-cols-1 gap-6 max-w-4xl mx-auto px-4 py-8"
            : "col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-12"
        }`}
      >
        <DesignSection
          title="Boston Globe Redesign"
          description="The Boston Globe's 2011 responsive redesign, led by Ethan Marcotte and Filament Group, marked a pivotal moment in web design. As the first major news site to implement responsive design, it demonstrated how content could adapt seamlessly across devices while maintaining readability and hierarchy."
          designPrinciple="Responsive Design - Creating fluid layouts that adapt to any screen size while maintaining content integrity"
          exampleLink="https://zeldman.com/2011/09/15/boston-globes-responsive-redesign-discuss/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[600px] h-[400px]">
                <img
                  src="https://scholarlykitchen.sspnet.org/wp-content/uploads/2012/09/boston_globe_responsive_website.jpg"
                  alt="The Boston Globe responsive website design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          }
        />
        <DesignSection
          title="960 Grid System"
          description="The 960 Grid System, created by Nathan Smith, revolutionized web layout design in the late 2000s. This CSS framework provided a standardized 12-column grid that worked perfectly for 1024x768 displays, making it the de facto standard for web layouts during the fixed-width era. Its influence can still be seen in modern CSS frameworks."
          designPrinciple="Grid-Based Design - Creating consistent, balanced layouts through systematic column-based structures"
          exampleLink="https://ux.stackexchange.com/questions/5128/do-you-consider-the-960-grid-system-one-of-the-holy-grails-of-user-experienc"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[600px] h-[400px]">
                <img
                  src="/960grid.png"
                  alt="960 Grid System layout example"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          }
        />
        <DesignSection
          title="FedEx Logo"
          description="The FedEx logo, designed by Lindon Leader in 1994, is a masterclass in negative space design. The hidden arrow between the 'E' and 'x' represents forward movement and precision, perfectly aligning with FedEx's brand values. This subtle yet powerful design element has made it one of the most recognized and awarded logos in history."
          designPrinciple="Negative Space - Using the space between elements to create hidden meaning and visual interest"
          exampleLink="https://logo.com/blog/fedex-logo"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[600px] h-[400px]">
                <img
                  src="https://logo.com/image-cdn/images/kts928pd/production/545de9c62376e6a69379aae1703674d4b66e6962-1600x894.png?w=1080&q=72&fm=webp"
                  alt="FedEx logo with hidden arrow"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          }
        />
        <DesignSection
          title="Don't Make Me Think"
          description="Steve Krug's 'Don't Make Me Think' revolutionized web usability with its simple, practical approach. The book emphasizes that good design should be intuitive and self-explanatory, requiring minimal cognitive effort from users. Its principles of usability testing and clear navigation have become fundamental to modern web design."
          designPrinciple="Usability First - Creating interfaces that are intuitive and require minimal cognitive effort"
          exampleLink="https://www.sensible.com/dmmt.html"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[600px] h-[400px]">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D34AQFcBa3aJAHZCw/ugc-proxy-shrink_800/ugc-proxy-shrink_800/0/1594646636338?e=2147483647&v=beta&t=IFoQ7PyP6METIpbPTWMVbNQTcGxFx7ax5jmr2StTdhc"
                  alt="Don't Make Me Think book cover"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          }
        />
        <DesignSection
          title="European Heraldry"
          description="The world's first form of logo design, dating back to the 12th century. Heraldic symbols were used to identify knights in battle and evolved into sophisticated systems of visual identity for families, institutions, and nations. These designs established fundamental principles of visual communication that influence modern logo design."
          designPrinciple="Symbolism & Identity – Creating distinctive visual marks that communicate status, heritage, and values through carefully designed symbols and colors"
          exampleLink="https://www.heraldica.org/topics/design.htm"
          isListLayout={isListLayout}
          visualComponent={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[800px] h-[400px] bg-white overflow-hidden group relative">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wapenboek_Beyeren_%28armorial%29_-_KB79K21_-_folios_001v_%28left%29_and_002r_%28right%29.jpg/640px-Wapenboek_Beyeren_%28armorial%29_-_KB79K21_-_folios_001v_%28left%29_and_002r_%28right%29.jpg"
                  alt="European Heraldry - Hyghalmen Roll"
                  className="w-full h-full object-contain transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
        />
        <DesignSection
          title="Fallingwater"
          description="Fallingwater, designed by Frank Lloyd Wright in 1935, is a masterpiece of organic architecture that harmoniously integrates with its natural surroundings. The house appears to float above a waterfall, creating a seamless connection between built and natural environments."
          designPrinciple="Organic Architecture – Creating harmony between human habitation and the natural world."
          exampleLink="https://www.fallingwater.org/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[600px] h-[400px]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Fallingwater3.jpg"
                  alt="Fallingwater by Frank Lloyd Wright"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          }
        />
        <DesignSection
          title="The Dot Matrix Printer"
          description="The dot matrix printer revolutionized computer output in the 1970s and 1980s. Its design principle of using a matrix of pins to create characters through impact printing demonstrated how mechanical precision could create digital output. The distinctive sound and visual pattern of its printing process became iconic, showing how functional design can create memorable user experiences."
          designPrinciple="Functionality Meets Innovation"
          exampleLink="https://en.wikipedia.org/wiki/Dot_matrix_printing"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[600px] h-[400px]">
                <img
                  src="https://i.ytimg.com/vi/MikoF6KZjm0/maxresdefault.jpg"
                  alt="Dot Matrix Printer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          }
        />
        <DesignSection
          title="Scarfolk"
          description="Scarfolk is a fictional northwestern English town created by writer and designer Richard Littler. Through its distinctive visual language of public information posters and official documents, it creates a satirical critique of bureaucracy and social control. The design style draws from British public information campaigns of the 1970s, using stark typography and unsettling imagery to create a world that is both familiar and deeply unsettling."
          designPrinciple="Retro Design & Social Commentary"
          exampleLink="https://scarfolk.blogspot.com/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[800px] h-[400px] bg-white overflow-hidden group relative">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj86aEo7IxOTRss8qUMbprKclM9xQP77nKWKCG0ScSlzTarKrrSDpq5eDK6H_lWU1plS0KhxTNUkdc8DmuSzoQcOQjRL5uUfd9Yi-TMvQ1bWn8QXGYilvZSlqAdxOgysCWrsH923h4Hlatd/s1400/Scarfolk_map_cover.jpg"
                  alt="Scarfolk Map Cover"
                  className="w-full h-full object-contain transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
        />
        <DesignSection
          title="Negativland: U2"
          description="Negativland's controversial 1991 album 'U2' became a landmark case in copyright law and artistic freedom. The album cover, featuring a large 'U2' logo with a small 'Negativland' credit, was designed to critique media manipulation and corporate branding. The resulting legal battle with Island Records and U2's label became a seminal moment in discussions about fair use, artistic appropriation, and the boundaries of copyright law. Learn more about the case in their book Fair Use: The Story of the Letter U and the Numeral 2."
          designPrinciple="Media Critique & Copyright"
          exampleLink="https://negativland.com/products/013-negativland-fair-use-book"
          isListLayout={isListLayout}
          visualComponent={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[800px] h-[400px] bg-white overflow-hidden group relative">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5d33a1f97b99b80001812595/1564508368509-Q353DG1VKMVVKZIKYP7N/negativland_1991+by+Negativland_5.jpg"
                  alt="Negativland U2 Album Cover"
                  className="w-full h-full object-contain transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
        />
      </div>

      {/* Section Break */}
      <div id="designers" className="col-span-full py-24 bg-black text-white">
        <div className="flex items-center justify-center gap-2 group">
          <h2 className="text-2xl font-bold text-white font-dm-sans leading-none">
            Designers
          </h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-opacity duration-200"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
        <p className="text-white text-center mt-2 font-avenir">
          Meet the visionaries who have shaped the world of design
        </p>
      </div>

      <div
        className={`${
          isListLayout
            ? "grid grid-cols-1 gap-6 max-w-4xl mx-auto px-4 py-8"
            : "col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-12"
        }`}
      >
        <DesignSection
          title="Massimo Vignelli"
          description="Massimo Vignelli was an Italian designer who profoundly influenced American design through his modernist approach. His work in corporate identity, public signage, and typography established new standards for clarity and functionality in design."
          designPrinciple="Modernist Clarity through grid systems and typography"
          exampleLink="https://vignelli.com"
          isListLayout={isListLayout}
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
        />
                <DesignSection
          title="Carolyn Davidson"
          description="Carolyn Davidson is the graphic designer who created the iconic Nike Swoosh logo in 1971. Her simple yet powerful design has become one of the most recognizable brand symbols in the world, demonstrating how effective design can transcend its original purpose and become a cultural icon."
          designPrinciple="Simplicity and memorability through minimal design"
          exampleLink="https://www.nike.com"
          isListLayout={isListLayout}
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://www.nicekicks.com/files/2017/03/Carolyn-Davidson-.jpg"
                  alt="Carolyn Davidson"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
        />
        <DesignSection
          title="Saul Bass"
          description="Saul Bass was a legendary graphic designer and filmmaker known for his iconic movie title sequences and corporate logos. His work revolutionized the way we think about visual storytelling and brand identity, combining bold simplicity with powerful symbolism."
          designPrinciple="Visual storytelling through minimal, symbolic design"
          exampleLink="https://www.saulbassposterarchive.com"
          isListLayout={isListLayout}
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://cdn.thecollector.com/wp-content/uploads/2023/03/saul-blass-iconic-graphic-designer-and-filmmaker.jpg"
                  alt="Saul Bass"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
        />
        <DesignSection
          title="Raymond Pettibon"
          description="Raymond Pettibon is an influential artist known for his distinctive pen-and-ink drawings that blend punk aesthetics with literary and cultural references. His work, which began with album covers for Black Flag and other punk bands, has evolved into a complex visual language that challenges conventional narratives and explores themes of American culture, politics, and society."
          designPrinciple="Raw, expressive line work combined with subversive cultural commentary"
          exampleLink="https://www.davidzwirner.com/artists/raymond-pettibon"
          isListLayout={isListLayout}
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://www.vice.com/wp-content/uploads/sites/2/2017/02/1486652390153-IMG_4484.jpeg?resize=1024,683"
                  alt="Raymond Pettibon"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
        />
        <DesignSection
          title="Max Miedinger"
          description="Max Miedinger was a Swiss typeface designer best known for creating Helvetica in 1957. His work revolutionized typography and became one of the most widely used typefaces in the world. His design philosophy emphasized clarity, neutrality, and timelessness, principles that continue to influence modern typography."
          designPrinciple="Clarity and neutrality through precise typographic design"
          exampleLink="https://www.designandpaper.com/the-story-of-the-worlds-most-famous-font-helvetica/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://kingscliffgraphicdesign2017.wordpress.com/wp-content/uploads/2017/03/f94.png"
                  alt="Max Miedinger"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
        />
        <DesignSection
          title="Paula Scher"
          description="Paula Scher is a renowned graphic designer known for her bold, expressive typography and innovative approach to branding. As a partner at Pentagram, she has created iconic identities for major institutions and brands, demonstrating how typography can be both functional and emotionally resonant."
          designPrinciple="Expressive typography that balances form and function"
          exampleLink="https://www.pentagram.com/about/paula-scher"
          isListLayout={isListLayout}
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[500px] h-[300px] bg-white overflow-hidden group relative">
                <img
                  src="https://www.ucreative.com/wp-content/uploads/2014/11/51.jpg"
                  alt="Paula Scher"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          }
        />
      </div>
      <footer className="sticky bottom-0 py-2 bg-black z-50">
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
