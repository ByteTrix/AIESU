
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { SummaryResponse } from "@/components/SummaryResponse";

const Index = () => {
  const [emailText, setEmailText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    if (!emailText.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call - will be replaced with actual n8n endpoint
    setTimeout(() => {
      setSummary("This is a sample summary of your email. The actual AI-powered summarization will be implemented with your n8n workflow endpoint.");
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSummarize();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="text-white font-semibold text-lg">Lovable</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            One-Click Email{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Summarizer
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Paste your email and get an instant AI-powered summary
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-2xl">
          <Card className="p-6 mb-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <div className="space-y-4">
              <Textarea
                placeholder="Paste your email content here..."
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                onKeyDown={handleKeyPress}
                className="min-h-[150px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
              />
              <div className="flex justify-end">
                <Button 
                  onClick={handleSummarize}
                  disabled={!emailText.trim() || isLoading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full px-6 py-2 flex items-center gap-2 transition-all duration-200"
                >
                  <span>Summarize</span>
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Loading Animation */}
          {isLoading && (
            <div className="mb-6">
              <LoadingAnimation />
            </div>
          )}

          {/* Response Section */}
          {summary && !isLoading && (
            <SummaryResponse summary={summary} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
