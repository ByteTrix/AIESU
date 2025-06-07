
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    <Card className="p-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Summary</h3>
          <Button
            onClick={handleCopy}
            variant="outline"
            size="sm"
            className="text-sm"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {summary}
          </p>
        </div>
      </div>
    </Card>
  );
};
