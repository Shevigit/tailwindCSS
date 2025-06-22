import MessageModal from "./messageModal";
import ShareRecordingContent from "./shareRecordingContentProps";

type ShareRecordingModalProps = {
  sharedWith: string[];
  onAdd: (email: string) => void;
  onRemove: (email: string) => void;
  onClose: () => void;
};

export default function ShareRecordingModal({
  sharedWith,
  onAdd,
  onRemove,
  onClose,
}: ShareRecordingModalProps) {

  return (
    <MessageModal
      title="שתף הקלטה"
      onClose={onClose}
      content={
        <ShareRecordingContent
          sharedWith={sharedWith}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      }
    />
  );
}
