
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Sparkles } from "lucide-react";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { SummaryResponse } from "@/components/SummaryResponse";
import { Logo } from "@/components/Logo";

const Index = () => {
  const [emailText, setEmailText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Enhanced floating particles background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-twinkle opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-violet-400 rounded-full animate-orbit opacity-30"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 animate-slide-down">
        <Logo />
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl text-center mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-purple-400 animate-sparkle" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-text-shimmer">
              AI Email Summarizer
            </h1>
            <Sparkles className="w-8 h-8 text-cyan-400 animate-sparkle-delayed" />
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Transform lengthy emails into concise, actionable summaries with the power of AI
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-3xl animate-fade-in-up delay-400">
          <Card className={`p-1 mb-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-2xl transition-all duration-500 transform hover:scale-[1.02] ${
            isFocused ? 'ring-2 ring-purple-500/50 shadow-purple-500/25 shadow-2xl glow-effect' : ''
          }`}>
            <div className="bg-gray-900/80 rounded-xl p-6 space-y-4">
              <div className="relative">
                <Textarea
                  placeholder="Paste your email content here and watch AI work its magic..."
                  value={emailText}
                  onChange={(e) => setEmailText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="min-h-[160px] bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 resize-none rounded-xl focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/10"
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-500 transition-colors duration-200">
                  {emailText.length} characters
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400 animate-fade-in">
                  <kbd className="px-2 py-1 bg-gray-700 rounded text-xs transition-colors duration-200 hover:bg-gray-600">Ctrl</kbd> + 
                  <kbd className="px-2 py-1 bg-gray-700 rounded text-xs ml-1 transition-colors duration-200 hover:bg-gray-600">Enter</kbd> to summarize
                </div>
                <Button 
                  onClick={handleSummarize}
                  disabled={!emailText.trim() || isLoading}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 rounded-xl px-8 py-3 flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:hover:scale-100 shadow-lg animate-button-glow"
                >
                  <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  <span className="font-medium">Summarize</span>
                </Button>
              </div>
            </div>
          </Card>

          {/* Loading Animation */}
          {isLoading && (
            <div className="mb-6 animate-fade-in-scale">
              <LoadingAnimation />
            </div>
          )}

          {/* Response Section */}
          {summary && !isLoading && (
            <div className="animate-slide-up">
              <SummaryResponse summary={summary} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
