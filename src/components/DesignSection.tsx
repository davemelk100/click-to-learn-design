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
    <div className="border border-gray-200 overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-[800px]">
        <div
          className="absolute inset-0 flex flex-col"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
          }}
        >
          <div className="p-6 flex-none">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="bg-gray-50 p-4 mb-4">
              <p className="text-sm text-gray-700 italic">{designPrinciple}</p>
            </div>
          </div>
          <div className="flex-1 bg-white">{visualComponent}</div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;
