import { useState } from "react";
import { Search, Zap, Shield, AlertTriangle } from "lucide-react";

const QuickScan = () => {
  const [inputValue, setInputValue] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<"safe" | "warning" | null>(null);

  const handleScan = () => {
    if (!inputValue.trim()) return;
    setIsScanning(true);
    setScanResult(null);
    
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false);
      setScanResult(Math.random() > 0.5 ? "safe" : "warning");
    }, 2000);
  };

  return (
    <div className="glass-glow-cyan rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <Search className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Quick Scan</h2>
          <p className="text-xs text-muted-foreground">Analyze links, emails & text</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Paste suspicious link or text here..."
          className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        />
      </div>

      {/* Scan Button */}
      <button
        onClick={handleScan}
        disabled={!inputValue.trim() || isScanning}
        className="w-full py-4 px-6 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
        style={{
          boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
        }}
      >
        <Zap className="w-5 h-5" />
        {isScanning ? "SCANNING..." : "SCAN NOW"}
      </button>

      {/* Wave Animation */}
      <div className="flex-1 flex items-center justify-center">
        {isScanning ? (
          <div className="flex items-end gap-1 h-16">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-gradient-to-t from-primary to-accent rounded-full animate-wave"
                style={{
                  height: `${Math.random() * 40 + 20}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        ) : scanResult ? (
          <div className={`flex items-center gap-3 p-4 rounded-xl ${scanResult === "safe" ? "bg-success/20" : "bg-warning/20"}`}>
            {scanResult === "safe" ? (
              <>
                <Shield className="w-8 h-8 text-success" />
                <div>
                  <p className="font-semibold text-success">All Clear!</p>
                  <p className="text-xs text-muted-foreground">No threats detected</p>
                </div>
              </>
            ) : (
              <>
                <AlertTriangle className="w-8 h-8 text-warning" />
                <div>
                  <p className="font-semibold text-warning">Potential Risk</p>
                  <p className="text-xs text-muted-foreground">Review recommended</p>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="flex items-end gap-1 h-16 opacity-30">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-muted rounded-full"
                style={{ height: `${10 + i * 3}px` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickScan;