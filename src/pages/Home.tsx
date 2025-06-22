// src/pages/Home.tsx
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { H1, Paragraph } from "../components/ui/typography";
import MessageModal from "../components/ui/messageModal";
import ShareRecordingContent from "../components/ui/shareRecordingContentProps";
import { useState } from "react";
import ShareRecordingModal from "../components/ui/shareRecordingModalProps";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

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
      {/* דוגמה לשימוש בהודעה */}
      {/* <MessageModal
        title="הודעה לדוגמה"
        onClose={() => console.log("Modal closed")}
        content={
          <div className="text-sm text-gray-700">
            זהו תוכן ההודעה. ניתן להוסיף כאן כל טקסט או רכיב React.
          </div>
        }/> */}
      {/* דוגמה לשימוש בשתף הקלטה */}
      {/* {showModal && <ShareRecordingModal
        sharedWith={[]}
        onAdd={(email) => console.log(`Added: ${email}`)}
        onRemove={(email) => console.log(`Removed: ${email}`)}
        onClose={() => setShowModal(false) }/>
      } */}
    </div>
  );
}
