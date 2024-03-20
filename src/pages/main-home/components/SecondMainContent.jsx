import BigCard from "./BigCard";
import LeftContent from "./LeftContent";

function SecondMainContent() {
  return (
    <div className="flex gap-5">
      <LeftContent />
      <BigCard />
    </div>
  );
}

export default SecondMainContent;