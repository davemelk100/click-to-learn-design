import React, { useState, useEffect } from "react";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";

interface DesignSectionProps {
  title: string;
  description: string;
  designPrinciple: string;
  exampleLink?: string;
  visualComponent: React.ReactNode;
  isListLayout?: boolean;
  fontFamily?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  background?: string;
}

const DesignSection: React.FC<DesignSectionProps> = ({
  title,
  description,
  designPrinciple,
  exampleLink,
  visualComponent,
  isListLayout = false,
  fontFamily = "avenir",
  descriptionClassName = "text-gray-700 font-avenir",
  titleClassName = "text-2xl font-bold text-gray-900 font-avenir",
  background = "bg-white",
}) => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isAiOpen) {
        setIsAiOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isAiOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: query,
            principle: title,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setResponse(data.response);
      setQuery("");
    } catch (err) {
      setError("Failed to get response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const shouldRemoveRightBorder =
    title === "Spatial Layers" ||
    title === "Rule of Thirds" ||
    title === "Interwoven Space" ||
    title === "Dimensional Hierarchy" ||
    title === "Subjective Emphasis" ||
    title === "Bezold Effect" ||
    title === "Ambiguous Scale" ||
    title === "Artful Reduction" ||
    title === "Basic Color Theory";

  return (
    <div className="relative">
      <div
        className={`relative p-8 bg-white border border-gray-300 ${
          isListLayout ? "" : ""
        }`}
      >
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-black leading-none">
            {title}
          </h3>
          <p className="mt-4 text-black">{description}</p>
          <div className="mt-6">
            <span className="font-medium">Design Principle:</span>{" "}
            {designPrinciple}
          </div>
          <a
            href={exampleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-800"
          >
            Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="mt-8 bg-white">
          <div className="bg-white">{visualComponent}</div>
        </div>
        <button
          onClick={() => setIsAiOpen(!isAiOpen)}
          className="absolute bottom-4 right-4 p-2 rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          aria-label={
            isAiOpen ? `Close ${title} discussion` : `Learn more about ${title}`
          }
        >
          {isAiOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <MessageSquare className="w-5 h-5" aria-hidden="true" />
          )}
        </button>

        {isAiOpen && (
          <div className="absolute inset-0 bg-black/95 flex flex-col z-20">
            <div className="flex justify-between items-center p-6">
              <h3 className="text-xl font-bold text-white">
                Ask about {title}
              </h3>
              <button
                onClick={() => setIsAiOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                aria-label={`Close ${title} discussion`}
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <p className="text-xs text-gray-400 px-6 mb-3">
              Ask specific questions about this design principle
            </p>
            <div className="flex-1 overflow-y-auto px-6">
              {error && (
                <div className="text-red-400 mb-4" role="alert">
                  {error}
                </div>
              )}
              {response && (
                <div
                  className="bg-white/10 rounded-lg p-4 text-white text-sm leading-relaxed"
                  role="region"
                  aria-label="AI Response"
                >
                  {response}
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type your question..."
                  disabled={isLoading}
                  className="w-full p-3 bg-white/10 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 pr-24"
                  aria-label={`Ask a question about ${title}`}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-white/20 rounded text-white text-sm hover:bg-white/30 transition-colors disabled:opacity-50 disabled:hover:bg-white/20"
                  aria-label={
                    isLoading
                      ? "Processing your question"
                      : "Submit your question"
                  }
                >
                  <span aria-hidden="true">
                    {isLoading ? "Thinking..." : "Ask"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignSection;
