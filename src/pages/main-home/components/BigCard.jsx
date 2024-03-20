import Image from "../../../assets/images/bình-tứ-quý-màu-vàng-tây-2-2048x1365.jpg";

function BigCard() {
  return (
    <div className="w-[350px] h-[650px] border-2 border-[#6d2b0a]">
      <div className="flex justify-center pt-5">
        <img src={Image} alt="pic" className="w-[306px] h-[306px]" />
      </div>
      <div className="flex justify-center pt-3 text-base font-medium cursor-pointer hover:text-[#6d2b0a]">Sen Hạc Bình An</div>
      <div className="flex justify-center pt-3 text-xl font-bold text-[#6d2b0a]">4.900.000₫</div>
      <div className="px-5 text-justify">- Hình ảnh Chim Hạc & Hoa Sen được vẽ tay thủ công 100%, bằng vàng thật trên nền màu vàng, để chúc phúc <span className="text-[#6d2b0a] font-bold">Trường Thọ - May Mắn – Bình An – Phú Quý.</span></div>
      <div className="px-5 text-justify">- Sản phẩm với 2 kích thước là bình cao 28 và 35cm.</div>
      <div className="px-5 text-justify">- Chiều cao & giá bán chưa bao gồm chân đế gỗ.</div>
    </div>
  );
}

export default BigCard;
