import React, { useState } from "react";
import Header from "./components/Header";
import DesignSection from "./components/DesignSection";
import { ArrowUp, Info, Settings, Brain, Hand, Grid, List } from "lucide-react";

function App() {
  const [isListLayout, setIsListLayout] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <Header isListLayout={isListLayout} setIsListLayout={setIsListLayout} />
      {/* Section Break: Design */}
      <div className="w-full py-12 mt-16 bg-[#414141] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">DESIGN</h2>
          <p className="mt-1 text-sm text-gray-200">
            Fundamental principles that shape our visual world.
          </p>
        </div>
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
          description="Axonometric Projection creates a 3D space on a 2D surface using parallel lines and consistent angles. This technique maintains object proportions while providing depth and dimension."
          designPrinciple="Depth & Dimension – Creating 3D space through consistent angles and parallel lines."
          exampleLink="https://architizer.com/blog/inspiration/collections/axonometric/"
          exampleLabel="Architectural Drawings: 8 Masterful Parallel Projections"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full">
              <div className="w-full max-w-[600px] h-[400px] bg-white p-4 relative">
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
          description="Interwoven Space explores how elements can overlap and interact in 3D space, creating depth through layering and transparency. This technique adds complexity and visual interest while maintaining clarity."
          designPrinciple="Depth & Interaction – Creating visual interest through overlapping elements and transparency."
          exampleLink="https://www.metmuseum.org/essays/geometric-patterns-in-islamic-art"
          exampleLabel="Geometric Patterns in Islamic Art"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full">
              <div className="w-full max-w-[600px] h-[400px] bg-white p-4 relative">
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
          exampleLink="https://99designs.com/blog/tips/the-7-step-guide-to-understanding-color-theory/"
          exampleLabel="The 7 Step Guide to Understanding Color Theory"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-4">
              <div className="w-full max-w-[600px] h-[400px] bg-white p-4 relative">
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
          description="The Rule of Thirds divides the canvas into a 3x3 grid, creating natural focal points where the lines intersect. This technique helps create balanced, dynamic compositions that guide the viewer's eye."
          designPrinciple="Balance & Focus – Using grid intersections to create natural focal points."
          exampleLink="https://www.photographymad.com/pages/view/rule-of-thirds"
          exampleLabel="Photography Mad's guide to using the Rule of Thirds in photography"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full">
              <div className="w-full max-w-[600px] h-[400px] bg-white p-4 relative group">
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
          title="Observed Rhythm"
          description="Observed Rhythm creates visual patterns through repeated elements and coordinated movement. This technique uses timing, spacing, and variation to create a sense of flow and harmony."
          designPrinciple="Pattern & Flow – Creating visual harmony through coordinated movement and repetition."
          exampleLink="https://www.interaction-design.org/literature/article/repetition-pattern-and-rhythm"
          exampleLabel="Repetition, Pattern, and Rhythm - Interaction Design Foundation"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-4">
              <div className="w-full max-w-[600px] h-[400px] bg-white p-4 relative">
                <style>
                  {`
                    @keyframes wave {
                      0%, 100% { transform: translateY(0) scale(1); }
                      50% { transform: translateY(-15px) scale(1.05); }
                    }
                    @keyframes pulse {
                      0%, 100% { transform: scale(1); opacity: 0.7; }
                      50% { transform: scale(1.1); opacity: 1; }
                    }
                    .wave-element {
                      animation: wave 3s ease-in-out infinite;
                    }
                    .pulse-element {
                      animation: pulse 2s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Central element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-indigo-500/40 rounded-full pulse-element">
                        <div className="absolute inset-2 bg-indigo-400/60 rounded-full" />
                      </div>
                    </div>

                    {/* Orbiting elements */}
                    <div className="absolute inset-0">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-8 h-8 bg-indigo-300/40 rounded-full wave-element"
                          style={{
                            left: `${50 + 35 * Math.cos((i * Math.PI) / 2)}%`,
                            top: `${50 + 35 * Math.sin((i * Math.PI) / 2)}%`,
                            animationDelay: `${i * 0.5}s`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Pulsing border */}
                    <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full pulse-element" />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Ambiguous Scale"
          description="Ambiguous Scale plays with our perception of size and proportion, creating visual interest through uncertainty about true dimensions. This technique uses relative scale and context to create dynamic compositions."
          designPrinciple="Perception & Context – Using relative scale to create visual interest and uncertainty."
          exampleLink="https://www.microsoft.com/en-us/microsoft-365-life-hacks/presentations/scale-in-graphic-design"
          exampleLabel="Microsoft's guide to using scale and proportion in presentations"
          isListLayout={isListLayout}
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-4">
              <div className="w-full max-w-[600px] h-[400px] bg-white p-4 relative">
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
      </div>

      {/* Section Break: Designs */}
      <div className="w-full py-12 mt-16 bg-[#414141] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">DESIGNS</h2>
          <p className="mt-1 text-sm text-gray-200">
            Explore how these principles come together in complete designs.
          </p>
        </div>
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

      {/* Section Break: Designers */}
      <div className="w-full py-12 mt-16 bg-[#414141] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">DESIGNERS</h2>
          <p className="mt-1 text-sm text-gray-200">
            Meet the designers who bring these principles to life.
          </p>
        </div>
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
    </div>
  );
}

export default App;
