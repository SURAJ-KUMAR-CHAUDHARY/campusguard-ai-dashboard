import { Trophy, CheckCircle, Circle, Star } from "lucide-react";

interface QuestItem {
  id: number;
  title: string;
  completed: boolean;
  points: number;
}

const WeeklyQuest = () => {
  const quests: QuestItem[] = [
    { id: 1, title: "Enable Two-Factor Authentication", completed: true, points: 50 },
    { id: 2, title: "Update your recovery email", completed: true, points: 30 },
    { id: 3, title: "Review app permissions", completed: false, points: 40 },
    { id: 4, title: "Complete security quiz", completed: false, points: 25 },
  ];

  const completedCount = quests.filter((q) => q.completed).length;
  const totalPoints = quests.filter((q) => q.completed).reduce((sum, q) => sum + q.points, 0);

  return (
    <div className="glass-glow-orange rounded-2xl p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center animate-float">
            <Trophy className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Weekly Quest</h2>
            <p className="text-xs text-muted-foreground">Complete tasks to earn points</p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 bg-accent/20 rounded-full">
          <Star className="w-4 h-4 text-accent" />
          <span className="text-sm font-bold text-accent">{totalPoints}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Progress</span>
          <span>{completedCount}/{quests.length} completed</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent to-warning rounded-full transition-all duration-500"
            style={{
              width: `${(completedCount / quests.length) * 100}%`,
              boxShadow: "0 0 10px hsl(var(--accent) / 0.5)",
            }}
          />
        </div>
      </div>

      {/* Quest List */}
      <div className="flex-1 space-y-2">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-muted/30 cursor-pointer ${
              quest.completed ? "opacity-70" : ""
            }`}
          >
            {quest.completed ? (
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            )}
            <span
              className={`text-sm flex-1 ${
                quest.completed ? "text-muted-foreground line-through" : "text-foreground"
              }`}
            >
              {quest.title}
            </span>
            <span className="text-xs text-accent">+{quest.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyQuest;