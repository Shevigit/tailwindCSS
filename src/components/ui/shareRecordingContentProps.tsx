import { X } from "lucide-react";
import { useState } from "react";

type ShareRecordingContentProps = {
  onAdd: (email: string) => void;
  onRemove: (email: string) => void;
  sharedWith: string[];
};

export default function ShareRecordingContent({
  onAdd,
  onRemove,
  sharedWith,
}: ShareRecordingContentProps) {

  const [sharedWithState, setSharedWithState] = useState<string[]>(sharedWith);
  const [email, setEmail] = useState("");


  function handleAdd(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    if (email && !sharedWith.includes(email)) {
      onAdd(email);
      setSharedWithState((prev) => [...prev, email]);
      setEmail("");
    }
  }

  return (
    
    <>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="הכנס אימייל לשיתוף"
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 shadow-input text-sm"
        />
        <button
          onClick={handleAdd}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          שתף
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-700">
        <strong>משותף עם:</strong>
        {sharedWithState.length === 0 ? (
          <p className="text-gray-500">לא משותף עם אף אחד</p>
        ) : (
          <ul className="mt-2 space-y-1">
            {sharedWithState.map((email, i) => (
              <li key={i} className="flex items-center justify-between bg-gray-100 px-3 py-1 rounded">
                <span>{email}</span>
                <button
                  onClick={() => {onRemove(email) ; setSharedWithState(sharedWithState.filter(e => e !== email));}}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
