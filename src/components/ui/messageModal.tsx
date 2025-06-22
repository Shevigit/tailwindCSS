// רכיב Modal להצגת הודעות עם כותרת ותוכן מותאם אישית
// ניתן להשתמש ברכיב זה כדי להציג הודעות שונות כמו הצלחות, שגיאות או מידע כללי
// דוגמה לשימוש ברכיב FeedbackModal
// <MessageModal title="כותרת"  content={<p>תוכן</p>} onClose={() => setShowModal(false)} />

import { X } from "lucide-react";
import { ReactNode } from "react";

type MessageModal = {
  title: string;
  content: ReactNode;
  onClose: () => void;
};

export default function MessageModal({ title, content, onClose }: MessageModal) {
  return (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 shadow-card w-full max-w-md">
        <div className="flex flex-row justify-between items-start">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="סגור"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-800 space-y-2">
          {content}
        </div>
      </div>
    </div>
  );
}
