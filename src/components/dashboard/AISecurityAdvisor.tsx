import { useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";

const AISecurityAdvisor = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    setIsTyping(true);
    setMessage("");
    
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="glass-glow-cyan rounded-2xl p-5 h-full flex flex-col animate-float">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card flex items-center justify-center">
            <Sparkles className="w-2 h-2 text-success-foreground" />
          </span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">AI Advisor</h2>
          <p className="text-xs text-success">Online • Ready to help</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col justify-end space-y-3">
        {/* AI Message Bubble */}
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-primary" />
          </div>
          <div className="bg-muted/50 rounded-2xl rounded-tl-md p-4 max-w-[85%]">
            <p className="text-sm text-foreground">
              Hey Aniket! Found a suspicious email? Paste it here, I'll explain if it's safe! 😊
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              I can analyze links, emails, and text for security threats.
            </p>
          </div>
        </div>

        {isTyping && (
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-muted/50 rounded-2xl rounded-tl-md p-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask me anything about security..."
          className="flex-1 px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        />
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="p-3 bg-gradient-to-r from-primary to-accent rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            boxShadow: message.trim() ? "0 0 15px hsl(var(--primary) / 0.4)" : "none",
          }}
        >
          <Send className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
};

export default AISecurityAdvisor;