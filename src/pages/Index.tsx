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
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    if (!emailText.trim()) return;
    
    setIsLoading(true);
    setSummary("");
    setError("");
    
    try {
      const response = await fetch('https://n8n-latest-x67i.onrender.com/webhook/ce7d3316-e4a8-473c-8ce2-39bc3aeb2b9e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailText
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
        
        // Handle the new response format
        if (Array.isArray(data) && data.length > 0) {
          const responseData = data[0];
          if (responseData.response && responseData.response.body && Array.isArray(responseData.response.body)) {
            const output = responseData.response.body[0]?.output;
            setSummary(output || "Summary generated successfully!");
          } else {
            setSummary(responseData.output || JSON.stringify(data));
          }
        } else if (data.summary || data.message || data.output) {
          setSummary(data.summary || data.message || data.output);
        } else {
          setSummary("Summary generated successfully!");
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(`Error ${response.status}: ${errorData.message || 'Failed to generate summary'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setError("Failed to connect to the AI service. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSummarize();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Premium dark particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Larger floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-28 h-28 bg-cyan-600/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-violet-600/10 rounded-full blur-2xl animate-orbit"></div>
        
        {/* Small twinkling particles */}
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-twinkle opacity-60"></div>
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-blue-400 rounded-full animate-twinkle opacity-40"></div>
        <div className="absolute top-1/5 left-2/3 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle opacity-50"></div>
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-950/20 to-black/30"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 animate-slide-down">
        <Logo />
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-4xl text-center mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-10 h-10 text-purple-400 animate-star-rotation" />
            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-text-shimmer leading-tight">
              AI Email Summarizer
            </h1>
            <Sparkles className="w-10 h-10 text-cyan-400 animate-star-rotation-reverse" />
          </div>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
            Transform lengthy emails into concise, actionable insights with cutting-edge AI technology
          </p>
        </div>        {/* Input Section */}
        <div className="w-full max-w-3xl animate-fade-in-up delay-400">
          <div className="relative">
            {/* Revolving orange and blue border - Conditionally rendered */}
            {isFocused && (
              <div className="absolute -inset-2 rounded-3xl animate-revolving-orange-blue-border"></div>
            )}
            
            {/* Traveling lights around the border - Conditionally rendered */}
            {/* {isFocused && (
              <>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-traveling-light shadow-[0_0_12px_2px_rgba(249,115,22,0.7)]"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-traveling-light shadow-[0_0_12px_2px_rgba(59,130,246,0.7)]" style={{ animationDelay: '2.5s' }}></div>
                </div>
              </>
            )} */}
            
            {/* Enhanced glow effect behind the card - Now colorless or removed */}
            {/* {isFocused && (
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl blur-xl animate-glow-pulse"></div>
            )} */}
            
            <Card className="relative p-1.5 mb-8 bg-gray-900/30 backdrop-blur-2xl border border-gray-800/50 shadow-2xl rounded-3xl transition-all duration-700">
              <div className="bg-gray-950/60 rounded-2xl p-8 space-y-6 border border-gray-800/30">
                <div className="relative">
                  <Textarea
                    placeholder="Paste your email content here and experience the magic of AI summarization..."
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="min-h-[180px] bg-gray-900/40 border-gray-700/50 text-white placeholder:text-gray-500 resize-none rounded-2xl focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-500 focus:shadow-lg focus:shadow-purple-500/10 text-lg leading-relaxed"
                  />
                  <div className="absolute bottom-4 right-4 text-sm text-gray-500 transition-colors duration-300 bg-gray-800/50 px-3 py-1 rounded-full">
                    {emailText.length} characters
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <div className="text-xs text-gray-500/80 animate-fade-in flex items-center gap-1.5 font-mono tracking-tight">
                    <span className="text-gray-400/90">Press</span>
                    <kbd className="px-2 py-1 bg-gray-800/70 rounded-md text-gray-300/90 border border-gray-700/60 shadow-sm transition-all duration-200 hover:bg-gray-700/70 hover:border-gray-600/70">Ctrl</kbd>
                    <span className="text-gray-400/90">+</span>
                    <kbd className="px-2 py-1 bg-gray-800/70 rounded-md text-gray-300/90 border border-gray-700/60 shadow-sm transition-all duration-200 hover:bg-gray-700/70 hover:border-gray-600/70">Enter</kbd> 
                    <span className="text-gray-400/90">to summarize</span>
                  </div>
                  <Button 
                    onClick={handleSummarize}
                    disabled={!emailText.trim() || isLoading}
                    className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white border-0 rounded-2xl px-10 py-4 flex items-center gap-3 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 shadow-xl animate-premium-button-hover text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>Summarize</span>
                  </Button>
                </div>              </div>
            </Card>
          </div>

          {/* Loading Animation with enhanced positioning */}
          {isLoading && (
            <div className="mb-8 animate-slide-up-bounce">
              <LoadingAnimation />
            </div>
          )}

          {/* Error Display */}
          {error && !isLoading && (
            <div className="mb-8 animate-response-appear">
              <Card className="p-6 bg-red-900/20 backdrop-blur-xl border border-red-700/50 shadow-2xl rounded-2xl">
                <div className="text-red-300 text-center">
                  <p className="font-medium">{error}</p>
                </div>
              </Card>
            </div>
          )}

          {/* Response Section with premium animation */}
          {summary && !isLoading && !error && (
            <div className="animate-summary-grand-entrance">
              <SummaryResponse summary={summary} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
