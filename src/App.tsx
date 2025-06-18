import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DesignSection from "./components/DesignSection";
import {
  ArrowUp,
  Info,
  Settings,
  Brain,
  Hand,
  Grid,
  List,
  ArrowDown,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

function App() {
  const [isListLayout, setIsListLayout] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setShowScrollTop(scrollTop > 100);
      setShowScrollBottom(scrollTop + clientHeight < scrollHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen w-full">
      <Header isListLayout={isListLayout} setIsListLayout={setIsListLayout} />
      {/* Section Break: Design */}
      <div
        id="design"
        className="w-full py-12 mt-16 bg-[#414141] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      >
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
            : "col-span-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-8 gap-6"
        }`}
      >
        <DesignSection
          title="Axonometric Projection"
          description="Axonometric Projection creates a 3D space on a 2D surface using parallel lines and consistent angles. This technique maintains object proportions while providing depth and dimension."
          designPrinciple="Depth & Dimension – Creating 3D space through consistent angles and parallel lines."
          exampleLink="https://architizer.com/blog/inspiration/collections/axonometric/"
          exampleLabel="Architectural Drawings: 8 Masterful Parallel Projections"
          visualComponent={
            <div className="flex items-center justify-center w-full">
              <div className="w-full max-w-[600px] h-[250px] bg-white px-4 pt-4 relative">
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
                      0% { transform: translate(0, 0); }
                      25% { transform: translate(10px, 0); }
                      50% { transform: translate(10px, -10px); }
                      75% { transform: translate(0, -10px); }
                      100% { transform: translate(0, 0); }
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
          visualComponent={
            <div className="flex items-center justify-center w-full">
              <div className="w-full max-w-[600px] h-[250px] bg-white px-4 pt-4 relative">
                <style>
                  {`
                    @keyframes rotate3D {
                      0% { transform: rotateX(20deg) rotateY(0deg); }
                      100% { transform: rotateX(20deg) rotateY(360deg); }
                    }
                    @keyframes float {
                      0% { transform: translate(0, 0); }
                      25% { transform: translate(10px, 0); }
                      50% { transform: translate(10px, -10px); }
                      75% { transform: translate(0, -10px); }
                      100% { transform: translate(0, 0); }
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
          description="Basic Color Theory explores the fundamental relationships between colors. This technique uses primary colors and their interactions to create visual harmony and meaning."
          designPrinciple="Harmony & Contrast – Creating visual interest through color relationships and interactions."
          exampleLink="https://www.interaction-design.org/literature/topics/color-theory"
          exampleLabel="Color Theory - Interaction Design Foundation"
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-4">
              <div className="w-full max-w-[600px] h-[250px] bg-white px-4 pt-4 relative">
                <style>
                  {`
                    @keyframes orbit {
                      0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
                      100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
                    }
                    @keyframes blend {
                      0% { background-color: rgba(0, 255, 255, 0.4); } /* Cyan */
                      33% { background-color: rgba(255, 0, 255, 0.4); } /* Magenta */
                      66% { background-color: rgba(255, 255, 0, 0.4); } /* Yellow */
                      100% { background-color: rgba(0, 255, 255, 0.4); } /* Cyan */
                    }
                    .orbit-element {
                      animation: orbit 8s linear infinite;
                    }
                    .blend-element {
                      animation: blend 6s linear infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central blending element */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 rounded-full blend-element">
                      <div className="absolute inset-4 rounded-full bg-white/50" />
                    </div>
                  </div>

                  {/* Orbiting CMYK colors */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="orbit-element"
                      style={{ animationDuration: "8s" }}
                    >
                      <div className="w-16 h-16 bg-cyan-500/40 rounded-full" />
                    </div>
                    <div
                      className="orbit-element"
                      style={{
                        animationDuration: "8s",
                        animationDelay: "-2.67s",
                      }}
                    >
                      <div className="w-16 h-16 bg-fuchsia-500/40 rounded-full" />
                    </div>
                    <div
                      className="orbit-element"
                      style={{
                        animationDuration: "8s",
                        animationDelay: "-5.33s",
                      }}
                    >
                      <div className="w-16 h-16 bg-yellow-500/40 rounded-full" />
                    </div>
                  </div>

                  {/* Connecting lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ pointerEvents: "none" }}
                  >
                    <circle
                      cx="50%"
                      cy="50%"
                      r="60"
                      className="stroke-gray-200"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="120"
                      className="stroke-gray-200"
                      strokeWidth="1"
                      fill="none"
                    />
                    <line
                      x1="25%"
                      y1="25%"
                      x2="75%"
                      y2="75%"
                      className="stroke-gray-200"
                      strokeWidth="1"
                    />
                    <line
                      x1="25%"
                      y1="75%"
                      x2="75%"
                      y2="25%"
                      className="stroke-gray-200"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Rule of Thirds"
          description="The Rule of Thirds divides the canvas into a 3x3 grid, creating natural focal points where the lines intersect. This technique creates balanced, dynamic compositions."
          designPrinciple="Balance & Focus – Using grid intersections to create natural focal points."
          exampleLink="https://www.photographymad.com/pages/view/rule-of-thirds"
          exampleLabel="Photography Mad's guide to using the Rule of Thirds in photography"
          visualComponent={
            <div className="flex items-center justify-center w-full">
              <div className="w-full max-w-[600px] h-[250px] bg-white px-4 pt-4 relative group">
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
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-8">
              <div className="w-full max-w-[600px] h-[250px] bg-white px-4 pt-0 relative">
                <style>
                  {`
                    @keyframes pulse {
                      0%, 100% { transform: scale(1); opacity: 0.7; }
                      50% { transform: scale(1.2); opacity: 1; }
                    }
                    @keyframes rotate {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    @keyframes wave {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-20px); }
                    }
                    @keyframes slide {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(100%); }
                    }
                    .pulse-element {
                      animation: pulse 2s ease-in-out infinite;
                    }
                    .rotate-element {
                      animation: rotate 8s linear infinite;
                    }
                    .wave-element {
                      animation: wave 3s ease-in-out infinite;
                    }
                    .slide-element {
                      animation: slide 4s linear infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Orbiting elements */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-element"
                    style={{ animationDuration: "12s" }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                      <div
                        className="w-8 h-8 bg-blue-500/40 rounded-lg pulse-element"
                        style={{ animationDelay: "0s" }}
                      />
                    </div>
                    <div className="absolute top-1/2 -right-8 -translate-y-1/2">
                      <div
                        className="w-8 h-8 bg-green-500/40 rounded-lg pulse-element"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                      <div
                        className="w-8 h-8 bg-yellow-500/40 rounded-lg pulse-element"
                        style={{ animationDelay: "1s" }}
                      />
                    </div>
                    <div className="absolute top-1/2 -left-8 -translate-y-1/2">
                      <div
                        className="w-8 h-8 bg-red-500/40 rounded-lg pulse-element"
                        style={{ animationDelay: "1.5s" }}
                      />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute inset-0">
                    <div
                      className="absolute top-1/4 left-1/4 wave-element"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <div className="w-6 h-6 bg-cyan-500/40 rounded-full" />
                    </div>
                    <div
                      className="absolute top-1/4 right-1/4 wave-element"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <div className="w-6 h-6 bg-orange-500/40 rounded-full" />
                    </div>
                    <div
                      className="absolute bottom-1/4 left-1/4 wave-element"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <div className="w-6 h-6 bg-emerald-500/40 rounded-full" />
                    </div>
                    <div
                      className="absolute bottom-1/4 right-1/4 wave-element"
                      style={{ animationDelay: "0.8s" }}
                    >
                      <div className="w-6 h-6 bg-violet-500/40 rounded-full" />
                    </div>
                  </div>

                  {/* Sliding elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/3 left-0 slide-element">
                      <div className="w-4 h-4 bg-rose-500/30 rounded-full" />
                    </div>
                    <div
                      className="absolute top-2/3 left-0 slide-element"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="w-4 h-4 bg-indigo-500/30 rounded-full" />
                    </div>
                  </div>

                  {/* Connecting lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ pointerEvents: "none" }}
                  >
                    <line
                      x1="25%"
                      y1="25%"
                      x2="75%"
                      y2="25%"
                      className="stroke-indigo-200"
                      strokeWidth="1"
                      strokeDasharray="4"
                    />
                    <line
                      x1="25%"
                      y1="75%"
                      x2="75%"
                      y2="75%"
                      className="stroke-indigo-200"
                      strokeWidth="1"
                      strokeDasharray="4"
                    />
                    <line
                      x1="25%"
                      y1="25%"
                      x2="25%"
                      y2="75%"
                      className="stroke-indigo-200"
                      strokeWidth="1"
                      strokeDasharray="4"
                    />
                    <line
                      x1="75%"
                      y1="25%"
                      x2="75%"
                      y2="75%"
                      className="stroke-indigo-200"
                      strokeWidth="1"
                      strokeDasharray="4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Ambiguous Scale"
          description="Ambiguous Scale plays with our perception of size and proportion, creating visual interest through uncertainty about true dimensions. Relative scale and context to creates dynamic compositions."
          designPrinciple="Perception & Context – Using relative scale to create visual interest and uncertainty."
          exampleLink="https://www.microsoft.com/en-us/microsoft-365-life-hacks/presentations/scale-in-graphic-design"
          exampleLabel="Microsoft's guide to using scale and proportion in presentations"
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-8">
              <div className="w-full max-w-[600px] h-[250px] bg-white px-4 pt-0 relative">
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
                      0% { transform: translate(0, 0); }
                      25% { transform: translate(10px, 0); }
                      50% { transform: translate(10px, -10px); }
                      75% { transform: translate(0, -10px); }
                      100% { transform: translate(0, 0); }
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
                  <div className="relative w-48 h-48">
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
          title="Negative Space"
          description="Negative Space focuses on the areas around and between the main elements in a composition. By deliberately using or omitting detail in these spaces, you can highlight, simplify, or add depth to your composition."
          designPrinciple="Balance & Focus – Using empty space to define and enhance the main elements."
          exampleLink="https://www.interaction-design.org/literature/topics/negative-space"
          exampleLabel="Negative Space in Design - Interaction Design Foundation"
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-8">
              <div className="w-full max-w-[600px] h-[250px] bg-white px-4 pt-0 relative">
                <style>
                  {`
                    @keyframes float {
                      0% { transform: translate(0, 0); }
                      25% { transform: translate(10px, 0); }
                      50% { transform: translate(10px, -10px); }
                      75% { transform: translate(0, -10px); }
                      100% { transform: translate(0, 0); }
                    }
                    @keyframes reveal {
                      0% { opacity: 0; transform: scale(0.8); }
                      50% { opacity: 1; transform: scale(1); }
                      100% { opacity: 0; transform: scale(0.8); }
                    }
                    @keyframes highlight {
                      0% { background-color: rgba(0, 0, 0, 0.1); transform: scale(1); }
                      50% { background-color: rgba(0, 0, 0, 0.2); transform: scale(1.1); }
                      100% { background-color: rgba(0, 0, 0, 0.1); transform: scale(1); }
                    }
                    .reveal-element {
                      animation: reveal 6s ease-in-out infinite;
                    }
                    .highlight-space {
                      animation: highlight 4s ease-in-out infinite;
                    }
                    .float-element {
                      animation: float 8s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[min(80%,_12rem)] h-[min(80%,_12rem)]">
                    {/* Main composition */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Background shape */}
                      <div className="w-[min(100%,_10rem)] h-[min(100%,_10rem)] bg-black/5 rounded-lg float-element" />

                      {/* Positive space elements */}
                      <div
                        className="absolute top-[10%] left-[10%] w-[min(40%,_4rem)] h-[min(40%,_4rem)] bg-black/20 rounded-lg float-element"
                        style={{ animationDelay: "1s" }}
                      />
                      <div
                        className="absolute bottom-[10%] right-[10%] w-[min(40%,_4rem)] h-[min(40%,_4rem)] bg-black/20 rounded-lg float-element"
                        style={{ animationDelay: "2s" }}
                      />

                      {/* Negative space highlight */}
                      <div className="absolute inset-0 highlight-space rounded-lg" />

                      {/* Revealing elements */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 reveal-element">
                        <div className="w-[min(60%,_6rem)] h-[min(60%,_6rem)] bg-white rounded-lg" />
                      </div>
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 reveal-element"
                        style={{ animationDelay: "3s" }}
                      >
                        <div className="w-[min(80%,_8rem)] h-[min(80%,_8rem)] bg-white rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Golden Ratio"
          description="The Golden Ratio (φ ≈ 1.618) is a mathematical proportion found throughout nature and art. When applied to design, it creates harmonious compositions that feel naturally balanced and aesthetically pleasing."
          designPrinciple="Harmony & Proportion – Using mathematical relationships to create naturally pleasing compositions."
          exampleLink="https://www.interaction-design.org/literature/article/the-golden-ratio-principles-of-form-and-layout"
          exampleLabel="Golden Ratio in Design - Interaction Design Foundation"
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-8">
              <div className="w-full max-w-[600px] h-[250px] bg-white px-4 pt-0 relative">
                <style>
                  {`
                    @keyframes rotate {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                    @keyframes scale {
                      0%, 100% { transform: scale(1); }
                      50% { transform: scale(1.1); }
                    }
                    @keyframes fade {
                      0%, 100% { opacity: 0.3; }
                      50% { opacity: 0.8; }
                    }
                    .rotate-element {
                      animation: rotate 20s linear infinite;
                      transform-origin: center;
                    }
                    .scale-element {
                      animation: scale 4s ease-in-out infinite;
                    }
                    .fade-element {
                      animation: fade 3s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[min(90%,_16rem)] h-[min(90%,_16rem)]">
                    {/* Outer golden rectangle */}
                    <div className="absolute inset-0 border-2 border-amber-400/40 rounded-lg fade-element" />

                    {/* Rotating golden spiral */}
                    <div className="absolute inset-0 rotate-element">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <path
                          d="M 50,50 L 50,30 A 20,20 0 0 1 70,50 L 50,50 A 20,20 0 0 1 50,30 A 12,12 0 0 1 62,42 L 50,50 A 12,12 0 0 1 50,38 A 7,7 0 0 1 57,45 L 50,50 A 7,7 0 0 1 50,43 A 4,4 0 0 1 54,47 L 50,50 A 4,4 0 0 1 50,46 A 2,2 0 0 1 52,48 L 50,50"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="1"
                          className="fade-element"
                        />
                      </svg>
                    </div>

                    {/* Nested golden rectangles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[61.8%] h-[100%] border border-amber-300/40 scale-element" />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38.2%] h-[61.8%] border border-amber-300/40 scale-element"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[23.6%] h-[38.2%] border border-amber-300/40 scale-element"
                      style={{ animationDelay: "1s" }}
                    />

                    {/* Golden ratio points */}
                    <div className="absolute top-1/2 left-[38.2%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400/60 rounded-full scale-element" />
                    <div
                      className="absolute top-1/2 left-[61.8%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400/60 rounded-full scale-element"
                      style={{ animationDelay: "0.5s" }}
                    />

                    {/* Connecting lines */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      style={{ pointerEvents: "none" }}
                    >
                      <line
                        x1="38.2%"
                        y1="0"
                        x2="38.2%"
                        y2="100%"
                        className="stroke-amber-200"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="61.8%"
                        y1="0"
                        x2="61.8%"
                        y2="100%"
                        className="stroke-amber-200"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        className="stroke-amber-200"
                        strokeWidth="0.5"
                        fill="none"
                      />
                    </svg>

                    {/* Phi symbol */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400/80 text-2xl font-serif scale-element">
                      φ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>

      {/* Section Break: Designs */}
      <div
        id="designs"
        className="w-full py-12 mt-16 bg-[#414141] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      >
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
            : "col-span-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-8 gap-6"
        }`}
      >
        <DesignSection
          title="Boston Globe Redesign"
          description="Ethan Marcotte and Filament Group's 2011 redesign pioneered responsive web design for news sites, showing how content could adapt across devices while preserving readability and hierarchy."
          designPrinciple="Responsive Design - Creating fluid layouts that adapt to any screen size while maintaining content integrity"
          exampleLink="https://zeldman.com/2011/09/15/boston-globes-responsive-redesign-discuss/"
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[450px] h-[280px] pb-8">
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
          title="Typesetting"
          description="Johannes Gutenberg's 1440s invention of movable type revolutionized information sharing. Its mechanical precision and systematic arrangement laid the groundwork for modern typography."
          designPrinciple="Precision & Standardization – Creating consistent, reproducible text layouts through systematic arrangement."
          exampleLink="https://www.interaction-design.org/literature/topics/color-theory"
          exampleLabel="Color Theory - Interaction Design Foundation"
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[450px] h-[280px] pb-8">
                <style>
                  {`
                    @keyframes slideIn {
                      0% { transform: translateX(-100%); opacity: 0; }
                      100% { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes dropIn {
                      0% { transform: translateY(-20px); opacity: 0; }
                      100% { transform: translateY(0); opacity: 1; }
                    }
                    @keyframes highlight {
                      0%, 100% { fill: #6B7280; }
                      50% { fill: #374151; }
                    }
                    .slide-in {
                      animation: slideIn 4s ease-out forwards infinite;
                      animation-direction: alternate;
                    }
                    .drop-in {
                      animation: dropIn 4s ease-out forwards infinite;
                      animation-direction: alternate;
                    }
                    .highlight {
                      animation: highlight 12s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="w-full h-full flex items-center justify-center bg-white">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Type case (storage for letters) */}
                    <rect
                      x="5"
                      y="10"
                      width="20"
                      height="80"
                      fill="#E5E7EB"
                      className="slide-in"
                    />

                    {/* Individual type blocks */}
                    <g className="drop-in" style={{ animationDelay: "1.6s" }}>
                      <rect
                        x="8"
                        y="15"
                        width="14"
                        height="14"
                        fill="#6B7280"
                      />
                      <text
                        x="15"
                        y="25"
                        textAnchor="middle"
                        fill="white"
                        style={{ fontSize: "8px" }}
                      >
                        A
                      </text>
                    </g>
                    <g className="drop-in" style={{ animationDelay: "3.2s" }}>
                      <rect
                        x="8"
                        y="32"
                        width="14"
                        height="14"
                        fill="#6B7280"
                      />
                      <text
                        x="15"
                        y="42"
                        textAnchor="middle"
                        fill="white"
                        style={{ fontSize: "8px" }}
                      >
                        B
                      </text>
                    </g>
                    <g className="drop-in" style={{ animationDelay: "4.8s" }}>
                      <rect
                        x="8"
                        y="49"
                        width="14"
                        height="14"
                        fill="#6B7280"
                      />
                      <text
                        x="15"
                        y="59"
                        textAnchor="middle"
                        fill="white"
                        style={{ fontSize: "8px" }}
                      >
                        C
                      </text>
                    </g>

                    {/* Composing stick (where text is arranged) */}
                    <rect
                      x="35"
                      y="40"
                      width="60"
                      height="20"
                      fill="#F3F4F6"
                      className="slide-in"
                      style={{ animationDelay: "6.4s" }}
                    />

                    {/* Arranged type blocks */}
                    <g className="slide-in" style={{ animationDelay: "8s" }}>
                      <rect
                        x="40"
                        y="45"
                        width="8"
                        height="10"
                        fill="#6B7280"
                        className="highlight"
                      />
                      <text
                        x="44"
                        y="52"
                        textAnchor="middle"
                        fill="white"
                        style={{ fontSize: "6px" }}
                      >
                        A
                      </text>
                    </g>
                    <g className="slide-in" style={{ animationDelay: "9.6s" }}>
                      <rect
                        x="50"
                        y="45"
                        width="8"
                        height="10"
                        fill="#6B7280"
                        className="highlight"
                      />
                      <text
                        x="54"
                        y="52"
                        textAnchor="middle"
                        fill="white"
                        style={{ fontSize: "6px" }}
                      >
                        B
                      </text>
                    </g>
                    <g className="slide-in" style={{ animationDelay: "11.2s" }}>
                      <rect
                        x="60"
                        y="45"
                        width="8"
                        height="10"
                        fill="#6B7280"
                        className="highlight"
                      />
                      <text
                        x="64"
                        y="52"
                        textAnchor="middle"
                        fill="white"
                        style={{ fontSize: "6px" }}
                      >
                        C
                      </text>
                    </g>

                    {/* Guide lines */}
                    <g className="slide-in" style={{ animationDelay: "12.8s" }}>
                      <line
                        x1="35"
                        y1="45"
                        x2="95"
                        y2="45"
                        stroke="#9CA3AF"
                        strokeWidth="0.2"
                        strokeDasharray="2"
                      />
                      <line
                        x1="35"
                        y1="55"
                        x2="95"
                        y2="55"
                        stroke="#9CA3AF"
                        strokeWidth="0.2"
                        strokeDasharray="2"
                      />
                    </g>

                    {/* Spacing elements */}
                    <g className="slide-in" style={{ animationDelay: "14.4s" }}>
                      <rect
                        x="48"
                        y="45"
                        width="2"
                        height="10"
                        fill="#9CA3AF"
                        opacity="0.5"
                      />
                      <rect
                        x="58"
                        y="45"
                        width="2"
                        height="10"
                        fill="#9CA3AF"
                        opacity="0.5"
                      />
                    </g>

                    {/* Final text output */}
                    <g className="slide-in" style={{ animationDelay: "16s" }}>
                      <text
                        x="50"
                        y="80"
                        textAnchor="middle"
                        fill="#374151"
                        style={{ fontSize: "10px" }}
                      >
                        ABC
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="Helvetica"
          description="Max Miedinger's 1957 typeface revolutionized typography with its clean, neutral design. Its versatility and readability made it essential for corporate communication and public signage."
          designPrinciple="Clarity & Universality – Creating a typeface that works everywhere while maintaining perfect legibility."
          exampleLink="https://www.moma.org/collection/works/139296"
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-4">
              <div className="w-full max-w-[600px] h-[250px] bg-white px-4 pt-4 relative">
                <style>
                  {`
                    @keyframes draw {
                      0% { stroke-dashoffset: 1000; }
                      100% { stroke-dashoffset: 0; }
                    }
                    @keyframes rotate {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                    @keyframes morph {
                      0% { d: path("M 20,20 L 80,20 L 80,80 L 20,80 Z"); }
                      50% { d: path("M 20,20 L 80,20 L 80,80 L 20,80 Z"); }
                      100% { d: path("M 20,20 L 80,20 L 80,80 L 20,80 Z"); }
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-10px); }
                    }
                    .draw {
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                      animation: draw 3s ease-in-out forwards;
                    }
                    .rotate {
                      animation: rotate 20s linear infinite;
                      transform-origin: center;
                    }
                    .float {
                      animation: float 3s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="w-full h-full flex items-center justify-center bg-white">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Rotating geometric forms */}
                    <g className="rotate">
                      {/* Letter H construction */}
                      <path
                        d="M 30,20 L 30,80 M 30,50 L 70,50 M 70,20 L 70,80"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="1"
                        className="draw"
                      />
                      {/* Circular guides */}
                      <circle
                        cx="50"
                        cy="50"
                        r="30"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="0.5"
                        className="draw"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="0.5"
                        className="draw"
                        style={{ animationDelay: "1s" }}
                      />
                    </g>

                    {/* Grid lines */}
                    <g>
                      <line
                        x1="0"
                        y1="50"
                        x2="100"
                        y2="50"
                        stroke="#E5E7EB"
                        strokeWidth="0.5"
                        className="draw"
                        style={{ animationDelay: "2s" }}
                      />
                      <line
                        x1="50"
                        y1="0"
                        x2="50"
                        y2="100"
                        stroke="#E5E7EB"
                        strokeWidth="0.5"
                        className="draw"
                        style={{ animationDelay: "2s" }}
                      />
                    </g>

                    {/* Key points */}
                    <g>
                      <circle
                        cx="30"
                        cy="50"
                        r="1"
                        fill="#374151"
                        className="draw"
                        style={{ animationDelay: "2.5s" }}
                      />
                      <circle
                        cx="70"
                        cy="50"
                        r="1"
                        fill="#374151"
                        className="draw"
                        style={{ animationDelay: "2.5s" }}
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="1"
                        fill="#374151"
                        className="draw"
                        style={{ animationDelay: "2.5s" }}
                      />
                    </g>

                    {/* Center text */}
                    <text
                      x="50"
                      y="50"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#374151"
                      opacity="0.25"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "24px",
                      }}
                    >
                      Helvetica
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="FedEx Logo"
          description="Lindon Leader's 1994 design uses negative space to create a hidden arrow between 'E' and 'x', symbolizing movement and precision. This subtle innovation made it one of history's most celebrated logos."
          designPrinciple="Negative Space - Using the space between elements to create hidden meaning and visual interest"
          exampleLink="https://logo.com/blog/fedex-logo"
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[450px] h-[280px] pb-8 flex items-center justify-center">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/53fd397ce4b03ae33c1629c4/1493993295875-4DH0S4UJ31IHDYBOEOUK/fedex_arrow.gif"
                  alt="FedEx logo with hidden arrow"
                  className="w-[80%] h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          }
        />
        <DesignSection
          title="Don't Make Me Think"
          description="Steve Krug's 'Don't Make Me Think' transformed web design by advocating for intuitive, self-explanatory interfaces. Its core principles of usability testing and clear navigation remain essential to modern web design."
          designPrinciple="Intuitive Design – Creating interfaces that users can understand without conscious thought."
          exampleLink="https://www.sensible.com/dmmt.html"
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[450px] h-[280px] pb-8">
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
          title="Negativland vs U2"
          description="Negativland's 1991 album 'U2' sparked a landmark copyright case when they used U2's 'I Still Haven't Found What I'm Looking For' in a parody. The resulting legal battle became a crucial case study in fair use, sampling rights, and artistic freedom in the digital age."
          designPrinciple="Fair Use & Copyright – Challenging intellectual property laws through creative appropriation."
          exampleLink="https://www.negativland.com/albums/u2/"
          exampleLabel="Negativland's U2 Album - Official Site"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[450px] h-[280px] bg-white overflow-hidden group relative pb-8">
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
      <div
        id="designers"
        className="w-full py-12 mt-16 bg-[#414141] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      >
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
            : "col-span-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-8 gap-6"
        }`}
      >
        <DesignSection
          title="Massimo Vignelli"
          description="Massimo Vignelli was an Italian designer who brought modernist principles to graphic design. His work for clients like American Airlines and the New York Subway system demonstrated the power of systematic design."
          designPrinciple="Systematic Design – Creating coherent visual systems that serve their purpose."
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[350px] h-[230px] bg-white overflow-hidden group relative">
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
          title="Nike Swoosh"
          description="The Nike Swoosh is one of the most recognizable logos in the world. Designed by Carolyn Davidson in 1971, it represents movement and speed through a simple, fluid shape."
          designPrinciple="Simplicity & Memorability – Creating iconic design through minimal elements."
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[350px] h-[230px] bg-white overflow-hidden group relative">
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
          title="Saul Bass Posters"
          description="Saul Bass was a master of poster design, creating iconic movie posters that captured the essence of films through bold, symbolic imagery. His work for directors like Hitchcock and Kubrick set new standards for film marketing."
          designPrinciple="Symbolic Storytelling – Communicating complex ideas through simple visuals."
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[350px] h-[230px] bg-white overflow-hidden group relative">
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
          description="Raymond Pettibon's work combines raw, expressive drawing with subversive cultural commentary. His posters and album covers for bands like Black Flag helped define the visual language of punk rock."
          designPrinciple="Raw Expression – Using art to challenge and provoke."
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[350px] h-[230px] bg-white overflow-hidden group relative">
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
          description="Swiss typeface designer who created Helvetica in 1957. His emphasis on clarity and neutrality revolutionized typography, making Helvetica one of the world's most influential typefaces."
          designPrinciple="Clarity and neutrality through precise typographic design"
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[350px] h-[230px] bg-white overflow-hidden group relative">
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
          description="Paula Scher is a graphic designer known for her bold, typographic work. Her designs for clients like The Public Theater and Citibank demonstrate the power of expressive typography in branding."
          designPrinciple="Expressive Typography – Using type as a primary design element."
          visualComponent={
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-[350px] h-[230px] bg-white overflow-hidden group relative">
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

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-gray-600" />
        </button>
      )}

      {/* Scroll to bottom button */}
      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-50"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </button>
      )}
    </div>
  );
}

export default App;
