import { AlertTriangle, ShieldAlert, Lock, Database, Clock, ChevronRight } from "lucide-react";

interface AlertItem {
  id: number;
  type: "phishing" | "password" | "leak";
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  time: string;
}

const AlertsSection = () => {
  const recentAlerts: AlertItem[] = [
    {
      id: 1,
      type: "phishing",
      title: "Phishing Attempt Blocked",
      description: "Suspicious email from 'support@bank-secure.xyz'",
      severity: "high",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "password",
      title: "Password Reuse Detected",
      description: "Same password used on 3 different sites",
      severity: "medium",
      time: "1 day ago",
    },
    {
      id: 3,
      type: "leak",
      title: "Potential Data Exposure",
      description: "Your email found in recent breach database",
      severity: "high",
      time: "3 days ago",
    },
  ];

  const actionableAlerts: AlertItem[] = [
    {
      id: 4,
      type: "password",
      title: "Update LinkedIn Password",
      description: "Last changed 8 months ago",
      severity: "medium",
      time: "Action required",
    },
    {
      id: 5,
      type: "phishing",
      title: "Review Suspicious Login",
      description: "New device logged in from unknown location",
      severity: "high",
      time: "Needs verification",
    },
  ];

  const getAlertIcon = (type: AlertItem["type"]) => {
    switch (type) {
      case "phishing":
        return <ShieldAlert className="w-5 h-5" />;
      case "password":
        return <Lock className="w-5 h-5" />;
      case "leak":
        return <Database className="w-5 h-5" />;
    }
  };

  const getSeverityStyles = (severity: AlertItem["severity"]) => {
    switch (severity) {
      case "high":
        return {
          bg: "bg-destructive/20",
          border: "border-destructive/30",
          text: "text-destructive",
          glow: "shadow-[0_0_15px_hsl(var(--destructive)/0.3)]",
        };
      case "medium":
        return {
          bg: "bg-warning/20",
          border: "border-warning/30",
          text: "text-warning",
          glow: "shadow-[0_0_15px_hsl(var(--warning)/0.3)]",
        };
      case "low":
        return {
          bg: "bg-success/20",
          border: "border-success/30",
          text: "text-success",
          glow: "shadow-[0_0_15px_hsl(var(--success)/0.3)]",
        };
    }
  };

  const AlertCard = ({ alert }: { alert: AlertItem }) => {
    const styles = getSeverityStyles(alert.severity);
    return (
      <div
        className={`p-4 rounded-xl border ${styles.bg} ${styles.border} ${styles.glow} hover:scale-[1.02] transition-all cursor-pointer`}
      >
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${styles.bg}`}>
            <span className={styles.text}>{getAlertIcon(alert.type)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">{alert.title}</p>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {alert.description}
            </p>
            <div className="flex items-center gap-1 mt-2">
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{alert.time}</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        </div>
      </div>
    );
  };

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-destructive" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Security Alerts</h2>
          <p className="text-xs text-muted-foreground">Stay informed about threats</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Recent Alerts
          </h3>
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>

        {/* Actionable Alerts */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Actionable Alerts
          </h3>
          <div className="space-y-3">
            {actionableAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsSection;