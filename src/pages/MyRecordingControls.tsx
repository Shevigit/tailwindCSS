import { Button } from '../components/ui/button'; // הנתיב הנכון לקומפוננטה
import { CloudUpload } from 'lucide-react';

const MyRecordingControls = () => {
  const handleStartRecording = () => {
    console.log("התחלת הקלטה...");
  };

  const handleUploadFile = () => {
    console.log("העלאת קובץ...");
  };

  return (
    <div className="flex items-center gap-4">
      {/* כפתור "העלה קובץ" - אולי קומפוננטה נפרדת או Button עם variant="outline" */}
      <Button variant="outline" onClick={handleUploadFile} icon={<CloudUpload size={20} />} className="text-text-main">
        העלה קובץ
      </Button>

      {/* כפתור "התחל הקלטה" */}
      <Button variant="primary-dark" onClick={handleStartRecording} icon={<CloudUpload size={20} />}>
        התחל הקלטה
      </Button>
    </div>
  );
};
export default MyRecordingControls