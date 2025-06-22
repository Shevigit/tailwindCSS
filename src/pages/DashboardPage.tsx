// DashboardPage.tsx (או קומפוננטת דף כלשהי)
import { GridContainer } from '../components/ui/GridContainer'; // הנתיב הנכון
import { SummaryBox } from '../components/ui/SummaryBox'; // נשתמש ב-SummaryBox מהדוגמאות הקודמות
import { CompletionBox } from './DashboardSummary'; // נניח ש-CompletionBox היא קומפוננטה נפרדת כפי שהמלצתי

import { Mic, Star, CheckCircle, CircleGauge } from "lucide-react";


const DashboardPage = () => {
  return (
    <GridContainer maxWidth="lg" mt="mt-8" mb="mb-16" gridClasses="grid-cols-2 justify-items-center items-center"> {/* קונטיינר לכל הדף */}

      {/* כותרת כלשהי לדף */}
      <h1 className="text-3xl font-bold text-text-main mb-6">שלום, Projectly!</h1>
      <p className="text-text-secondary mb-10">הנה סיכום ההתקדמות שלך עד כה.</p>

      {/* הגריד של תיבות הסיכום */}
      <GridContainer 
        maxWidth="full" // בתוך הקונטיינר הראשי, אנחנו רוצים שהגריד הזה יתפרס על הרוחב הזמין
        gridClasses="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" // הגדרת עמודות הגריד
        gap="gap-4" // מרווח בין התיבות
        mt="mt-0" // לא רוצים מרווח עליון נוסף אם הוא בתוך GridContainer אחר
        mb="mb-0" // לא רוצים מרווח תחתון נוסף
        padding="px-0" // לא רוצים ריפוד נוסף בתוך הגריד עצמו, כי כבר יש בקונטיינר העוטף
      >
        {/* התיבה הירוקה עם ה-50% (כקומפוננטה נפרדת) */}
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
      </GridContainer>

      {/* חלקים נוספים בדף - תפרוסות ציונים, התקדמות ציונים וכו' - גם הם יכולים להיות בתוך GridContainer נוספים */}
      <GridContainer gridClasses="grid-cols-1 md:grid-cols-2" gap="gap-4" mt="mt-8">
        <div className="bg-white p-6 rounded-xl border border-border min-h-[300px]">
          <h2 className="text-lg font-semibold text-text-main mb-4">התפלגות ציונים</h2>
          {/* גרף התפלגות ציונים */}
        </div>
        <div className="bg-white p-6 rounded-xl border border-border min-h-[300px]">
          <h2 className="text-lg font-semibold text-text-main mb-4">התקדמות ציונים</h2>
          {/* גרף התקדמות ציונים */}
        </div>
      </GridContainer>

    </GridContainer>
  );
};

export default DashboardPage;