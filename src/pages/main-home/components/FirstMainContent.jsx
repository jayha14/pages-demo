import BigCard from "./BigCard";
import LeftContent from "./LeftContent";

function FirstMainContent() {
  return (
    <div className="flex gap-5">
      <BigCard />
      <LeftContent />
    </div>
  );
}

export default FirstMainContent;