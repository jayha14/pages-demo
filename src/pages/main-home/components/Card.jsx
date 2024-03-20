import Image from "../../../assets/images/bình-tứ-quý-màu-vàng-tây-2-2048x1365.jpg";

function Card() {
  return (
    <div className="w-[178px] h-auto">
      <img src={Image} alt="pic" className="w-[178px] h-[178px]" />
      <div className="flex justify-center pt-3 text-base font-normal cursor-pointer hover:text-[#6d2b0a]">Sen Hạc Bình An</div>
      <div className="flex justify-center pt-3 text-xl font-bold text-[#6d2b0a]">4.900.000₫</div>
    </div>
  );
}

export default Card;