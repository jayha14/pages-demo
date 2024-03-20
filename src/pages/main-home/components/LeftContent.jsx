import Card from "./Card";
import Title from "./Title";


function LeftContent() {
  return (
    <div className="w-[900px]">
      <Title isItem='true' slide='true' text='SẢN PHẨM ƯU ĐÃI THÁNG'/>
      <div className="mt-5 grid grid-cols-4 gap-14">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default LeftContent;