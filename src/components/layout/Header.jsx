import Logo from '../../assets/images/logo.png';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { IoMdMenu } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';

function Header() {
  const data = [
    {
      name: 'TRANG CHỦ',
    },
    {
      name: 'GIỚI THIỆU',
    },
    {
      name: 'TIN TỨC',
    },
    {
      name: 'TIN TỨC',
    },
    {
      name: 'DỊCH VỤ',
    },
    {
      name: 'LIÊN HỆ',
    },
  ];
  return (
    <div className="2xl:px-[20%] px-[10%] py-2">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="Logo" className="aspect-square w-20" />
        <div className="w-[398px] h-[40px] border-[2px] border-[#6d2b0a] rounded-[5px] relative p-2">
          <input
            type="text"
            className="w-full h-full outline-none"
            placeholder="Nhập từ khoá tìm kiếm"
          />
          <div className="w-[50px] h-[50px] rounded-full bg-[#6d2b0a] absolute -right-10 top-1/2 -translate-y-1/2 ">
            <FaSearch
              className="text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              size={18}
            />
          </div>
        </div>
        <HiOutlineShoppingCart
          size={30}
          className="text-[#6d2b0a] -rotate-12"
        />
      </div>
      <div className="flex items-center justify-between mt-5 ">
        <div className="flex items-center gap-2 bg-[#6d2b0a] py-2 px-2 text-white rounded-[5px]">
          <IoMdMenu />
          <div>DANH MỤC SẢN PHẨM</div>
        </div>
        {data.map((item, index) => (
          <div key={index} className="font-semibold">
            {item.name}
          </div>
        ))}
        <div className="text-xl flex items-center gap-2">
          <FaPhone size={20} className="text-[#6d2b0a]" />
          <span className="font-bold">Hotline:</span>
          <span>088.66666.45</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
