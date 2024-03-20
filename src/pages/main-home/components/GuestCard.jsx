import Image from '../../../assets/images/do-tho-bang-dong-1.jpg';
import { IoMdCalendar } from 'react-icons/io';

function GuestCard() {
  return (
    <div className="w-[360px] h-auto ">
      <div className="bg-slate-100 drop-shadow-lg cursor-pointer ">
        <div className="overflow-hidden">
          <img
            src={Image}
            alt="pic"
            className="w-[360px] h-[270px] hover:scale-110 transition duration-150"
          />
        </div>
        <div className="flex justify-center gap-1 py-2">
          <IoMdCalendar />
          <div className="font-semibold text-xs">20/3/2024</div>
        </div>
      </div>

      <div className="font-semibold text-base mt-3 cursor-pointer hover:text-[#6d2b0a]">
        Một số Hình Ảnh giao hàng - Năm 2022
      </div>
    </div>
  );
}

export default GuestCard;
