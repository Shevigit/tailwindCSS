
import { Mic, Star, CheckCircle, CircleGauge } from "lucide-react";
import { SummaryBox } from "../components/ui/SummaryBox";

// קומפוננטה חדשה לתיבה הירוקה
export const CompletionBox = () => {
  return (
    <div className="bg-primary-dark text-white flex flex-col items-center justify-center p-6 rounded-xl text-center space-y-2 min-h-[200px]">
      <p className="text-sm">השלימי את כל השאלות</p>
      <div className="text-[28px] font-bold">50%</div>
      <p className="text-sm leading-snug">כדי לקבל תעודה</p>
    </div>
  );
};

export const DashboardSummary = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* התיבה הירוקה עם ה-50% */}
      <CompletionBox />

      {/* שאר תיבות הסיכום הלבנות */}
      <SummaryBox
        title="סה״כ הקלטות"
        value="17"
        description="תרגולים שבוצעו"
        icon={<Mic />}
        iconColor="primary-dark"
      />
      <SummaryBox
        title="ציון ממוצע"
        value="4.1 / 5.0"
        description={<div className="text-yellow-400 text-lg">★★★★☆</div>}
        icon={<Star />}
        iconColor="accent"
      />
      <SummaryBox
        title="התקדמות כללית"
        value="7 / 14"
        description={
          <div className="w-full h-2 bg-muted rounded">
            <div className="h-full bg-primary-dark rounded" style={{ width: "50%" }} />
          </div>
        }
        icon={<CircleGauge />}
        iconColor="secondary"
      />
    </div>
  );
};