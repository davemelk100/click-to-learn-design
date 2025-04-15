import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface DesignSectionProps {
  title: string;
  description: string;
  visualComponent: React.ReactNode;
  fontFamily?: 'avenir' | 'roboto' | 'helvetica' | 'dm-sans' | 'eb-garamond' | 'source-code-pro' | 'share-tech' | 'niconne' | 'rubik-scribble' | 'habibi' | 'anek-gurmukhi';
  descriptionClassName?: string;
  background?: string;
}

const DesignSection: React.FC<DesignSectionProps> = ({
  title,
  description,
  visualComponent,
  fontFamily = 'roboto',
  descriptionClassName = '',
  background = 'bg-white',
}) => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAiOpen) {
        setIsAiOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isAiOpen]);

  const getFontClass = (font: string) => {
    switch (font) {
      case 'avenir':
        return 'font-avenir';
      case 'helvetica':
        return 'font-helvetica';
      case 'dm-sans':
        return 'font-dm-sans';
      case 'eb-garamond':
        return 'font-eb-garamond';
      case 'source-code-pro':
        return 'font-source-code-pro';
      case 'share-tech':
        return 'font-share-tech';
      case 'niconne':
        return 'font-niconne';
      case 'rubik-scribble':
        return 'font-rubik-scribble';
      case 'habibi':
        return 'font-habibi';
      case 'anek-gurmukhi':
        return 'font-anek-gurmukhi';
      default:
        return 'font-sans';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: query,
          principle: title,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setResponse(data.response);
      setQuery('');
    } catch (err) {
      setError('Failed to get response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fontClass = getFontClass(fontFamily);
  const titleClass = `text-2xl font-bold px-6 pt-4 mb-2 ${fontClass} ${title === 'Spatial Layers' ? 'tracking-[.25em]' : 'tracking-tight'}`;
  const contentClass = '';

  return (
    <div className={`relative group hover:shadow-lg transition-shadow duration-300 min-h-[400px] border-b sm:border-b-0 sm:border-r last:border-r-0 border-gray-100 ${background}`}>
      <div className="h-full flex flex-col">
        <h2 className={titleClass}>
          {title}
        </h2>
        <div className={`flex-1 flex flex-col ${contentClass}`}>
          <div className="flex-1 flex items-center justify-center py-2">
            {visualComponent}
          </div>
          <div className="px-6 pb-4">
            <p className={`text-gray-600 text-sm leading-relaxed ${descriptionClassName}`}>
              {description}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsAiOpen(!isAiOpen)}
          className="absolute bottom-4 right-4 p-2 rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={isAiOpen ? `Close ${title} discussion` : `Learn more about ${title}`}
        >
          {isAiOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <MessageSquare className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isAiOpen && (
        <div className="absolute inset-0 bg-black/95 flex flex-col z-10">
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
              <div className="text-red-400 mb-4" role="alert">{error}</div>
            )}
            {response && (
              <div className="bg-white/10 rounded-lg p-4 text-white text-sm leading-relaxed" role="region" aria-label="AI Response">
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
                aria-label={isLoading ? "Processing your question" : "Submit your question"}
              >
                <span aria-hidden="true">{isLoading ? 'Thinking...' : 'Ask'}</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DesignSection;