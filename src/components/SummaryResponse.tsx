
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Copy, CheckCheck, Sparkles } from "lucide-react";

interface SummaryResponseProps {
  summary: string;
}

export const SummaryResponse = ({ summary }: SummaryResponseProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-1 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 animate-pulse opacity-50"></div>
      
      <div className="relative bg-gray-900/80 rounded-xl p-6 space-y-4 border border-gray-800/30">
        <div className="flex items-center justify-between animate-fade-in-up">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400 animate-star-rotation" />
            <h3 className="text-lg font-semibold text-white">AI Summary</h3>
            <div className="flex space-x-1 ml-2">
              <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          <Button
            onClick={handleCopy}
            variant="outline"
            size="sm"
            className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            {copied ? (
              <div className="animate-fade-in-scale">
                <CheckCheck className="w-4 h-4 mr-2 text-green-400" />
                Copied!
              </div>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
        <div className="prose prose-sm max-w-none animate-fade-in-up delay-200">
          <div className="text-gray-200 leading-relaxed whitespace-pre-wrap bg-gray-800/30 rounded-lg p-4 border border-gray-700/30 relative overflow-hidden">
            {/* Subtle animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse rounded-lg"></div>
            <div className="relative z-10">
              {summary}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
