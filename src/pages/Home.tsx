// src/pages/Home.tsx
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { H1, Paragraph } from "../components/ui/typography";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[--color-background]">
      <Card className="w-full max-w-md space-y-4">
        <H1>ברוך הבא</H1>
        <Paragraph>נא להזין את כתובת האימייל שלך כדי להתחיל</Paragraph>
        <Input placeholder="example@email.com" />
        <div className="flex justify-between">
          <Button>כניסה</Button>
          <Button variant="outline">הרשמה</Button>
          <Button variant="danger">מחיקה</Button>
        </div>
      </Card>
    </div>
  );
}
