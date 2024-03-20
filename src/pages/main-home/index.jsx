import Card from "./components/Card";
import FirstMainContent from "./components/FirstMainContent";
import GuestCard from "./components/GuestCard";
import SecondMainContent from "./components/SecondMainContent";
import SmailBanner from "./components/SmailBanner";
import Title from "./components/Title";
import TopCard from "./components/TopCard";
import Image from "../../assets/images/7E1A8283-2048x1365.jpeg";

function MainHome() {
  return (
    <div>
      <div className="relative bottom-20 px-80">
        <div className="flex flex-col space-y-5">
          <TopCard />
          <FirstMainContent />
          <div className="flex gap-5">
            <div className="w-[860px] h-[202px] bg-slate-800 overflow-hidden">
              <img
                src={Image}
                alt="pic"
                className="w-full h-full object-cover hover:scale-125 hover:duration-200 cursor-pointer"
              />
            </div>
            <div className="w-[860px] h-[202px] bg-slate-800 overflow-hidden">
              <img
                src={Image}
                alt="pic"
                className="w-full h-full object-cover hover:scale-125 hover:duration-200 cursor-pointer"
              />
            </div>
          </div>
          <SecondMainContent />
          <SmailBanner />
          <Title slide="true" text="SẢN PHẨM MỚI VỀ" />
          <div className="grid grid-cols-5 gap-[5.5rem]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Title text="HÌNH ẢNH KHÁCH HÀNG" />
          <div className="grid grid-cols-3 gap-[5.5rem]">
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
            <GuestCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHome;
