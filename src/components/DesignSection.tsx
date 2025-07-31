import React, { useState, useEffect } from "react";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";

interface DesignSectionProps {
  title: string;
  description: string;
  designPrinciple: string;
  exampleLink?: string;
  exampleLabel?: string;
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
  exampleLabel,
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

  return (
    <div className="border border-gray-200 overflow-visible shadow hover:shadow-lg transition-shadow duration-300 rounded-lg min-w-0">
      <div className="relative h-[350px] sm:h-[500px]">
        <div
          className="absolute inset-0 flex flex-col"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
          }}
        >
          <div className="p-4 sm:p-6 flex-none">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 break-words">
              {title}
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-8 text-sm sm:text-base break-words">
              {description}
            </p>
          </div>
          <div className="flex-1 bg-white relative overflow-visible min-w-0">
            {visualComponent}
            {exampleLink && <div className="absolute bottom-4 right-4"></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;
