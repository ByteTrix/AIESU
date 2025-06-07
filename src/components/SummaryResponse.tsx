
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
    <Card className="p-1 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-2xl animate-fade-in">
      <div className="bg-gray-900/80 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">AI Summary</h3>
          </div>
          <Button
            onClick={handleCopy}
            variant="outline"
            size="sm"
            className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white transition-colors rounded-lg"
          >
            {copied ? (
              <>
                <CheckCheck className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
        <div className="prose prose-sm max-w-none">
          <div className="text-gray-200 leading-relaxed whitespace-pre-wrap bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
            {summary}
          </div>
        </div>
      </div>
    </Card>
  );
};
