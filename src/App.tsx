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
            : "col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-12"
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
          description="Basic Color Theory explores the fundamental relationships between colors. This technique uses primary colors and their interactions to create visual harmony and meaning."
          designPrinciple="Harmony & Contrast – Creating visual interest through color relationships and interactions."
          exampleLink="https://www.interaction-design.org/literature/topics/color-theory"
          exampleLabel="Color Theory - Interaction Design Foundation"
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-4">
              <div className="w-full max-w-[600px] h-[400px] bg-white p-4 relative">
                <style>
                  {`
                    @keyframes orbit {
                      0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
                      100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
                    }
                    @keyframes pulse {
                      0%, 100% { transform: scale(1); opacity: 0.7; }
                      50% { transform: scale(1.2); opacity: 1; }
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0) rotate(0deg); }
                      50% { transform: translateY(-20px) rotate(180deg); }
                    }
                    @keyframes blend {
                      0% { background-color: rgba(255, 0, 0, 0.4); }
                      33% { background-color: rgba(0, 0, 255, 0.4); }
                      66% { background-color: rgba(255, 255, 0, 0.4); }
                      100% { background-color: rgba(255, 0, 0, 0.4); }
                    }
                    .orbit-element {
                      animation: orbit 8s linear infinite;
                    }
                    .pulse-element {
                      animation: pulse 2s ease-in-out infinite;
                    }
                    .float-element {
                      animation: float 4s ease-in-out infinite;
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

                  {/* Orbiting primary colors */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="orbit-element"
                      style={{ animationDuration: "8s" }}
                    >
                      <div className="w-16 h-16 bg-red-500/40 rounded-full pulse-element" />
                    </div>
                    <div
                      className="orbit-element"
                      style={{
                        animationDuration: "8s",
                        animationDelay: "-2.67s",
                      }}
                    >
                      <div className="w-16 h-16 bg-blue-500/40 rounded-full pulse-element" />
                    </div>
                    <div
                      className="orbit-element"
                      style={{
                        animationDuration: "8s",
                        animationDelay: "-5.33s",
                      }}
                    >
                      <div className="w-16 h-16 bg-yellow-500/40 rounded-full pulse-element" />
                    </div>
                  </div>

                  {/* Floating secondary colors */}
                  <div className="absolute inset-0">
                    <div
                      className="absolute top-1/4 left-1/4 float-element"
                      style={{ animationDelay: "0s" }}
                    >
                      <div className="w-12 h-12 bg-purple-500/40 rounded-full" />
                    </div>
                    <div
                      className="absolute top-1/4 right-1/4 float-element"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="w-12 h-12 bg-green-500/40 rounded-full" />
                    </div>
                    <div
                      className="absolute bottom-1/4 left-1/4 float-element"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="w-12 h-12 bg-orange-500/40 rounded-full" />
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
          description="The Rule of Thirds divides the canvas into a 3x3 grid, creating natural focal points where the lines intersect. This technique helps create balanced, dynamic compositions that guide the viewer's eye."
          designPrinciple="Balance & Focus – Using grid intersections to create natural focal points."
          exampleLink="https://www.photographymad.com/pages/view/rule-of-thirds"
          exampleLabel="Photography Mad's guide to using the Rule of Thirds in photography"
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
          visualComponent={
            <div className="flex items-center justify-center w-full -mt-4">
              <div className="w-full max-w-[600px] h-[400px] bg-white p-4 relative">
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
                  {/* Central rotating element */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-element">
                    <div className="w-32 h-32 rounded-full border-4 border-indigo-500/30">
                      <div className="absolute inset-4 rounded-full border-4 border-purple-500/30" />
                      <div className="absolute inset-8 rounded-full border-4 border-pink-500/30" />
                    </div>
                  </div>

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
          description="Ambiguous Scale plays with our perception of size and proportion, creating visual interest through uncertainty about true dimensions. This technique uses relative scale and context to create dynamic compositions."
          designPrinciple="Perception & Context – Using relative scale to create visual interest and uncertainty."
          exampleLink="https://www.microsoft.com/en-us/microsoft-365-life-hacks/presentations/scale-in-graphic-design"
          exampleLabel="Microsoft's guide to using scale and proportion in presentations"
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
            : "col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-12"
        }`}
      >
        <DesignSection
          title="Boston Globe Redesign"
          description="The Boston Globe's 2011 responsive redesign, led by Ethan Marcotte and Filament Group, marked a pivotal moment in web design. As the first major news site to implement responsive design, it demonstrated how content could adapt seamlessly across devices while maintaining readability and hierarchy."
          designPrinciple="Responsive Design - Creating fluid layouts that adapt to any screen size while maintaining content integrity"
          exampleLink="https://zeldman.com/2011/09/15/boston-globes-responsive-redesign-discuss/"
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
          title="Helvetica"
          description="Helvetica is one of the most widely used typefaces in the world. Designed by Max Miedinger in 1957, it represents the perfect balance of clarity and neutrality in typography. Its clean, modern design has made it a favorite for corporate identities, signage, and digital interfaces."
          designPrinciple="Typography & Clarity – Creating universal communication through type."
          exampleLink="https://www.designandpaper.com/the-story-of-the-worlds-most-famous-font-helvetica/"
          visualComponent={
            <div className="flex items-center justify-center h-full p-4">
              <div className="w-[600px] h-[400px] bg-white relative overflow-hidden">
                <style>
                  {`
                    @keyframes slide {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(100%); }
                    }
                    @keyframes fade {
                      0%, 100% { opacity: 0.3; }
                      50% { opacity: 1; }
                    }
                    .slide-text {
                      animation: slide 20s linear infinite;
                    }
                    .fade-text {
                      animation: fade 4s ease-in-out infinite;
                    }
                  `}
                </style>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Large Helvetica text */}
                  <div className="text-[120px] font-bold text-gray-900/10 fade-text">
                    Helvetica
                  </div>

                  {/* Sliding text */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="slide-text whitespace-nowrap text-4xl font-bold text-gray-900">
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                  </div>

                  {/* Grid lines */}
                  <div className="absolute inset-0">
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-200" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-200" />
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-200" />
                    <div className="absolute top-2/3 left-0 right-0 h-px bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <DesignSection
          title="FedEx Logo"
          description="The FedEx logo, designed by Lindon Leader in 1994, is a masterclass in negative space design. The hidden arrow between the 'E' and 'x' represents forward movement and precision, perfectly aligning with FedEx's brand values. This subtle yet powerful design element has made it one of the most recognized and awarded logos in history."
          designPrinciple="Negative Space - Using the space between elements to create hidden meaning and visual interest"
          exampleLink="https://logo.com/blog/fedex-logo"
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
          title="Negativland"
          description="Negativland is a sound collage band that uses found audio and media to create new works. Their approach to copyright and fair use has influenced how we think about creative reuse and media ownership."
          designPrinciple="Media Critique & Copyright"
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
            : "col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-12"
        }`}
      >
        <DesignSection
          title="Massimo Vignelli"
          description="Massimo Vignelli was an Italian designer who brought modernist principles to graphic design. His work for clients like American Airlines and the New York Subway system demonstrated the power of systematic design."
          designPrinciple="Systematic Design – Creating coherent visual systems that serve their purpose."
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
          title="Nike Swoosh"
          description="The Nike Swoosh is one of the most recognizable logos in the world. Designed by Carolyn Davidson in 1971, it represents movement and speed through a simple, fluid shape."
          designPrinciple="Simplicity & Memorability – Creating iconic design through minimal elements."
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
          title="Saul Bass Posters"
          description="Saul Bass was a master of poster design, creating iconic movie posters that captured the essence of films through bold, symbolic imagery. His work for directors like Hitchcock and Kubrick set new standards for film marketing."
          designPrinciple="Symbolic Storytelling – Communicating complex ideas through simple visuals."
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
          description="Raymond Pettibon's work combines raw, expressive drawing with subversive cultural commentary. His posters and album covers for bands like Black Flag helped define the visual language of punk rock."
          designPrinciple="Raw Expression – Using art to challenge and provoke."
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
          description="Paula Scher is a graphic designer known for her bold, typographic work. Her designs for clients like The Public Theater and Citibank demonstrate the power of expressive typography in branding."
          designPrinciple="Expressive Typography – Using type as a primary design element."
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
