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
      <div
        id="design"
        className="col-span-full py-12 bg-black text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      >
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl font-bold text-white font-dm-sans leading-none">
            DESIGN
          </h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-opacity duration-200"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
        <p className="text-white text-center mt-1 font-avenir text-sm">
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
          title="Axonometric Projection"
          description="Axonometric Projection creates a 3D effect while maintaining parallel lines. This technique is commonly used in technical drawings and architectural visualizations to show depth without perspective distortion."
          designPrinciple="Parallel Projection – Maintaining consistent scale and parallel lines while creating depth."
          exampleLink="https://www.archdaily.com/897029/how-to-understand-axonometric-projection"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative">
                <style>
                  {`
                    @keyframes rotate3D {
                      0% { transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg); }
                      25% { transform: rotateX(20deg) rotateY(90deg) rotateZ(0deg); }
                      50% { transform: rotateX(20deg) rotateY(180deg) rotateZ(0deg); }
                      75% { transform: rotateX(20deg) rotateY(270deg) rotateZ(0deg); }
                      100% { transform: rotateX(20deg) rotateY(360deg) rotateZ(0deg); }
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0) scale(1); }
                      50% { transform: translateY(-10px) scale(1.05); }
                    }
                    @keyframes pulse {
                      0%, 100% { opacity: 0.6; }
                      50% { opacity: 1; }
                    }
                    .cube-container {
                      animation: rotate3D 20s linear infinite;
                      transform-style: preserve-3d;
                      perspective: 1000px;
                    }
                    .cube {
                      transform-style: preserve-3d;
                      transition: all 0.3s ease;
                    }
                    .cube-face {
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      backface-visibility: visible;
                    }
                    .floating-element {
                      animation: float 4s ease-in-out infinite;
                    }
                    .pulse-element {
                      animation: pulse 3s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Main cube */}
                    <div className="cube-container absolute inset-0">
                      <div className="cube w-32 h-32">
                        {/* Front face */}
                        <div
                          className="cube-face bg-blue-500/40"
                          style={{ transform: "translateZ(32px)" }}
                        />
                        {/* Back face */}
                        <div
                          className="cube-face bg-blue-500/40"
                          style={{
                            transform: "rotateY(180deg) translateZ(32px)",
                          }}
                        />
                        {/* Right face */}
                        <div
                          className="cube-face bg-blue-600/40"
                          style={{
                            transform: "rotateY(90deg) translateZ(32px)",
                          }}
                        />
                        {/* Left face */}
                        <div
                          className="cube-face bg-blue-600/40"
                          style={{
                            transform: "rotateY(-90deg) translateZ(32px)",
                          }}
                        />
                        {/* Top face */}
                        <div
                          className="cube-face bg-blue-700/40"
                          style={{
                            transform: "rotateX(90deg) translateZ(32px)",
                          }}
                        />
                        {/* Bottom face */}
                        <div
                          className="cube-face bg-blue-700/40"
                          style={{
                            transform: "rotateX(-90deg) translateZ(32px)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-1/4 left-1/4 floating-element">
                      <div className="w-8 h-8 bg-blue-400/60 rounded-lg pulse-element" />
                    </div>
                    <div
                      className="absolute top-1/4 right-1/4 floating-element"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="w-8 h-8 bg-blue-400/60 rounded-lg pulse-element" />
                    </div>
                    <div
                      className="absolute bottom-1/4 left-1/4 floating-element"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="w-8 h-8 bg-blue-400/60 rounded-lg pulse-element" />
                    </div>
                    <div
                      className="absolute bottom-1/4 right-1/4 floating-element"
                      style={{ animationDelay: "3s" }}
                    >
                      <div className="w-8 h-8 bg-blue-400/60 rounded-lg pulse-element" />
                    </div>

                    {/* Grid lines */}
                    <div className="absolute inset-0">
                      <div
                        className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-300/30"
                        style={{ transform: "rotateX(20deg)" }}
                      />
                      <div
                        className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-300/30"
                        style={{ transform: "rotateX(20deg)" }}
                      />
                      <div
                        className="absolute top-1/3 left-0 right-0 h-px bg-gray-300/30"
                        style={{ transform: "rotateY(20deg)" }}
                      />
                      <div
                        className="absolute top-2/3 left-0 right-0 h-px bg-gray-300/30"
                        style={{ transform: "rotateY(20deg)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Interwoven Space"
          description="Interwoven Space explores how elements can overlap and interact in three-dimensional space, creating depth and visual interest through layering and transparency."
          designPrinciple="Spatial Layering – Creating depth through overlapping elements and transparency."
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative">
                <style>
                  {`
                    @keyframes rotate3D {
                      0% { transform: rotateX(20deg) rotateY(0deg); }
                      100% { transform: rotateX(20deg) rotateY(360deg); }
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-10px); }
                    }
                    .interwoven-container {
                      animation: rotate3D 20s linear infinite;
                      transform-style: preserve-3d;
                      perspective: 1000px;
                    }
                    .interwoven-element {
                      transform-style: preserve-3d;
                      transition: all 0.3s ease;
                    }
                    .floating-element {
                      animation: float 4s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Main interwoven structure */}
                    <div className="interwoven-container absolute inset-0">
                      {/* First element */}
                      <div className="interwoven-element w-40 h-40 bg-purple-500/40 rounded-lg" />
                      {/* Second element (offset and rotated) */}
                      <div
                        className="interwoven-element w-40 h-40 bg-rose-500/40 rounded-lg absolute top-0 left-0"
                        style={{
                          transform: "translateX(20px) translateY(-20px)",
                        }}
                      />
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-1/4 left-1/4 floating-element">
                      <div className="w-8 h-8 bg-purple-400/60 rounded-lg" />
                    </div>
                    <div
                      className="absolute top-1/4 right-1/4 floating-element"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="w-8 h-8 bg-rose-400/60 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Basic Color Theory"
          description="Basic Color Theory explores how colors interact and affect each other. Understanding these relationships helps create harmonious color schemes and effective visual communication."
          designPrinciple="Color Harmony – Using color relationships to create balanced and pleasing compositions."
          exampleLink="https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative">
                <style>
                  {`
                    @keyframes blend {
                      0% { mix-blend-mode: normal; transform: scale(1) rotate(0deg); }
                      25% { mix-blend-mode: multiply; transform: scale(1.1) rotate(90deg); }
                      50% { mix-blend-mode: screen; transform: scale(1) rotate(180deg); }
                      75% { mix-blend-mode: overlay; transform: scale(1.1) rotate(270deg); }
                      100% { mix-blend-mode: normal; transform: scale(1) rotate(360deg); }
                    }
                    @keyframes float {
                      0%, 100% { transform: translate(0, 0) scale(1); }
                      25% { transform: translate(10px, -10px) scale(1.1); }
                      50% { transform: translate(0, -15px) scale(1); }
                      75% { transform: translate(-10px, -10px) scale(1.1); }
                    }
                    @keyframes pulse {
                      0% { transform: scale(1); opacity: 0.7; filter: blur(0px); }
                      50% { transform: scale(1.3); opacity: 1; filter: blur(1px); }
                      100% { transform: scale(1); opacity: 0.7; filter: blur(0px); }
                    }
                    @keyframes morph {
                      0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
                      50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
                      100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
                    }
                    .color-circle {
                      animation: blend 12s ease-in-out infinite, morph 8s ease-in-out infinite;
                      transition: all 0.3s ease;
                    }
                    .color-dot {
                      animation: float 6s ease-in-out infinite, pulse 4s ease-in-out infinite;
                    }
                    .center-blend {
                      animation: pulse 3s ease-in-out infinite, morph 6s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Cyan circle */}
                    <div className="absolute inset-0 color-circle bg-cyan-500/70" />

                    {/* Magenta circle */}
                    <div
                      className="absolute inset-0 color-circle bg-fuchsia-500/70"
                      style={{ animationDelay: "-6s" }}
                    />

                    {/* Color interaction points */}
                    <div className="absolute top-1/4 left-1/4 color-dot">
                      <div className="w-8 h-8 bg-cyan-400 rounded-full shadow-lg" />
                    </div>
                    <div
                      className="absolute top-1/4 right-1/4 color-dot"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="w-8 h-8 bg-fuchsia-400 rounded-full shadow-lg" />
                    </div>
                    <div
                      className="absolute bottom-1/4 left-1/4 color-dot"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="w-8 h-8 bg-cyan-300 rounded-full shadow-lg" />
                    </div>
                    <div
                      className="absolute bottom-1/4 right-1/4 color-dot"
                      style={{ animationDelay: "3s" }}
                    >
                      <div className="w-8 h-8 bg-fuchsia-300 rounded-full shadow-lg" />
                    </div>

                    {/* Center blend point */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-full center-blend shadow-lg" />
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
                      0%, 100% { opacity: 0.2; transform: scale(1); }
                      50% { opacity: 0.4; transform: scale(1.02); }
                    }
                    @keyframes highlightPoint {
                      0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.4; }
                      50% { transform: scale(1.5) rotate(180deg); opacity: 0.8; }
                    }
                    @keyframes moveElement {
                      0% { transform: translate(0, 0) rotate(0deg); }
                      25% { transform: translate(20px, -20px) rotate(90deg); }
                      50% { transform: translate(0, -30px) rotate(180deg); }
                      75% { transform: translate(-20px, -20px) rotate(270deg); }
                      100% { transform: translate(0, 0) rotate(360deg); }
                    }
                    @keyframes pulseElement {
                      0%, 100% { transform: scale(1); filter: brightness(1); }
                      50% { transform: scale(1.1); filter: brightness(1.2); }
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
                    .pulse-element {
                      animation: pulseElement 3s ease-in-out infinite;
                    }
                    .group:hover .grid-line {
                      animation-duration: 2s;
                    }
                    .group:hover .intersection-point {
                      animation-duration: 2s;
                    }
                    .group:hover .example-element {
                      animation-duration: 4s;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Grid lines */}
                  <div className="w-full h-full relative">
                    {/* Vertical lines */}
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-300 grid-line" />
                    <div className="absolute right-1/3 top-0 bottom-0 w-px bg-gray-300 grid-line" />
                    {/* Horizontal lines */}
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-300 grid-line" />
                    <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gray-300 grid-line" />

                    {/* Intersection points */}
                    <div className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500/40 rounded-full intersection-point" />
                    <div className="absolute right-1/3 top-1/3 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500/40 rounded-full intersection-point" />
                    <div className="absolute left-1/3 bottom-1/3 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-blue-500/40 rounded-full intersection-point" />
                    <div className="absolute right-1/3 bottom-1/3 translate-x-1/2 translate-y-1/2 w-4 h-4 bg-blue-500/40 rounded-full intersection-point" />

                    {/* Example elements */}
                    <div className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 example-element">
                      <div className="w-8 h-8 bg-red-500/60 rounded-lg pulse-element" />
                    </div>
                    <div
                      className="absolute right-1/3 top-1/3 translate-x-1/2 -translate-y-1/2 example-element"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="w-8 h-8 bg-green-500/60 rounded-lg pulse-element" />
                    </div>
                    <div
                      className="absolute left-1/3 bottom-1/3 -translate-x-1/2 translate-y-1/2 example-element"
                      style={{ animationDelay: "4s" }}
                    >
                      <div className="w-8 h-8 bg-purple-500/60 rounded-lg pulse-element" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <DesignSection
          title="Spatial Layers"
          description="Spatial Layers explores how elements can be arranged in three-dimensional space to create depth and hierarchy. This technique uses overlapping, transparency, and movement to create a sense of space and dimension."
          designPrinciple="Depth & Dimension – Creating visual hierarchy through layered elements in space."
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative">
                <style>
                  {`
                    @keyframes rotate3D {
                      0% { transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg); }
                      100% { transform: rotateX(20deg) rotateY(360deg) rotateZ(0deg); }
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0) translateZ(0); }
                      50% { transform: translateY(-20px) translateZ(50px); }
                    }
                    @keyframes pulse {
                      0%, 100% { transform: scale(1); opacity: 0.6; }
                      50% { transform: scale(1.1); opacity: 1; }
                    }
                    @keyframes morph {
                      0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
                      50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
                      100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
                    }
                    .layer-container {
                      animation: rotate3D 20s linear infinite;
                      transform-style: preserve-3d;
                      perspective: 1000px;
                    }
                    .layer {
                      transform-style: preserve-3d;
                      transition: all 0.3s ease;
                    }
                    .float-element {
                      animation: float 6s ease-in-out infinite;
                    }
                    .morph-element {
                      animation: morph 8s ease-in-out infinite;
                    }
                    .pulse-element {
                      animation: pulse 4s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Main container with 3D rotation */}
                    <div className="layer-container absolute inset-0">
                      {/* Background layer */}
                      <div className="layer absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-500/20 rounded-lg morph-element" />
                        <div
                          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-violet-500/20 rounded-lg morph-element"
                          style={{ animationDelay: "1s" }}
                        />
                      </div>

                      {/* Middle layer */}
                      <div
                        className="layer absolute inset-0"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-violet-400/40 rounded-lg float-element" />
                        <div
                          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-violet-400/40 rounded-lg float-element"
                          style={{ animationDelay: "2s" }}
                        />
                      </div>

                      {/* Foreground layer */}
                      <div
                        className="layer absolute inset-0"
                        style={{ transform: "translateZ(60px)" }}
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-violet-300/60 rounded-lg pulse-element" />
                      </div>

                      {/* Floating elements */}
                      <div
                        className="layer absolute inset-0"
                        style={{ transform: "translateZ(45px)" }}
                      >
                        <div
                          className="absolute top-1/4 right-1/4 w-8 h-8 bg-violet-200/80 rounded-full float-element"
                          style={{ animationDelay: "1s" }}
                        />
                        <div
                          className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-violet-200/80 rounded-full float-element"
                          style={{ animationDelay: "2s" }}
                        />
                        <div
                          className="absolute top-3/4 left-1/4 w-8 h-8 bg-violet-200/80 rounded-full float-element"
                          style={{ animationDelay: "3s" }}
                        />
                        <div
                          className="absolute top-1/4 left-3/4 w-8 h-8 bg-violet-200/80 rounded-full float-element"
                          style={{ animationDelay: "4s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Observed Rhythm"
          description="Observed Rhythm explores how visual elements can create a sense of movement and flow through repeated patterns and synchronized animations. This technique uses timing, spacing, and coordinated motion to create a harmonious visual experience."
          designPrinciple="Flow & Harmony – Creating visual rhythm through coordinated movement and patterns."
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative">
                <style>
                  {`
                    @keyframes wave {
                      0%, 100% { transform: translateY(0) scale(1); }
                      50% { transform: translateY(-20px) scale(1.1); }
                    }
                    @keyframes pulse {
                      0%, 100% { transform: scale(1); opacity: 0.6; }
                      50% { transform: scale(1.2); opacity: 1; }
                    }
                    @keyframes rotate {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                    @keyframes flow {
                      0% { transform: translateX(-100%) translateY(0); }
                      50% { transform: translateX(0) translateY(-20px); }
                      100% { transform: translateX(100%) translateY(0); }
                    }
                    @keyframes orbit {
                      0% { transform: translate(0, 0) rotate(0deg); }
                      25% { transform: translate(20px, -20px) rotate(-90deg); }
                      50% { transform: translate(0, -40px) rotate(-180deg); }
                      75% { transform: translate(-20px, -20px) rotate(-270deg); }
                      100% { transform: translate(0, 0) rotate(-360deg); }
                    }
                    .wave-element {
                      animation: wave 3s ease-in-out infinite;
                    }
                    .pulse-element {
                      animation: pulse 2s ease-in-out infinite;
                    }
                    .rotate-element {
                      animation: rotate 8s linear infinite;
                    }
                    .flow-element {
                      animation: flow 4s ease-in-out infinite;
                    }
                    .orbit-element {
                      animation: orbit 6s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-96 h-96">
                    {/* Central rotating element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-indigo-500/40 rounded-full orbit-element">
                        <div className="absolute inset-3 bg-fuchsia-400/60 rounded-full pulse-element" />
                      </div>
                    </div>

                    {/* Orbiting elements */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-12 h-12 rounded-full wave-element"
                          style={{
                            left: `${50 + 45 * Math.cos((i * Math.PI) / 3)}%`,
                            top: `${50 + 45 * Math.sin((i * Math.PI) / 3)}%`,
                            animationDelay: `${i * 0.5}s`,
                            backgroundColor: `rgba(${
                              i % 2 === 0 ? "99, 102, 241" : "236, 72, 153"
                            }, 0.4)`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Flowing elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-16 h-16 rounded-lg flow-element"
                          style={{
                            top: `${30 + i * 20}%`,
                            animationDelay: `${i * 1.5}s`,
                            backgroundColor: `rgba(${
                              i === 0
                                ? "234, 179, 8"
                                : i === 1
                                ? "34, 197, 94"
                                : "239, 68, 68"
                            }, 0.3)`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Pulsing border */}
                    <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full pulse-element" />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Ambiguous Scale"
          description="Ambiguous Scale plays with our perception of size by creating relationships between elements that make their true scale unclear. This technique uses context and relative positioning to create visual interest and challenge our assumptions about size."
          designPrinciple="Relative Scale – Creating uncertainty about true size through contextual relationships."
          exampleLink="https://www.microsoft.com/en-us/microsoft-365-life-hacks/presentations/scale-in-graphic-design"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative">
                <style>
                  {`
                    @keyframes scaleShift {
                      0% { transform: scale(1) translateY(0); }
                      25% { transform: scale(1.2) translateY(-10px); }
                      50% { transform: scale(1) translateY(0); }
                      75% { transform: scale(0.8) translateY(10px); }
                      100% { transform: scale(1) translateY(0); }
                    }
                    @keyframes rotate3D {
                      0% { transform: rotateX(20deg) rotateY(0deg); }
                      100% { transform: rotateX(20deg) rotateY(360deg); }
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-10px); }
                    }
                    .scale-container {
                      animation: rotate3D 20s linear infinite;
                      transform-style: preserve-3d;
                      perspective: 1000px;
                    }
                    .scale-element {
                      transform-style: preserve-3d;
                      transition: all 0.3s ease;
                    }
                    .floating-element {
                      animation: float 4s ease-in-out infinite;
                    }
                    .scale-shift {
                      animation: scaleShift 8s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Main scale structure */}
                    <div className="scale-container absolute inset-0">
                      {/* Large reference square */}
                      <div className="scale-element w-48 h-48 bg-emerald-500/20 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                      {/* Medium square that appears to change size */}
                      <div className="scale-element w-32 h-32 bg-emerald-500/40 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-shift" />

                      {/* Small squares that provide context */}
                      <div className="scale-element w-16 h-16 bg-emerald-500/60 rounded-lg absolute top-1/4 left-1/4 floating-element" />
                      <div
                        className="scale-element w-16 h-16 bg-emerald-500/60 rounded-lg absolute top-1/4 right-1/4 floating-element"
                        style={{ animationDelay: "2s" }}
                      />
                      <div
                        className="scale-element w-16 h-16 bg-emerald-500/60 rounded-lg absolute bottom-1/4 left-1/4 floating-element"
                        style={{ animationDelay: "1s" }}
                      />
                      <div
                        className="scale-element w-16 h-16 bg-emerald-500/60 rounded-lg absolute bottom-1/4 right-1/4 floating-element"
                        style={{ animationDelay: "3s" }}
                      />
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
                      0% { transform: translate(0, 0) scale(1); }
                      25% { transform: translate(10px, -10px) scale(1.1); }
                      50% { transform: translate(0, 0) scale(1); }
                      75% { transform: translate(-10px, 10px) scale(0.9); }
                      100% { transform: translate(0, 0) scale(1); }
                    }
                    @keyframes separateMove {
                      0% { transform: translate(0, 0) scale(1); }
                      25% { transform: translate(-15px, -15px) scale(0.9); }
                      50% { transform: translate(0, 0) scale(1); }
                      75% { transform: translate(15px, 15px) scale(1.1); }
                      100% { transform: translate(0, 0) scale(1); }
                    }
                    @keyframes pulseGroup {
                      0%, 100% { opacity: 0.7; }
                      50% { opacity: 1; }
                    }
                    @keyframes connectLine {
                      0% { stroke-dashoffset: 100; }
                      100% { stroke-dashoffset: 0; }
                    }
                    .group-animation {
                      animation: groupMove 4s ease-in-out infinite;
                    }
                    .separate-animation {
                      animation: separateMove 4s ease-in-out infinite;
                    }
                    .pulse-group {
                      animation: pulseGroup 3s ease-in-out infinite;
                    }
                    .connect-line {
                      stroke-dasharray: 10;
                      animation: connectLine 2s linear infinite;
                    }
                    .group:hover .group-animation {
                      animation-duration: 2s;
                    }
                    .group:hover .separate-animation {
                      animation-duration: 2s;
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
                            className="w-8 h-8 bg-blue-500/80 rounded-lg pulse-group"
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
                            className="w-8 h-8 bg-rose-500/80 rounded-lg pulse-group"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0" viewBox="0 0 100 100">
                      {/* Lines connecting grouped elements */}
                      <path
                        d="M 20,20 L 20,40 L 40,40 L 40,20 Z"
                        className="connect-line"
                        stroke="#3B82F6"
                        strokeWidth="1"
                        fill="none"
                      />
                      {/* Lines connecting separated elements */}
                      <path
                        d="M 60,60 L 60,80 L 80,80 L 80,60 Z"
                        className="connect-line"
                        stroke="#FB7185"
                        strokeWidth="1"
                        fill="none"
                        style={{ animationDelay: "1s" }}
                      />
                    </svg>

                    {/* Center connecting element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-gray-400/60 rounded-full pulse-group" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <DesignSection
          title="Designing Networks"
          description="Designing Networks explores how elements can be connected to create meaningful relationships and patterns. This technique uses nodes and links to visualize connections, hierarchies, and flows in a system."
          designPrinciple="Connection & Flow – Creating visual relationships between elements to show structure and interaction."
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-[600px] h-[300px] bg-white p-4 relative">
                <style>
                  {`
                    @keyframes orbit {
                      0% { transform: translate(0, 0) rotate(0deg); }
                      25% { transform: translate(20px, -20px) rotate(-90deg); }
                      50% { transform: translate(0, -40px) rotate(-180deg); }
                      75% { transform: translate(-20px, -20px) rotate(-270deg); }
                      100% { transform: translate(0, 0) rotate(-360deg); }
                    }
                    @keyframes pulse {
                      0%, 100% { transform: scale(1); opacity: 0.6; }
                      50% { transform: scale(1.2); opacity: 1; }
                    }
                    @keyframes drawLine {
                      0% { stroke-dashoffset: 1000; }
                      100% { stroke-dashoffset: 0; }
                    }
                    .orbit-element {
                      animation: orbit 20s linear infinite;
                    }
                    .orbit-element:nth-child(2) {
                      animation-delay: -5s;
                    }
                    .orbit-element:nth-child(3) {
                      animation-delay: -10s;
                    }
                    .orbit-element:nth-child(4) {
                      animation-delay: -15s;
                    }
                    .pulse-element {
                      animation: pulse 3s ease-in-out infinite;
                    }
                    .connection {
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                      animation: drawLine 3s linear forwards;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Center hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-indigo-600/60 rounded-full pulse-element" />
                    </div>

                    {/* Orbiting elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="orbit-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 bg-indigo-400/60 rounded-full pulse-element" />
                      </div>
                      <div className="orbit-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 bg-indigo-400/60 rounded-full pulse-element" />
                      </div>
                      <div className="orbit-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 bg-indigo-400/60 rounded-full pulse-element" />
                      </div>
                      <div className="orbit-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 bg-indigo-400/60 rounded-full pulse-element" />
                      </div>
                    </div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0" viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r="60"
                        fill="none"
                        stroke="#818CF8"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="connection"
                        style={{ opacity: 0.3 }}
                      />
                      <line
                        x1="100"
                        y1="100"
                        x2="160"
                        y2="100"
                        className="connection stroke-indigo-400/40"
                        strokeWidth="2"
                      />
                      <line
                        x1="100"
                        y1="100"
                        x2="40"
                        y2="100"
                        className="connection stroke-indigo-400/40"
                        strokeWidth="2"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <line
                        x1="100"
                        y1="100"
                        x2="100"
                        y2="40"
                        className="connection stroke-indigo-400/40"
                        strokeWidth="2"
                        style={{ animationDelay: "1s" }}
                      />
                      <line
                        x1="100"
                        y1="100"
                        x2="100"
                        y2="160"
                        className="connection stroke-indigo-400/40"
                        strokeWidth="2"
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
      <div
        id="designs"
        className="col-span-full py-12 bg-black text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      >
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl font-bold text-white font-dm-sans leading-none">
            DESIGNS
          </h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-opacity duration-200"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
        <p className="text-white text-center mt-1 font-avenir text-sm">
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
      <div
        id="designers"
        className="col-span-full py-12 bg-black text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      >
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl font-bold text-white font-dm-sans leading-none">
            DESIGNERS
          </h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-opacity duration-200"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
        <p className="text-white text-center mt-1 font-avenir text-sm">
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
