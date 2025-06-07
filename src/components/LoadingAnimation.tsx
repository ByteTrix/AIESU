
import { Card } from "@/components/ui/card";
import { Brain, Sparkles } from "lucide-react";

export const LoadingAnimation = () => {
  return (
    <Card className="p-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-2xl">
      <div className="flex items-center justify-center space-x-4">
        <div className="relative">
          <Brain className="w-8 h-8 text-purple-400 animate-pulse" />
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <span className="text-gray-300 animate-pulse font-medium">AI is analyzing your email...</span>
      </div>
    </Card>
  );
};
